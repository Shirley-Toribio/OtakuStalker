#!flask/bin/python
from flask import Flask, jsonify, abort, send_file
import otakustalkerUsernameAnalysis as osua
import otakustalker_wordfreq as wf
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# tasks = [
#     {
#         'id': 1,
#         'title': u'Buy groceries',
#         'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
#         'done': False
#     },
#     {
#         'id': 2,
#         'title': u'Learn Python',
#         'description': u'Need to find a good Python tutorial on the web',
#         'done': False
#     }
# ]

# @app.route('/todo/api/v1.0/tasks', methods=['GET'])
# def get_tasks():
#     return jsonify({'tasks': tasks})

@app.route('/screenname/api/v1.0/analysis/<user>', methods=["GET"])
def analyzeUser(user):
    return jsonify(osua.usernameAnalysis(user))

@app.route('/screenname/api/v1.0/analysis/<user>/wordcloud', methods=["GET"])
def wordCloud(user):
    wf.makeWordCloud(user)
    return send_file("otakustalker_img.png", mimetype = "image/png")

if __name__ == '__main__':
    app.run(debug=True)
