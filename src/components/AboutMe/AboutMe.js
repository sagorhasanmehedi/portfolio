import React from "react";
import "./AboutMe.css";
import aboutPhoto from "../../images/about.png";
import aboutIcon1 from "../../images/about-icon1.png";
import aboutIcon2 from "../../images/about-icon2.png";
import aboutIcon3 from "../../images/about-icon3.png";
import aboutIcon4 from "../../images/about-icon4.png";

const AboutMe = () => {
  return (
    <div id="about" className="aboutMe-bg">
      <div className="container">
        <div className="section-title">
          <h1>
            About <span>Me</span>
          </h1>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="about-photo">
              <img height="500px" src={aboutPhoto} alt="" />
            </div>
          </div>
          <div className="col-lg-8 text-start">
            <div className="about-pra text-white">
              <p>
                I am Junior Web developer able to build a Web presence from the
                ground up - from concept, navigation, layout and programming to
                UX. Skilled at writing well-designed, testable and efficient
                code using current best practices in Web development. Fast
                learner, hard worker and team player who is proficient in an
                array of scripting languages and multimedia Web tools.My working
                experience includes JavaScript, ES6, React, React Router,
                Node.js, Express.js, MongoDB, Firebase, Heroku, HTML, CSS,
                Bootstrap, Material UI. I have designed, developed, and launched
                customized, highly responsive web applications solutions using
                advanced technologies.
              </p>
              <div className="row pt-3">
                <div className="col-lg-6">
                  <div className="personal-info">
                    <p>
                      <span>Name: </span>MEHEDI HASAN
                    </p>

                    <p>
                      <span>Phone: </span>+8801763553034
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="personal-info">
                    <p>
                      <span>Age: </span> 26
                    </p>
                    <p>
                      <span>Mail: </span>hossenmahmud15@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="resumi-social-button">
                <div className="download-cv">
                  <a
                    className="mybtn"
                    href="https://drive.google.com/file/d/1Z88kiOvH3BSnlccvFpwkTRUrJVXB3Znk/view?usp=sharing"
                  >
                    Download Resume
                  </a>
                </div>
                <div className="social-icon social-margin">
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
          </div>
          <div className="col-lg-12 mt-5">
            <div className="row text-start"></div>
          </div>
        </div>
      </div>
      {/* Counter Area Start */}
      <div className="counter-area">
        <div className="container">
          <div className="row text-white">
            <div className="col-lg-3 col-md-6">
              <div className="single-counter">
                <img src={aboutIcon1} alt="" />
                <h1 style={{ fontSize: "50px" }} className="fw-bold">
                  15+
                </h1>
                <p style={{ fontSize: "18px" }}>Project Done</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-counter">
                <img src={aboutIcon2} alt="" />
                <h1 style={{ fontSize: "50px" }} className="fw-bold">
                  5+
                </h1>
                <p style={{ fontSize: "18px" }}>Happy Users</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-counter">
                <img src={aboutIcon3} alt="" />
                <h1 style={{ fontSize: "50px" }} className="fw-bold">
                  10+
                </h1>
                <p style={{ fontSize: "18px" }}>Great Reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-counter">
                <img src={aboutIcon4} alt="" />
                <h1 style={{ fontSize: "50px" }} className="fw-bold">
                  20+
                </h1>
                <p style={{ fontSize: "18px" }}>Support Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area End */}
    </div>
  );
};
export default AboutMe;
