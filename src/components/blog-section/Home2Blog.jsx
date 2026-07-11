import Link from 'next/link'
import React from 'react'

const Home2Blog = () => {
    return (
        <>
            <div className="home2-blog-section mb-120">
                <div className="container">
                    <div className="row g-4 align-items-lg-end mb-60">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title two text-animation">
                                <span className="sub-title">
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 0H6L2.5 3.5L6 7H3.5L0 3.5L3.5 0Z" />
                                    </svg>
                                    blog &amp; article
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 7L0 7L3.5 3.5L6.11959e-07 -5.24537e-07L2.5 -3.0598e-07L6 3.5L2.5 7Z" />
                                    </svg>
                                </span>
                                <h2>The latest buzz insights and <span>Inspiration.</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 d-flex justify-content-lg-end">
                            <Link href="/blog" className="view-btn">
                                <span>View All Article</span>
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="row g-md-4 gy-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card style-2 magnetic-item">
                                <div className="blog-card-img-wrap">
                                    <Link href="/blog/blog-details" className="card-img">
                                        <img src="assets/img/home1/blog-img1.jpg" alt="" />
                                    </Link>
                                    <div className="tag">
                                        <a href="blog-grid">News</a>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="blog-meta">
                                        <ul className="category">
                                            <li><Link href="/blog">4 June, 2024</Link></li>
                                        </ul>
                                        <div className="blog-comment">
                                            <span>Comment (12)</span>
                                        </div>
                                    </div>
                                    <h5><Link href="/blog/blog-details">Mastering With Tips and Tricks with our Expert.</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card style-2 magnetic-item">
                                <div className="blog-card-img-wrap">
                                    <Link href="/blog/blog-details" className="card-img">
                                        <img src="assets/img/home1/blog-img2.jpg" alt="" />
                                    </Link>
                                    <div className="tag">
                                        <a href="blog-grid">Social Media</a>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="blog-meta">
                                        <ul className="category">
                                            <li><Link href="/blog">3 June, 2024</Link></li>
                                        </ul>
                                        <div className="blog-comment">
                                            <span>Comment (15)</span>
                                        </div>
                                    </div>
                                    <h5><Link href="/blog/blog-details">How to Make Your Brand the Gossip of the Industry.</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card style-2 magnetic-item">
                                <div className="blog-card-img-wrap">
                                    <Link href="/blog/blog-details" className="card-img">
                                        <img src="assets/img/home1/blog-img3.jpg" alt="" />
                                    </Link>
                                    <div className="tag">
                                        <a href="blog-grid">Analytics</a>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="blog-meta">
                                        <ul className="category">
                                            <li><Link href="/blog">2 June, 2024</Link></li>
                                        </ul>
                                        <div className="blog-comment">
                                            <span>Comment (20)</span>
                                        </div>
                                    </div>
                                    <h5><Link href="/blog/blog-details">3 Free SEO Tool That Will Boost Your Website Traffic.</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home2Blog