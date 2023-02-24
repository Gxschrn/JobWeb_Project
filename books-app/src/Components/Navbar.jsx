import axios from "axios";
import React, { useState } from "react";

const Navbar = () => {
    const [query, setQuery] = useState("")


  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{background: "#99F7AB"}}>
        <div className="container-fluid">
          <a className="navbar-brand fs-2 px-4" style={{color: "#499658"}} href="#">
            Job
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <div>
                <li style={{listStyleType:'none', margin: "20px"}}>
                    <a href="" style={{textDecoration: "none", margin: "20px", color:"#499658"}}>Sign in</a>
                    <a href="" className="px-3 py-2" style={{textDecoration: "none", background: "#ABDF75", color: "#499658",borderRadius: "10px"}}>Login</a>
                </li>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
