import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./Navbar.scss";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark w-100">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="logo"
              src={require("../../assets/Netflixlogo.png")}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse bg-dark navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/main"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/movies-1920"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tvshows-006" className="nav-link active" href="#">
                  Tv Shows
                </Link>
              </li>
            </ul>

            <div className="signOut">
              <Logout />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
