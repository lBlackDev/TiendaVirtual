import axios from 'axios'

const SingInApi = (data) => {
    axios.post('http://127.0.0.1:5000/login/singin', data)
}

const SingUpApi = data => {
    axios.post('http://127.0.0.1:5000/login/singup', data)
}


export {
    SingInApi,
    SingUpApi
}