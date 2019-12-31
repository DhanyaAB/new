from flask import Flask, request, jsonify
from testlog import app, curr
import sys
jobname = ['PolyLogyx_Detection_Automation_Test_Suite', 'PolyLogyx_Sanity_Test_Suite', 'PolyLogyx_Node_Scale_Test']



@app.route("/", methods=["GET"])
def job1():
	out=curr.find({'job':jobname[1]})
	dic={}
	for i in out:
		dic['job']=i['job']
		dic['output']=i['output']
		return jsonify(dic)
@app.route("/job2", methods=["GET"])
def job2():
	out=curr.find({'job':jobname[0]})
	dic={}
	for i in out:
		dic['job']=i['job']
		dic['output']=i['output']
		return jsonify(dic)
@app.route("/job3", methods=["GET"])
def job3():
	out=curr.find({'job':jobname[2]})
	dic={}
	for i in out:
		dic['job']=i['job']
		dic['output']=i['output']
		return jsonify(dic)
