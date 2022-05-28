import React from "react";
import "./Portfolio.css";
import Car from "../../Images/car.jpg";
import Netflix from "../../Images/netflix.jpg";
import Ecomreact from "../../Images/ecommerce react.jpg";
import Booking from "../../Images/booking app.jpg";
import Shoe from "../../Images/ecommerce shoe.jpg";
import Hulu from "../../Images/hulu.jpg";
import Weather from "../../Images/weather app.jpg";
import Blog from "../../Images/blog app.jpg";
import Travel from "../../Images/travel.jpg";
import Food from "../../Images/food.jpg";
import Data from "../../Images/data.jpg";
import BreakingBad from "../../Images/breakingbad.jpg";
function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Projects</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={Hulu} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Hulu App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Hulu clone</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/Tailwind-nextjs-hulu-website"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://tailwind-nextjs-responsive-hulu-website.vercel.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Car} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Car App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Car Website</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/Car-Application"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://wondrous-wisp-afc15d.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Booking} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Booking App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Resort Booking</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/ReactJs-Booking-App"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://preeminent-beignet-f87843.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Ecomreact} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">E-commerce</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Digital Shopping</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/React-E-Commerce-App"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://transcendent-blancmange-74a4bb.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Shoe} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Shopping Website</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">E-commerce</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/ecommerce-website"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://playful-bunny-f5e9b8.netlify.app"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Weather} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Weather App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Weather</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/ReactJs-Weather-App"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="https://grand-cupcake-e63950.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Netflix} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Netflix</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Netflix Ui</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/ReactJs-TailwindCss-Netflix-App"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://chimerical-pixie-ea2bc8.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={Blog} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Blog App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Blog app</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/React-Blog-Application"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://unique-kangaroo-281962.netlify.app/s"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Data} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Data Secured</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Data Secured</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/React-Router-Dom"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ubiquitous-llama-2a16b7.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Travel} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Travel</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Dream Travel</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/Travel-React-App"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://626c0d3a82df2c387cf3cc59--genuine-shortbread-0112dd.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Food} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Delicious Food</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Food Recipe</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/React-Food-recipe_app"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dreamy-conkies-7c6ba6.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={BreakingBad} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">BreakingBad Characters</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Breaking Bad</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shanmugapriyasivaraj/Reactjs-BreakinBad-Api"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://delicate-tiramisu-b58479.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
