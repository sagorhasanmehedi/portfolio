import React from "react";
import "./Portfolio.css";
import work1 from "../../images/work/wark1.png";
import work2 from "../../images/work/wark2.png";
import work3 from "../../images/work/wark3.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-bg">
      <div className="container">
        <div className="section-title">
          <h1>
            My <span>Portfolio</span>
          </h1>
        </div>
        {/* portfolio item part */}
        <div className="row mt-5">
          <div className="col-lg-4 mb-4">
            <div className="item-thumbnail">
              <img className="img-fluid" src={work1} alt="" />
              <div className="content-overlay">
                <div className="content">
                  <h5 className="mt-5 fw-bold">Quadex Drone Shop</h5>
                  <div className="links">
                    <a
                      rel="noopener noreferrer"
                      href="https://assignment-12-2c757.web.app/"
                      className="link"
                      target="_blank"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="img-popup image-preview"
                      target="_blank"
                      href="https://github.com/sagorhasanmehedi/quadex-client-side"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="details-button">
                    <button>Project Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="item-thumbnail">
              <img className="img-fluid" src={work2} alt="" />
              <div className="content-overlay">
                <div className="content">
                  <h5 className="mt-5 fw-bold">Roam Travel Agency</h5>
                  <div className="links">
                    <a
                      rel="noopener noreferrer"
                      href="https://assignment-11-clint-side.netlify.app/"
                      className="link"
                      target="_blank"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="img-popup image-preview"
                      target="_blank"
                      href="https://github.com/sagorhasanmehedi/ream-client-side"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="details-button">
                    <button>Project Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="item-thumbnail">
              <img className="img-fluid" src={work3} alt="" />
              <div className="content-overlay">
                <div className="content">
                  <h5 className="mt-5 fw-bold">The Book Town</h5>
                  <div className="links">
                    <a
                      rel="noopener noreferrer"
                      href="https://thebooktown.wiztecbd.online/"
                      className="link"
                      target="_blank"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="img-popup image-preview"
                      target="_blank"
                      href="https://github.com/sagorhasanmehedi/pick-a-book"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="details-button">
                    <button>Project Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
