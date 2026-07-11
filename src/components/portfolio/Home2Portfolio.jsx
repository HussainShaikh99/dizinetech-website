import Link from 'next/link'
import React from 'react'

const Home2Portfolio = () => {
    return (
        <>
            <div className="home2-portfolio-section mb-120">
                <div className="container">
                    <div className="row justify-content-center g-4 mb-70">
                        <div className="col-xl-6 col-lg-8 text-animation">
                            <div className="section-title two txt-center">
                                <span className="sub-title">
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 0H6L2.5 3.5L6 7H3.5L0 3.5L3.5 0Z" />
                                    </svg>
                                    latest project
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 7L0 7L3.5 3.5L6.11959e-07 -5.24537e-07L2.5 -3.0598e-07L6 3.5L2.5 7Z" />
                                    </svg>
                                </span>
                                <h2>Behind the scenes unveiling <span>our projects.</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-70">
                        <div className="col-lg-6">
                            <div className="portfolio-card magnetic-item">
                                <div className="card-img-and-content-wrap">
                                    <img src="assets/img/home2/portfolio-img-01.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Egenslab</span>
                                        <h4><Link href="/portfolio/details">Dominating Search Results.</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="/portfolio">Web Design</Link></li>
                                            <li><Link href="/portfolio">Development</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-card magnetic-item mt-30">
                                <div className="card-img-and-content-wrap">
                                    <img src="assets/img/home2/portfolio-img-02.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Zenfy</span>
                                        <h4><Link href="/portfolio/details">From Unknown to Industry Leader.</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="/portfolio">Logo Design</Link></li>
                                            <li><Link href="/portfolio">Digital Graphics</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-card magnetic-item">
                                <div className="card-img-and-content-wrap">
                                    <img src="assets/img/home2/portfolio-img-03.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Triprex</span>
                                        <h4><Link href="/portfolio/details">Driving Sales Thru Organic Traffic.</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="/portfolio">Print Collateral</Link></li>
                                            <li><Link href="/portfolio">Digital Graphics</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-card magnetic-item mt-30">
                                <div className="card-img-and-content-wrap">
                                    <img src="assets/img/home2/portfolio-img-04.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Beautico</span>
                                        <h4><Link href="/portfolio/details">Unlocking Organic Growth.</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="/portfolio">Digital Graphics</Link></li>
                                            <li><Link href="/portfolio">Development</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <Link href="/portfolio" className="view-btn">
                                <span>View All Project</span>
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home2Portfolio