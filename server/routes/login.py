from flask import Flask, request

login = Flask(__name__)

@login.route('/login')
def comprobar():
    print()