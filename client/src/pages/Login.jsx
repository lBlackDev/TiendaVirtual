import "./login.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";





const Login = () => {
    const [action,setAction] = useState ("Login");

    const handleToggleAction = () => {
        setAction(action === "Login"? "Register" : "Login");
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
                    {action === "Login"? "Registrate" : "Login"}</button>
                </nav>
            </div>

            <div className="container">
                {/*boton X accion de login y registro*/}
                <span className="icon-close"onClick={handleToggleAction}><IoCloseSharp /></span> 

                <div className={'form-box ${action.toLoweCase()}'}> 
                    <h2>{action}</h2>
                    <form action="#">
                        {/*Email*/}
                        <div className="input-box">
                            <span className="icon"><MdOutlineEmail /></span>
                            <input type="email" required></input>
                            <label>Email</label>
                        </div>
                        {/*Password*/}
                        <div className="input-box">
                            <span className="icon"><RiLockPasswordFill /></span>
                            <input type="password" required></input>
                            <label>Password</label>
                        </div>
                        {/*campo registro*/}
                        {action === "Register" && (
                            <>
                            <div className="input-box">
                                <span ClassName="icon"></span>
                                <input type="text" required ></input>
                                <label>Nombre</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="tel" required ></input>
                                <label>Telefono</label>
                            </div>  
                            </>
                        )}
                        <div className="remember-forgot">
                            <label><input type="checkbox"></input>
                            Recordarme</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn">{action}</button>
                        <div className="login-register">
                            <p>{action === "Login" ? "No tienes cuenta?" : "Ya tienes cuenta "}
                            <a href="#" className="register-link" onClick={handleToggleAction}>
                                {action === "Login"? "Registrate" : "Login"}
                            </a>
                            </p>
                        </div>
                    </form>   
                </div>
            </div>
        </div>
    )
}




export default Login