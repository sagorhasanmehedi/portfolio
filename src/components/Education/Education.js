import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div className="education-bg">
      <div className="container">
        <div className="section-title">
          <h1>
            <span>Education</span> & Courses
          </h1>
        </div>
        {/* Education Items start */}
        <div className="row text-white mt-5">
          <div className="col-lg-6 mb-4">
            <div className="resume-box">
              <div className="resume-title">
                <h4 className="title text-center">Education</h4>
              </div>
              <div className="education-list text-start">
                <div className="single-education">
                  <div className="year">
                    <span>2019-present</span>
                  </div>
                  <h4 className="university-name">
                    North Bengal International University
                  </h4>
                  <p className="degree">BSC in political science</p>
                </div>
              </div>
              <div className="education-list  text-start">
                <div className="single-education">
                  <div className="year">
                    <span>2012-2014</span>
                  </div>
                  <h4 className="university-name">Jahangirpur Govt. College</h4>
                  <p className="degree">Higher Secondary Certificate (HSC)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Education Items End */}
          {/* Courses item */}
          <div className="col-lg-6 mb-3">
            <div className="resume-box">
              <div className="resume-title">
                <h4 className="title text-center">Professional Training</h4>
              </div>
              <div className="education-list text-start">
                <div className="single-education">
                  <div className="year">
                    <span>2021-2021</span>
                  </div>
                  <h4 className="university-name">Programming Hero</h4>
                  <p className="degree"> Complete Web Development</p>
                </div>
              </div>
              <div className="education-list  text-start">
                <div className="single-education">
                  <div className="year">
                    <span>2022-PRESENT</span>
                  </div>
                  <h4 className="university-name">Learn With Sumit</h4>
                  <p className="degree">Think In A Redux Way (Redux)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Courses Items End */}
          {/* General skill start */}
          <div className="col-lg-12">
            <div className="all-skill">
              <div className="skill-title">
                <h4>Coding Skill</h4>
              </div>
              {/* skill item */}
              <div className="row">
                <div className="col-lg-6 col-md-6 mt-3 px-5 text-start">
                  <div className="skill-item mb-3">
                    <h6>HTML</h6>
                    <div className="progress">
                      <div className="html"></div>
                    </div>
                  </div>
                  <div className="skill-item mb-3">
                    <h6>CSS</h6>
                    <div className="progress">
                      <div className="css"></div>
                    </div>
                  </div>
                  <div className="skill-item mb-3">
                    <h6>JavaScript</h6>
                    <div className="progress">
                      <div className="js"></div>
                    </div>
                  </div>
                  <div className="skill-item mb-3">
                    <h6>Mysql</h6>
                    <div className="progress">
                      <div className="Mysql"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 px-5 mt-3 text-start">
                  <div className="skill-item mb-3">
                    <h6>React</h6>
                    <div className="progress">
                      <div className="react"></div>
                    </div>
                  </div>
                  <div className="skill-item mb-3">
                    <h6>Node.js</h6>
                    <div className="progress">
                      <div className="node"></div>
                    </div>
                  </div>
                  <div className="skill-item mb-3">
                    <h6>Express.js</h6>
                    <div className="progress">
                      <div className="express"></div>
                    </div>
                  </div>
                  <div className="skill-item mb-3">
                    <h6>MongoDB</h6>
                    <div className="progress">
                      <div className="mongodb"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* General skill end */}
        </div>
      </div>
    </div>
  );
};

export default Education;
