import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BOOK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/Team">
                Team
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
