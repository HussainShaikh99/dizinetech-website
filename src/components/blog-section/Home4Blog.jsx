import Link from 'next/link'
import React from 'react'

const Home4Blog = () => {
    return (
        <>
            <div className="home4-blog-section mb-120">
                <div className="container">
                    <div className="row justify-content-center mb-70">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title three text-center text-animation">
                                <h2>Marketing Alchemy <span>Turning Ideas Into Success.</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-lg-4 gy-5 mb-60">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card2 magnetic-item">
                                <div className="blog-card-img-wrap">
                                    <Link href="/blog/blog-details" className="card-img">
                                        <img src="assets/img/home4/blog-img1.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div className="blog-meta">
                                        <Link href="/blog" className="blog-date">
                                            4 June, 2024
                                        </Link>
                                        <ul className="category">
                                            <li><Link href="/blog">SEO Consultancy</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link href="/blog/blog-details">Mastering With Tips and Tricks With Our Expert.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card2 magnetic-item">
                                <div className="blog-card-img-wrap">
                                    <Link href="/blog/blog-details" className="card-img">
                                        <img src="assets/img/home4/blog-img2.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div className="blog-meta">
                                        <Link href="/blog" className="blog-date">
                                            2 June, 2024
                                        </Link>
                                        <ul className="category">
                                            <li><Link href="/blog">Consulting</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link href="/blog/blog-details">Marketing consult Transformin Ideas Into Customers.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card2 magnetic-item">
                                <div className="blog-card-img-wrap">
                                    <Link href="/blog/blog-details" className="card-img">
                                        <img src="assets/img/home4/blog-img3.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div className="blog-meta">
                                        <Link href="/blog" className="blog-date">
                                            8 June, 2024
                                        </Link>
                                        <ul className="category">
                                            <li><Link href="/blog">Development</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link href="/blog/blog-details">From Lead To Loyalist Building Your Dream Team.</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <Link href="/blog" className="view-btn three">
                                <span>View All Blog</span>
                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home4Blog