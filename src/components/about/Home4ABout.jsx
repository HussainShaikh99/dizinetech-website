"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
const Home4ABout = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="home4-about-section mb-120">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-lg-6">
                            <div className="about-video-area">
                                <a style={{ cursor: "pointer" }} onClick={() => setOpen(true)} className="video-player magnetic-item" data-cursor="Watch <br> Reel">
                                    <img src="assets/img/home4/home4-about-video-img.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-wrap text-animation">
                                <div className="section-title">
                                    <h2>The Secret Weapon foren <span>Business Success</span> Choose The Best.</h2>
                                </div>
                                <p>We understand your needs and deliver digital marketing through unique selling proposition. Our team of experts is passionate about helping you SEO company. Choose us and experience the difference! Looking for something different?  We challenge the status quo with innovative solutions and a [company culture adjective] approach.  Let us show you how we can help you achieve desired outcome in a way you won't expect.</p>
                                <ul>
                                    <li><strong>Create engaging content:</strong> Eye-catching visual, informative caption, &amp; interactive elements can all help you capture attention and stop the scroll.</li>
                                    <li><strong>Plan and schedule posts:</strong> Schedule your content advance to ensure  consistent presence and maintain a steady flow of communication.</li>
                                </ul>
                                <Link href="/about" className="view-btn two">
                                    <span>Explore Us To More</span>
                                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            <React.Fragment>
                <ModalVideo
                    channel="youtube"
                    onClick={() => setOpen(true)}
                    isOpen={isOpen}
                    animationSpeed="350"
                    videoId="r4KpWiK08vM"
                    ratio="16:9"
                    onClose={() => setOpen(false)}
                />
            </React.Fragment>
            </div>
        </>
    )
}

export default Home4ABout