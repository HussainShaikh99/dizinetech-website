import Footer1 from '@/components/Footer/Footer1'
import React from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Link from 'next/link'

const PortfolioMasonry = () => {
    return (
        <div>
            <Header1 style={"inner-page"} fluid='container' />
            <Breadcrum pageTitle={'Portfolio Masonry'} pagename={'Portfolio Masonry'} />
            <div className="portfolio-masonry-page pt-150 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        <div className="col-lg-6">
                            <div className="portfolio-card masonry magnetic-item">
                                <div className="card-img-and-content-wrap">
                                    <img src="/assets/img/inner-pages/portfolio-masonry-img1.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Egenslab</span>
                                        <h4><Link href="/portfolio/details">Dominating Auto Search</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="/portfolio">Web Design</Link></li>
                                            <li><Link href="/portfolio">Development</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end align-items-lg-center">
                            <div className="portfolio-card masonry magnetic-item">
                                <div className="card-img-and-content-wrap masonry-img">
                                    <img src="/assets/img/inner-pages/portfolio-masonry-img2.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Zenfy</span>
                                        <h4><Link href="/portfolio/details">Social Media Mastery</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="portfolio">Web Design</Link></li>
                                            <li><Link href="portfolio">Digital Graphics</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-lg-center">
                            <div className="portfolio-card masonry magnetic-item">
                                <div className="card-img-and-content-wrap masonry-img">
                                    <img src="/assets/img/inner-pages/portfolio-masonry-img3.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Triprex</span>
                                        <h4><Link href="/portfolio/details">Brand Reimagined Open</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="portfolio">Logo Design</Link></li>
                                            <li><Link href="portfolio">Development</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-card masonry magnetic-item">
                                <div className="card-img-and-content-wrap">
                                    <img src="/assets/img/inner-pages/portfolio-masonry-img4.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Beautico</span>
                                        <h4><Link href="/portfolio/details">Event Marketing Triumph</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="portfolio">Web Design</Link></li>
                                            <li><Link href="portfolio">Development</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="portfolio-card masonry magnetic-item">
                                <div className="card-img-and-content-wrap">
                                    <img src="/assets/img/inner-pages/portfolio-masonry-img5.jpg" alt="" />
                                    <div className="card-content">
                                        <span>Client: Softconic</span>
                                        <h4><Link href="/portfolio/details">Implemented Segment</Link></h4>
                                        <ul className="tag-list">
                                            <li><Link href="portfolio">Print Collateral</Link></li>
                                            <li><Link href="portfolio">Development</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <a href="#" className="load-more-btn" data-text="Load More">
                                <span>Load More</span>
                                <svg width={20} height={16} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.6035 7.37409L0.626356 7.37364L0.626356 8.62636L17.6035 8.62591L11.7343 14.4951L12.6196 15.3804L20 8L12.6196 0.619627L11.7343 1.50494L17.6035 7.37409Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer1 />
        </div>
    )
}

export default PortfolioMasonry