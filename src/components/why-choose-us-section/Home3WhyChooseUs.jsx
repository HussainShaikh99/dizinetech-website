"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
const Home3WhyChooseUs = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="home3-why-choose-section pt-120 mb-120">
                <div className="container">
                    <div className="row g-4 align-items-xxl-center">
                        <div className="col-lg-6">
                            <a style={{ cursor: "pointer" }} onClick={() => setOpen(true)} className="why-choose-img video-player magnetic-item" data-cursor="Watch <br> Reel">
                                <img src="assets/img/home3/home3-why-choose-img.png" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose-content">
                                <div className="section-title text-animation">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2>Grow Your Brand With Our Social Media A-Team.</h2>
                                    <p>We understand your needs and deliver digital marketing through unique selling oneto proposition. Our team of expert is passionate about helping you Social med company. Choose us and experience the difference! Looking for something different? approach.  expect that for your social marketing of all media.</p>
                                </div>
                                <div className="feature-list text-animation">
                                    <h6>Nexaq Platform <span>Feature:</span></h6>
                                    <ul>
                                        <li><strong>Create engaging content:</strong> Eye-catching visual, informative caption, &amp; interactive elements can all help you capture attention and stop the scroll.</li>
                                        <li><strong>Plan and schedule posts:</strong> Schedule your content advance to ensure  consistent presence and maintain a steady flow of communication.</li>
                                        <li><strong>Curate valuable content:</strong> Share relevant content for industry leader influencers to establish credibility and provide a well-rounded perspective.</li>
                                    </ul>
                                    <Link href="/services" className="primary-btn2" data-text="More About Us">
                                        <span>More About Us</span>
                                    </Link>
                                </div>
                            </div>
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
        </>
    )
}

export default Home3WhyChooseUs