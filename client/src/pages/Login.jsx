import "./login.css"
import { RiArrowRightDoubleFill } from "react-icons/ri";


const Login = () => {
    return (
        <div className="container-login">
            <header>
                Tienda Virtual AT
                <div className="container-login-btn">
                    
                    <input type="button" value="Sign Up" />
                    
                    <input type="button" value="Sign In" />
                    
                    
                </div>
            </header>
            <main>
                <div className="login-box">
                        <h1>Login</h1>   
                <div className="container-login-content">

                    <input type="text" placeholder="Email" /> 

                    <input type="password" placeholder="Password" className="password-input"/>
                    <button className="Sing-in" type="submit" value="Sign In" >
                        <span>Sing in</span>
                        <RiArrowRightDoubleFill className="Iconright" />      
                    </button>
                    <input type="button" value="Olvidaste tu Clave ?" className="recupassword" />
                    </div>
                    </div>

            </main>
            <footer></footer>
        </div>
    )
}


export default Login