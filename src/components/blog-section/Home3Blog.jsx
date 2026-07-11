import Link from 'next/link'
import React from 'react'

const Home3Blog = () => {
    return (
        <>
            <div className="home3-blog-section mb-120">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-lg-6">
                            <div className="section-title text-animation">
                                <span className="sub-title">Blog &amp; Article</span>
                                <h2>Latest Article You Read</h2>
                                <p>Sed nisl eros, condimentum nec risus sit amet, finibus conguese.Fusen fringilla estlibi nectoraba porttitor velit go this week and more about.</p>
                                <Link href="/blog" className="primary-btn2" data-text="View All Article">
                                    <span>View All Article</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row gy-lg-5 g-4">
                                <div className="col-lg-12 col-md-6">
                                    <div className="blog-card style-3 magnetic-item">
                                        <div className="blog-card-img-wrap">
                                            <Link href="/blog/blog-details" className="card-img">
                                                <img src="assets/img/home3/blog-img1.jpg" alt="" />
                                            </Link>
                                            <Link href="/blog" className="date">
                                                03 Apr,<br /> 2024
                                            </Link>
                                        </div>
                                        <div className="card-content">
                                            <div className="blog-meta">
                                                <ul className="category">
                                                    <li><Link href="/blog">Development</Link></li>
                                                </ul>
                                                <div className="blog-comment">
                                                    <span>Comment (12)</span>
                                                </div>
                                            </div>
                                            <h5><Link href="/blog/blog-details">Mastering with tips &amp; trick with our expert unique team member.</Link></h5>
                                            <Link href="/blog/blog-details" className="view-btn two">
                                                <span>View All Article</span>
                                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="blog-card style-3 magnetic-item">
                                        <div className="blog-card-img-wrap">
                                            <Link href="/blog/blog-details" className="card-img">
                                                <img src="assets/img/home3/blog-img2.jpg" alt="" />
                                            </Link>
                                            <Link href="/blog" className="date">
                                                05 Apr,<br /> 2024
                                            </Link>
                                        </div>
                                        <div className="card-content">
                                            <div className="blog-meta">
                                                <ul className="category">
                                                    <li><Link href="/blog">Cyber Security</Link></li>
                                                </ul>
                                                <div className="blog-comment">
                                                    <span>Comment (15)</span>
                                                </div>
                                            </div>
                                            <h5><Link href="/blog/blog-details">Developing a social media strategy aligns with your overall marketing.</Link></h5>
                                            <Link href="/blog/blog-details" className="view-btn two">
                                                <span>View All Article</span>
                                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="blog-card style-3 magnetic-item">
                                        <div className="blog-card-img-wrap">
                                            <Link href="/blog/blog-details" className="card-img">
                                                <img src="assets/img/home3/blog-img3.jpg" alt="" />
                                            </Link>
                                            <Link href="/blog" className="date">
                                                09 Apr,<br /> 2024
                                            </Link>
                                        </div>
                                        <div className="card-content">
                                            <div className="blog-meta">
                                                <ul className="category">
                                                    <li><Link href="/blog">Consulting</Link></li>
                                                </ul>
                                                <div className="blog-comment">
                                                    <span>Comment (18)</span>
                                                </div>
                                            </div>
                                            <h5><Link href="/blog/blog-details">Creating engaging social media content, such as posts, images.</Link></h5>
                                            <Link href="/blog/blog-details" className="view-btn two">
                                                <span>View All Article</span>
                                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home3Blog