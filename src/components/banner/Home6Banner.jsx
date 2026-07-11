"use client"
import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
const Home6Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="home6-banner-section mb-120">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline src="assets/video/home6-banner-video.mp4" />
          <div className="video-content-wrap text-animation">
            <div className="title-area">
              <h1>AI-Driven SEO writer for your <span>website.</span><img src="assets/img/home6/home6-banner-title-vector.png" alt="" /></h1>
            </div>
            <div className="content">
              <p>Sed nisl eros, condimentum nec risus sit amet, finibus conguese.Fusen fringilla est libero, sed tempus urna feugiat eu. Curabitur eu feugiat ligu Suspendisse nectoraba porttitor velit go this week and more about.</p>
              <div className="content-bottom-area">
                <a href="#" className="primary-btn3" data-text="Start free trail">
                  <span>Start free trail</span>
                </a>
                <a data-fancybox="video-player" onClick={() => setOpen(true)} className="video-area">
                  <div className="icon">
                    <svg className="video-circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="51px" viewBox="0 0 206 206" style={{ enableBackground: 'new 0 0 206 206' }} xmlSpace="preserve">
                      <circle className="circle" strokeMiterlimit={10} cx={103} cy={103} r={100} />
                      <path className="circle-half top-half" strokeWidth={4} strokeMiterlimit={10} d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6" />
                      <path className="circle-half bottom-half" strokeWidth={4} strokeMiterlimit={10} d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53" />
                    </svg>
                    <i className="bi bi-play" />
                  </div>
                  <h6>Watch a Demo</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-down-btn" id="scroll-btn">
            <a href="#">
              <span>SCROLL <br /> DOWN</span>
              <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.9009 11.1111C6.9009 8.94397 8.9009 6.96887 11.0991 6.96887L12 6.96887L12 5.19109L11.0991 5.19109C9.5009 5.19109 8.0018 5.88265 6.9009 6.96798L6.9009 -2.22889e-07L5.0991 -3.01648e-07L5.0991 6.96798C3.9982 5.88265 2.4991 5.19109 0.9009 5.19109L-2.2691e-07 5.19109L-3.04619e-07 6.96887L0.9009 6.96887C3.0982 6.96887 5.0991 8.94397 5.0991 11.1111L5.0991 12L6.9009 12L6.9009 11.1111Z" />
                </g>
              </svg>
            </a>
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

export default Home6Banner