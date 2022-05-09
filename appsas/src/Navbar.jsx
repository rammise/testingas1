import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './pages/Style/NavBar.css';

function Navbar() {
  return (

          <header className="p-3 bg-dark text-white">
              <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <Link className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"to="/">
                    HOME
                  </Link>

                  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link className="nav-link px-2 text-secondary"to="/">Home</Link></li>
                    <li><Link className="nav-link px-2 text-secondary"to="/blogs">Blogs</Link></li>
                    <li><Link className="nav-link px-2 text-secondary"to="/contact">Contact</Link></li>
                    <li><Link className="nav-link px-2 text-secondary"to="/login">Login</Link></li>
                    <li><Link className="nav-link px-2 text-secondary"to="/dashboard">Test Dashboard</Link></li>
                  </ul>

                  <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                  </form>

                  <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                  </div>
                </div>
              </div>
            </header>


  );
}

export default Navbar;