import React from "react"
import "../assets/css/LogIn.css"

function LoginPage () {
    return (
        <div 
            className="login-container">
            <div className="form-box">
                <div className="form-value">
                    <form>
                        <h2>Login</h2>
                        <div className="input-box">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" />
                            <label htmlFor="">PIN (4 Digit)</label>
                        </div>
                        <div className="forget">
                            <label htmlFor=""><input type="checkbox" />Remember Me</label>
                            <a href="/">Forget PIN?</a>
                        </div>
                        <button>Log in</button>
                        <div className="register">
                            <p>Don't have a account? <a href="/">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginPage