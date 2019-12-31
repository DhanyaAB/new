from jenkinsapi.jenkins import Jenkins
import jenkins
import json
from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_pymongo import PyMongo
from flask import jsonify
import datetime
import glob
import os
import xmltodict
import gridfs
# from datetime import datetime
import paramiko
from testlog import curr
import requests, json
from bson.binary import Binary
url = 'http://13.235.153.134:8080'
jobname = ['PolyLogyx_Detection_Automation_Test_Suite', 'PolyLogyx_Sanity_Test_Suite', 'PolyLogyx_Node_Scale_Test']
host_ip = "13.235.153.134"
password = 'polylogyx123'
username = 'admin'
mySSHK = '/home/asm/ASM_polylogyx.pem'
def param(job,number):
	try:
		cert = paramiko.RSAKey.from_private_key_file(mySSHK)
		ssh=paramiko.SSHClient()
		ssh.load_system_host_keys()
		ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
		ssh.connect(hostname=host_ip, port=22,username="ubuntu", pkey=cert)
		#print("Connected")
	except paramiko.AuthenticationException:
		print("Failed to connect due do wrong password or username")
		exit(1)
	except Exception as e:
    		print("Not connected")
    		exit(2)
	stdin, stdout, stderr = ssh.exec_command('cat /var/lib/jenkins/jobs/'+ job + '/builds/'+ number+ '/robot-plugin/report.html')
	x=stdout.readlines()
	return(x)
def form_date(duration,stamp):
	seconds=(duration/1000)%60
	minutes=(duration/(1000*60))%60
	hours=(duration/(1000*60*60))%24
	x=stamp.split(':')
	t=str(int(x[0])+(int(hours)))
	t1=str(int(x[1])+(int(minutes)))
	t2=str(int(x[2])+(int(seconds)))
	t3=t+':'+t1+':'+t2
	time_data=t3.split(':')
	time_data[0]=int(int(time_data[0])+int(time_data[1])/60)
	time_data[1]=int(int(time_data[1])%60+int(time_data[2])/60)
	time_data[2]=int(int(time_data[2])%60)
	if time_data[0]>12:
		time_data.insert(0, str(time_data[0]-12))
	if len(str(time_data[0]))<2:
		time_data[0]='0' +str(time_data[0])
	if len(str(time_data[1]))<2:
		time_data[1]='0' +str(time_data[1])
	if len(str(time_data[2]))<2:
		time_data[2]='0' +str(time_data[2])
	time_data=str(time_data[0])+":"+str(time_data[1])+":"+str(time_data[2])
	#print(time_data)
	return time_data


def all_jobs(url=url, jobname=jobname, username=username, password=password):
	print(len(jobname))
	J = jenkins.Jenkins(url, username=username, password=password)
	for job in jobname:
		k = []
		out = curr.find({'job': job})
		l = [i for i in out]
		l1 = [i['output'] for i in l]
		if len(l1) == 0:
			print('if loop')
			last_build_number = J.get_job_info(job)
			dic1 = {}
			for i in last_build_number['builds']:
				build_info = J.get_build_info(job, i['number'])
				b = build_info['actions']
				dic1 = {}
				result = build_info['result']
				result12 = build_info['timestamp']
				result2 = build_info['duration']
				result1 = datetime.datetime.fromtimestamp(float(result12) / 1000.).strftime('%I:%M:%S')
				end_time = form_date(result2, result1)
				da_ti = datetime.datetime.fromtimestamp(float(result12) / 1000.).strftime('%d-%m-%Y %I:%M:%S')
				if result != 'ABORTED':
					#x=param(job,str(i['number']))
					#encoded=[y.encode('utf-8') for y in x]

					#dic1["file"]=encoded
					for i in b:
						if 'buildsByBranchName' in i:
							dic = str(i['buildsByBranchName']['refs/remotes/origin/jenkins_test']['buildNumber'])
							dic1['buildNumber'] = dic
							break
					for i in b:
						if 'failCount' in i:
							dic1['failCount'] = i['failCount']
							dic1['totalCount'] = i['totalCount']
							dic1['passCount'] = i['totalCount'] - i['failCount']
					dic1['date'] = da_ti
					dic1['result'] = result
					dic1['end_time'] = end_time
					k.append(dic1)
			curr.insert_one({'job': job, 'output': k})
		else:
			print('else loop')
			print(job)
			last_build_number = J.get_job_info(job)['lastCompletedBuild']['number']
			build_info = J.get_build_info(job, last_build_number)

			result1 = build_info['timestamp']
			da_ti = datetime.datetime.fromtimestamp(float(result1) / 1000.).strftime('%d-%m-%Y %I:%M:%S')
			da_ti1 = datetime.datetime.fromtimestamp(float(result1) / 1000.).strftime('%I:%M:%S')
			dic2 = {}
			for i in l:

				if int(last_build_number) > int(i['output'][0]['buildNumber']):
					print("hello")
					build_info = J.get_build_info(job, last_build_number)
					b = build_info['actions']
					#x=param(job,str(last_build_number))
					#encoded=[y.encode('utf-8') for y in x]
					#dic2["file"]=encoded
					dic2['filename'] = "report.html"
					result = build_info['result']
					result12 = build_info['timestamp']
					result2 = build_info['duration']
					result1 = datetime.datetime.fromtimestamp(float(result12) / 1000.).strftime('%I:%M:%S')
					end_time = form_date(result2, result1)
					da_ti = datetime.datetime.fromtimestamp(float(result12) / 1000.).strftime('%d-%m-%Y %I:%M:%S')
					for i in b:
						if 'buildsByBranchName' in i:
							dic = str(i['buildsByBranchName']['refs/remotes/origin/jenkins_test']['buildNumber'])
							dic2['buildNumber'] = dic
							break
					for i in b:
						if 'failCount' in i:
							dic2['failCount'] = i['failCount']
							dic2['totalCount'] = i['totalCount']
							dic2['passCount'] = i['totalCount'] - i['failCount']
					dic2['date'] = da_ti
					dic2['result'] = result
					dic2['end_time'] = end_time
					curr.update_one({'job': job}, {'$push': {'output': {'$each': [dic2], '$position': 0}}})



while(1):
    all_jobs()
