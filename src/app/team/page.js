import React from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const TeamPage = () => {
  return (
    <>
      <Header1 style={"inner-page"} fluid='container' />
      <Breadcrum pageTitle={'Team'} pagename={'Team'} />
      <div className="team-page pt-150 mb-120" id="scroll-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="team-card magnetic-item">
                <div className="team-img">
                  <img src="assets/img/home1/team-img1.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Cassian Coleson</h5>
                  <span>Founder at, Nexaq</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card mt-20 magnetic-item">
                <div className="team-img">
                  <img src="assets/img/home1/team-img2.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Sebastian Jack</h5>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card mt-40 magnetic-item">
                <div className="team-img">
                  <img src="assets/img/home1/team-img3.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Violet Scarlett</h5>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card magnetic-item">
                <div className="team-img">
                  <img src="assets/img/home1/team-img4.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Michael Daniel</h5>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card magnetic-item">
                <div className="team-img">
                  <img src="assets/img/inner-pages/team-img1.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Michael Daniel</h5>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card mt-20 magnetic-item">
                <div className="team-img">
                  <img src="assets/img/inner-pages/team-img2.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Owen Samuel</h5>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card mt-40 magnetic-item">
                <div className="team-img">
                  <img src="assets/img/inner-pages/team-img3.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Amelia Sophia</h5>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card magnetic-item">
                <div className="team-img">
                  <img src="assets/img/inner-pages/team-img4.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Sebastian Jack</h5>
                  <span>Graphic Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card magnetic-item">
                <div className="team-img">
                  <img src="assets/img/inner-pages/team-img5.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Cassian Coleson</h5>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card mt-20 magnetic-item">
                <div className="team-img">
                  <img src="assets/img/inner-pages/team-img6.png" alt="" />
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h5>Violet Scarlett</h5>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  )
}

export default TeamPage