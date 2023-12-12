from flask import Flask, render_template, request, make_response
from controllers_db import controllers_login

login = controllers_login()

# Creacion de la instanacia de Flask
app = Flask(__name__)

@app.route('/login/sign-in', methods=['POST'])
def login_signin():
    data = request.get_json()
    
    

    if data.get("email") and data.get("password"):
        try:
            user = login.signin(data["email"], data["password"])
        except Exception as ex:
            user = None
    else:
        return {
            "status": 404,
            "message": "parametros no completos"
        }

    if user:
        response = make_response({
            "status": True,
            "name": data["name"],
            "token": ""
        })
        response.status = 200
    else: 
        response = make_response({
            "status": 404,
            "message": "parametros no completos"
        })
        response.status = 404
    
    return response
@app.route('/login/sign-up', methods=['POST'])
def login_signup():
    data = request.get_json()

    if data.get("name") and data.get("email") and data.get("password"):
        try:
            user = login.signup(data["name"], data["email"], data["password"])
        except Exception as ex:
            user = None
    else:
        return {
            "status": 404,
            "message": "parametros no completos"
        }

    return {
        "status": 200,
        "message": "Usuario creado satisfactoriamente"
    }

if __name__ == '__main__':
    app.run(debug=True)

