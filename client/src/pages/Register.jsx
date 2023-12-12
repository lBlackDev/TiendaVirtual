import "./register.css";

const Register = () => {
    return (
        <div className="container-register">
            <header>
                Tienda Virtual AT
                <div className="container-login-btn">
                    
                    <input type="button" value="Sign Up" />
                
                    <input type="button" value="Sign In" />
                    
                    
                </div>
            </header>
            <main>
                <div className="login-box">
                    <label>
                        <h1>Registro</h1>
                    </label>
                    <div className="container-login-content">

                        <label>
                            <input type="text" placeholder="Email" /> 
                        </label>
                    <input type="password" placeholder="Password" className="password-input"/>
                    <input type="submit" value="Sign In" />
                    <input type="button" value="Olvidaste tu Clave ?" className="recupassword" />
                    </div>
                    </div>

            </main>
            <footer></footer>
        </div>
    )
}

export default Register;