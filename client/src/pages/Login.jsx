import "./login.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";




const Login = () => {
    return (
        <body>
            <header>
                <h2 className="logo">Tienda AT</h2>
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <button className="btn-login"> Login</button>
                    </nav>
            </header>

            <div className="container">
                <span className="icon-close"><IoCloseSharp />
</span>


                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon" ><MdOutlineEmail /></span>
                            <input type="email" required></input>
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon" ><RiLockPasswordFill /></span>
                            <input type="password" required></input>
                            <label>password</label>
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


        </body>
    )
}


export default Login