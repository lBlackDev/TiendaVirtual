# datos

data = [
    {
        "name": "Alimento",
        "description": "Alimento proteicto para todo tipo de mascotas",
        
    },
    {
        "name": "Bebestible",
        "description": "Pa la calor",
        "date": "algo",
    },
    {
        "name": "Juguetes",
        "description": "Pa que juegue no seas tacañ@",
        "date": "algo",
    },
    {
        "name": "algo",
        "description": "algo",
        "date": "algo",
    },
    {
        "name": "algo",
        "description": "algo",
        "date": "algo",
    }
]

def c_obj(data):
    objetos = [
        {
            "name": elemento["name"],
            "description": elemento["description"]
        }
        for elemento in data
    ]
    return objetos
