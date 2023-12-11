from flask import Flask, render_template, request, make_response
from datos import data, c_obj
from routes.login import login

# Creacion de la instanacia de Flask
app = Flask(__name__)

objetos = c_obj(data)

users = [
    {
        "username": "Dieggo",
        "password": "12345678"
    }
]
#Primera Vista /

@app.route('/login', methods=['POST'])
def login():
    name = request.form["username"]
    password = request.form["password"]
    

    for user in users:
        if user["username"] == name:
            if user["password"] == password:
                log = True
                break
            else:
                log = False
        else:
            log = False
    print(log)
    response = make_response({
        "name": "diego"
    })
    response.status = 200
    
    return response

@app.route('/home')
def home():
    return




if __name__ == '__main__':
    app.run(debug=True)

