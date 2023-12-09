import "./login.css"

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
                <div className="container-login-content">
                    <label type="text" placeholder="Email" >
                        Email
                    </label>
                    <input type="text" placeholder="Email" />
                    <label type="password" placeholder="Password" >
                        Password
                    </label>
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign In" />
                    </div>

            </main>
            <footer></footer>
        </div>
    )
}

export default Login