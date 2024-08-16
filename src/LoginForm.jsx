import React from 'react'
import './LoginForm.css'

function LoginForm() {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="UserName" required />
                </div>
                <div className="input-box"> 
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="remember">
                    <label><input type="checkbox" />Remember</label>
                    <a href="#">Forget Password</a>
                </div>
                    <button type="submit">Login</button>
                
                <div className="reg-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>


            </form>
        </div>

    )
}
export default LoginForm;