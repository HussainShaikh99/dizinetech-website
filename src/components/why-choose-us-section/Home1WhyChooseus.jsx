"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
const Home1WhyChooseus = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="home1-why-choose-section mb-120">
      <div className="container">
        <div className="row align-items-xl-center g-lg-4 gy-5">
          <div className="col-lg-6">
            <div className="video-area magnetic-item">
              <img src="assets/img/home1/home1-why-choose-video-img.jpg" alt="" />
              <a style={{ cursor: "pointer" }} onClick={() => setOpen(true)} className="video-icon video-player">
                <svg width={28} height={32} viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.0355 18.0484L3.73206 31.2157C3.37662 31.4881 2.93233 31.5789 2.48804 31.5789C2.04375 31.5789 1.59945 31.4881 1.24402 31.2157C0.444294 30.7617 0 29.8536 0 28.9455V2.61077C0 1.70267 0.444294 0.794582 1.24402 0.340535C2.04375 -0.113512 3.02119 -0.113512 3.82092 0.340535L26.1244 13.5079C26.9241 13.9619 27.3684 14.87 27.3684 15.7781C27.3684 16.6862 26.8353 17.5943 26.0355 18.0484Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-content">
              <div className="section-title text-animation">
                <span className="sub-title">Why Choose Us</span>
                <h2>Discover the <span>Benefits of Partner</span> Expert Team.</h2>
                <p>We understand your needs and deliver digital marketing through unique selling oneto proposition. Our team of expert is passionate about helping you Social med company.  expect that for your social marketing of all media.</p>
              </div>
              <div className="feature-list text-animation">
                <h6>Nexaq Platform <span>Feature:</span></h6>
                <ul>
                  <li><strong>Create engaging content:</strong> Eye-catching visual, informative caption, &amp; interactive elements can all help you capture attention and stop the scroll.</li>
                  <li><strong>Plan and schedule posts:</strong> Schedule your content advance to ensure  consistent presence and maintain a steady flow of communication.</li>
                  <li><strong>Curate valuable content:</strong> Share relevant content for industry leader influencers to establish credibility and provide a well-rounded perspective.</li>
                </ul>
                <Link href="/why-choose-us" className="primary-btn2" data-text="More About Us">
                  <span>More About Us</span>
                </Link>
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
    </div>
  )
}

export default Home1WhyChooseus