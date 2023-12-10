from flask import Flask, render_template, request
from datos import data, c_obj
from routes.login import loginRoute


# Creacion de la instanacia de Flask
app = Flask(__name__)

objetos = c_obj(data)


#Primera Vista /

@app.route('/login')
def login():
    loginRoute()


@app.route('/home')
def home():
    return




if __name__ == '__main__':
    app.run(debug=True)

