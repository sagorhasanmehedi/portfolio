import React from "react";
import "./Navbar.css";
import resume from "../../images/pdf/Mehedi_Web_Developer_Resume.pdf"



const Navbar = () => {
  return (
    <div className="navbar-bg">
      <div className="container nav-bottom-border">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <h2 className="fw-bold text-white">
              MEHEDI<span style={{ color: "#5c10e3" }}> .</span>
            </h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <span style={{ color: "#5c10e3" }}>
                {" "}
                <i className="fas fa-align-justify"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    download="Mehedi Hasan Resume" href={resume}
                    
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
