import Link from "next/link";
import React from "react";

const Home5about = () => {
  return (
    <>
      <div className="home5-about-section mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-content-wrap text-animation">
                <div className="section-title four">
                  <span className="sub-title">About DizineTech</span>
                  <h2>
                    Helping Businesses <br></br>
                    <span>Build, Grow & Automate Online.</span>
                  </h2>
                </div>
                <p>
                  Dizinetech is a digital solutions agency dedicated to helping
                  businesses build, grow, and automate their online presence. We
                  create modern websites, ecommerce stores, custom web
                  applications, data-driven SEO strategies, and AI-powered
                  solutions tailored to your business goals. Every project is
                  designed with performance, user experience, and long-term
                  growth in mind, ensuring your business is equipped with the
                  right technology to succeed in today's digital world.
                </p>
                <ul>
                  <li>
                    <strong>50+ Projects Successfully Delivered</strong>
                  </li>
                  <li>
                    <strong>Trusted by Businesses Worldwide</strong>
                  </li>
                  <li>
                    <strong>Years of Hands-On Expertise</strong>
                  </li>
                </ul>
                <Link href="/about" className="view-btn four">
                  <span>More About Us</span>
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="about-image-wrapper">
                <img
                  src="assets/img/home-about1.webp"
                  alt="Dizinetech Team"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5about;
