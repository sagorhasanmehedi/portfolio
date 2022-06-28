import React from "react";
import "./Banner.css";
import myPhoto from "../../images/my-photo-modified.png";
import Navbar from "../Navbar/Navbar";
const Banner = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="banner-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-info text-white text-start my-5">
                <h2>HI THERE !</h2>
                <h1>
                  I'M <span>MEHEDI HASAN</span>
                </h1>
                <h3>Full-Stack Developer</h3>

                <div className="social-icon mt-4">
                  <ul>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/SAGOR.553034/"
                      >
                        {" "}
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/mehedi-hasan-27a272220"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/sagorhasanmehedi"
                      >
                        {" "}
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-photo">
                <img className="img-fluid w-50" src={myPhoto} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
