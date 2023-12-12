import sqlite3 as sql

class controllers_login():
    def __init__(self):
        pass

    def create_table(self):
        conn = sql.connect('database/db_user.sqlite')

        cursor = conn.cursor()
        # Asegurar que la tabla existe
        cursor.execute('''CREATE TABLE IF NOT EXISTS users
                    (
                       id INTEGER PRIMARY KEY, 
                       email TEXT UNIQUE, 
                       password TEXT
                    )''')
        conn.commit()
        conn.close()

    def signin(self, email, password):
        conn = sql.connect('database/db_user.sqlite')

        cursor = conn.cursor()

        self.create_table()

        cursor.execute("SELECT * FROM users WHERE email =? AND password =?", (email, password))

        row = cursor.fetchone()

        conn.commit()

        conn.close()
        
        #En caso de no encontrar usuario devuelve None
        return row
    
    def signup(self, email, password):
        conn = sql.connect('database/db_user.sqlite')

        cursor = conn.cursor()

        self.create_table()
        
        try:
            cursor.execute("INSERT INTO users (email, password) VALUES (?,?)", (email, password))
            conn.commit()
            status_code = 200
            print("Usuario creado satisfactoriamente")
        except sql.IntegrityError:
            print("El correo ya existe")
            status_code = 403
        finally:
            conn.commit()

            conn.close()

        return {
            "status": status_code,
        }