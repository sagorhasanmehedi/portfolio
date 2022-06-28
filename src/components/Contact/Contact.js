import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-bg">
        <div className="container">
          <div className="section-title">
            <h1>
              <span>Contact </span>Me
            </h1>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-12 col-md-6 col-sm-12">
              <div className="contact-info text-start text-white m-5">
                <h2 className="text-white fw-bold">
                  {" "}
                  <span style={{ color: "#5c10e3" }}>Contact</span> info
                </h2>
                <p>
                  <span style={{ color: "#5c10e3" }} className="fw-bold">
                    Email:{" "}
                  </span>
                  mehedihasansagor1995@gmail.com
                </p>
                <p>
                  <span style={{ color: "#5c10e3" }} className="fw-bold">
                    Phone:{" "}
                  </span>
                  +8801763553034
                </p>
                <p>
                  <span style={{ color: "#5c10e3" }} className="fw-bold">
                    Address:{" "}
                  </span>
                  61/A Lake Circus Rd, Kolabagan, Dhaka-1207
                </p>
                <div className="social-icon text-start">
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
            <div className="col-lg-6 col-12 col-md-6 col-sm-12">
              <div className="contact-form">
                <form id="contact-form" action="#">
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name*"
                          required="required"
                          data-error="Name is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email*"
                          required="required"
                          data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject*"
                          required="required"
                          data-error="Subject is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          placeholder="Message*"
                          rows="7"
                          required="required"
                          data-error="Please,leave us a message."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <button className="contact-submit-btn" type="submit">
                        <span>SEND MESSAGE</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer content */}
      <div style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="text-white">
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.548)",
                    fontSize: "14px",
                  }}
                  className="py-4"
                >
                  Copyright 2021 - 2021 | All rights reserved by MEHEDI HASAN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
