import React from 'react';
import './Style/Login.css';

function Login() {
    return (
        
        <main className="form-signin text-center">
          <form>
            <img src="https://educo.ie/wp-content/uploads/2017/01/educo-round-logo-final-300.png" className="mb-4" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
        
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
          </form>
        </main>


    );
}

export default Login;