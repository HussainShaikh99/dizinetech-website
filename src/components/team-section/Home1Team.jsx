import Link from 'next/link'
import React from 'react'

const Home1Team = () => {
    return (
        <div className="home1-team-section mb-120">
            <div className="container">
                <div className="row align-items-lg-end g-4 mb-60">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-animation">
                            <span className="sub-title">Meet the Team</span>
                            <h2>Marketing <span>Creative Experts</span> Working for You.</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 d-flex justify-content-lg-end text-animation">
                        <Link href="/team" className="primary-btn2" data-text="Meet Our Team">
                            <span>Meet Our Team</span>
                        </Link>
                    </div>
                </div>
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
                </div>
            </div>
        </div>

    )
}

export default Home1Team