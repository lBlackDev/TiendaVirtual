import "./login.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";




const Login = () => {
    const [action,setAction] = useState ("Login");
        return (
        <div className="main-body">
            <div className="main-header">
                <h2 className="logo">Tienda AT</h2>
                <nav className="navigation">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <button className="btn-login">Login</button>
                </nav>
            </div>

            <div className="container">
                <span className="icon-close"><IoCloseSharp /></span>

                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><MdOutlineEmail /></span>
                            <input type="email" required></input>
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><RiLockPasswordFill /></span>
                            <input type="password" required></input>
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox"></input>
                            Recordarme</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <p>No tienes una cuenta? <a href="#" className="register-link">Registrar</a></p>
                        </div>
                    </form>   
                </div>
            </div>
        </div>
    )
}




export default Login