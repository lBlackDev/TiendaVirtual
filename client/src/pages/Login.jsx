import "./login.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { SingInApi, SingUpApi } from "../api/login";

const SingUp = ({handleToggleAction}) => {
    const [dataSingUp, setDataSingUp] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        password: ""
    })
    
    const handleSingUp = () => {
        
    }

    return (
        <div className="container">
            <div className={'form-box ${action.toLoweCase()}'}> 
                <h2>Registrate</h2>
                <form action="#">
                    {/*campo registro*/}   
                    <div className="input-box">
                        <span ClassName="icon"></span>
                        <input 
                            type="text"
                            required 
                            />
                        <label>Nombre</label>
                    </div>
                    <div className="input-box">
                        <span ClassName="icon"></span>
                        <input type="text" required ></input>
                        <label>Apellido</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"></span>
                        <input type="tel" required ></input>
                        <label>Telefono</label>
                    </div>  
                    
                    
                    {/*Email*/}
                    <div className="input-box">
                        <span className="icon"><MdOutlineEmail /></span>
                        <input type="email" required></input>
                        <label>Correo</label>
                    </div>
                    {/*Password*/}
                    <div className="input-box">
                        <span className="icon"><RiLockPasswordFill /></span>
                        <input type="password" required></input>
                        <label>Contraseña</label>
                    </div>
                    <button type="submit" className="btn" onClick={handleSingUp}>Registrate</button>
                    <div className="login-register">
                        <p>Ya tienes cuenta? 
                        <a style={{marginLeft:5}} href="#" className="register-link" onClick={handleToggleAction}>
                            Iniciar Sesión
                        </a>
                        </p>
                    </div>
                </form>   
            </div>
        </div>
    )
}

const SingIn = ({handleToggleAction}) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    
    console.log(data)

    const handleSingIn = () => {
        SingInApi(data)
    }
    
    return (
        <div className="container">
            <div className={'form-box ${action.toLoweCase()}'}> 
                <h2>Inicar Sesión</h2>
                <form action="#">
                    {/*campo registro*/}
                    {/*Email*/}
                    <div className="input-box">
                        <span className="icon"><MdOutlineEmail /></span>
                        <input 
                            type="email" 
                            onChange={({target}) => setData((pre) => ({...pre, email:target.value}))}
                            value={data.email}
                            required 
                        />
                        <label>Correo</label>
                    </div>
                    {/*Password*/}
                    <div className="input-box">
                        <span className="icon"><RiLockPasswordFill /></span>
                        <input 
                            type="password" 
                            onChange={({target}) => setData((pre) => ({...pre, password:target.value}))}
                            value={data.password}
                            required
                        />
                        <label>Contraseña</label>
                    </div>
                    
                    
                    <div className="remember">
                        <label><input type="checkbox"></input>
                        Recordarme</label>
                    </div>
                    
                    <button type="submit" className="btn" onClick={handleSingIn}>Inicar Sesión</button>
                    <div className="login-register">
                        <p>No tienes cuenta?
                        <a style={{marginLeft:6}} href="#" className="register-link" onClick={handleToggleAction}>
                            Registrate
                        </a>
                        </p>
                    </div>
                    <div className={`forgot`}>
                        <a href="#">Olvidaste tu Contraseña?</a>
                    </div>
                </form>   
            </div>
        </div>
    )
}

const Login = () => {
    const [singin, setSingin] = useState(true)
    
    const handleToggleAction = () => {
        console.log("Si funciona")
        setSingin(!singin)
    }

    return (
        <div className="main-body">
            <div className="main-header">
                <h2 className="logo">Tienda AT</h2>
                <nav className="navigation">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <button className="btn-login" onClick={handleToggleAction}>
                    {singin ? "Registrate" : "Iniciar Sesión"}</button>
                </nav>
            </div>
            {
                singin 
                ?   <SingIn handleToggleAction={handleToggleAction} />
                :   <SingUp handleToggleAction={handleToggleAction} />
            }
            
        </div>
    )
}

export default Login