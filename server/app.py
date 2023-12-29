from flask import Flask, render_template, request, make_response
from controllers_db import controllers_login

login = controllers_login()

# Creacion de la instanacia de Flask
app = Flask(__name__)


@app.route('/login/signin', methods=['POST'])
def login_signin():
    data = request.get_json()

    if data.get("email") and data.get("password"):
        try:
            user = login.signin(data["email"].lower(), data["password"])
            print(user)
        except Exception as ex:
            user = None
    else:
        return {
            "status": 404,
            "message": "parametros no completos"
        }

    if user:
        response = make_response({
            "status": 200,
            "name": user[1],
            "lastname": user[2],
            "token": ""
        })
        response.status = 200
    else:
        response = make_response({
            "status": 404,
            "message": "Error en el correo o contraseña"
        })
        response.status = 404

    return response


@app.route('/login/signup', methods=['POST'])
def login_signup():
    data = request.get_json()

    if data.get("name") and data.get("email") and data.get("password"):

        try:
            user = login.signup(data["name"].lower(), data["lastname"].lower(
            ), data["email"].lower(), data["password"])
            print(user)
        except Exception as ex:
            print("Hubo un error", ex)
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
