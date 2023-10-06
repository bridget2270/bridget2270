import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to="/"
              className="nav-item btn"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Go to home page"
            >
              <p className="nav-link">Home Page</p>
            </NavLink>
            <NavLink
              to="/create-account"
              className="nav-item btn"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Create an account"
            >
              <p className="nav-link">Create Account</p>
            </NavLink>

            {
            /* For Pt 2 
              <NavLink
                to="/login"
                className="nav-item btn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="See all data"
              >
                <p className="nav-link">Login</p>
              </NavLink>
            */
            }
            <NavLink
              to="/deposit"
              className="nav-item btn"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Make deposits"
            >
              <p className="nav-link">Deposit</p>
            </NavLink>
            <NavLink
              to="/withdraw"
              className="nav-item btn"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Make withdrawals"
            >
              <p className="nav-link">Withdraw</p>
            </NavLink>

            <NavLink
              to="/alldata"
              className="nav-item btn"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="See all data"
            >
              <p className="nav-link">AllData</p>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
