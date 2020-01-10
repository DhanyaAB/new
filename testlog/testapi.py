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
		#res = str(i['file'])[2:-2]
		#dic['file']=res
		#print(dic['file'])'<script type="text/x-jquery-tmpl" id="tagOrTotalDetailsTemplate">\n', b'  <tr>\n', b'    <th>Status:</th>\n', b'    <td>${total} total, ${pass} passed, {{if fail}}<span class="fail">${fail} failed</span>{{else}}<span class="pass">0 failed</span>{{/if}}</td>\n', b'  </tr>\n', b'  {{if doc}}\n', b'  <tr>\n', b'    <th>Documentation:</th>\n', b'    <td>{{html doc}}</td>\n', b'  </tr>\n', b'  {{/if}}\n', b'  {{if combined}}\n', b'  <tr>\n', b'    <th>Pattern:</th>\n', b'    <td>{{html combined}}</td>\n', b'  </tr>\n', b'  {{/if}}\n', b'  {{if links}}{{if links.length}}\n', b'  <tr>\n', b'    <th>Links:</th>\n', b'    <td>{{each links}}<a href="{{html $value.url}}"\n', b'                         title="{{html $value.url}}">{{html $value.title}}</a> &nbsp; {{/each}}</td>\n', b'  </tr>\
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
