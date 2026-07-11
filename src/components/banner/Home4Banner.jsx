"use client"
import React, { useState } from 'react'

const Home4Banner = () => {
  const [isActive, setIsActive] = useState(false);
   // Function to handle the toggle
   const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="home4-banner-section">
        <div className="container-fluid">
          <div className={`video-wrapper ${isActive ? "slide":""}`}>
            <div className="play-icon" >
              <svg className="play" onClick={handleToggle} width={28} height={32} viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.0355 18.0484L3.73206 31.2157C3.37662 31.4881 2.93233 31.5789 2.48804 31.5789C2.04375 31.5789 1.59945 31.4881 1.24402 31.2157C0.444294 30.7617 0 29.8536 0 28.9455V2.61077C0 1.70267 0.444294 0.794582 1.24402 0.340535C2.04375 -0.113512 3.02119 -0.113512 3.82092 0.340535L26.1244 13.5079C26.9241 13.9619 27.3684 14.87 27.3684 15.7781C27.3684 16.6862 26.8353 17.5943 26.0355 18.0484Z" />
              </svg>
              <svg className="close-icon" onClick={handleToggle} width={31} height={31} viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M2.93865 30.8059C2.17865 30.8501 1.43119 30.5975 0.853878 30.1012C-0.284626 28.9559 -0.284626 27.1062 0.853878 25.961L25.7834 1.03136C26.9675 -0.0766837 28.8256 -0.0150882 29.9337 1.16906C30.9356 2.23987 30.9941 3.88574 30.0704 5.02483L4.99403 30.1012C4.42422 30.5903 3.68869 30.8425 2.93865 30.8059Z" />
                  <path d="M27.8391 30.8059C27.0688 30.8026 26.3306 30.4968 25.7836 29.9544L0.854007 5.02467C-0.200758 3.79295 -0.0573568 1.93928 1.17436 0.884422C2.2737 -0.0570143 3.89501 -0.0570143 4.99426 0.884422L30.0706 25.814C31.2545 26.9223 31.3157 28.7806 30.2074 29.9644C30.1633 30.0115 30.1177 30.0571 30.0706 30.1011C29.7668 30.3653 29.412 30.5642 29.0281 30.6854C28.6442 30.8066 28.2395 30.8476 27.8391 30.8059Z" />
                </g>
              </svg>
            </div>
            <div className="video">
              <video src="assets/video/production_.mp4" loop muted autoPlay playsInline />
            </div>
          </div>
          <div className="banner-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <div className="banner-content text-animation">
                  <h1>Marketing <span>Consultancy</span> Agency.</h1>
                  <p>Sed nisl eros, condimentum nec risus sit amet, finibus conguese.Fusen fringilla est libero, sed tempus urna feugiat eu. Curabitur eu feugiat ligu Suspendisse nectoraba porttitor velit go this week and more about.</p>
                  <a href="#" className="primary-btn" data-text="Free Consultation">
                    <span>Free Consultation</span>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 d-flex justify-content-end">
                <div className="banner-img magnetic-item">
                  <img src="assets/img/home4/home4-banner-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home4-scroll-text-area">
        <div className="scroll-text">
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          Welcome to InnovateTech Solutions
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          We thrive on creativity
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          Your satisfaction is our priority
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          Welcome to InnovateTech Solutions
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          We thrive on creativity
        </div>
        <div aria-hidden="true" className="scroll-text">
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          Welcome to InnovateTech Solutions
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          We thrive on creativity
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          Your satisfaction is our priority
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          Welcome to InnovateTech Solutions
          <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 -3.71547e-07L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84723L-3.71547e-07 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5L14.6578 6.84723L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 -3.71547e-07Z" />
          </svg>
          We thrive on creativity
        </div>
      </div>
      <div className="home2-logo-section mb-120">
        <div className="container-fluid">
          <div className="scroll-down-and-logo">
            <div className="logo-wrap order-xl-2 order-1">
              <div className="logo-title">
                <h6>A partner, Not A Vendor:</h6>
              </div>
              <div className="home2-logo-area">
                <ul className="logo-list">
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-01.png" alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-02.png" alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-03.png" alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-04.png" alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-05.png" alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-06.png" alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-07.png" alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/home1/company-logo-08.png" alt="" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scroll-down-btn order-xl-1 order-2" id="scroll-btn">
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
        </div>
      </div>


    </>
  )
}

export default Home4Banner