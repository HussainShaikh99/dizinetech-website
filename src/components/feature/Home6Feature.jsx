"use client";
import React from "react";
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const Home6Feature = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  return (
    <>
     <div className="home6-key-features-section mb-120 scroll-margin" id="scroll-section">
  <div className="container">
    <div className="row justify-content-center mb-60">
      <div className="col-xl-7 col-lg-8 text-animation">
        <div className="section-title five text-center">
          <span className="sub-title">Key Features</span>
          <h2>Discover What Makes Us More Stand Out.</h2>
        </div>
      </div>
    </div>
    <div className="row gy-5">
      <div className="col-xl-7">
        <div className="single-key-feature">
          <div className="key-feature-content">
            <h2>Keyword Research and Analysis</h2>
            <p>Aliquam erat volutpat pelentequ habitant morb tristique senec et netus et malesuada famesac turpis egestas vestibulum annvotet ipsum.</p>
            <a href="#" className="primary-btn3" data-text="Get Started Now">
              <span>Get Started Now</span>
            </a>
          </div>
          <div className="key-feature-img">
            <img src="assets/img/home6/key-feature-img1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-xl-5">
        <div className="single-key-feature two">
          <div className="key-feature-content">
            <h2>Content <br />Optimization</h2>
            <p>Aliquam erat volutpat pelentequ habitant morb tristique senec et netus et malesuada fames ac.</p>
          </div>
          <div className="key-feature-img">
            <img src="assets/img/home6/key-feature-img2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-xl-5">
        <div className="single-key-feature two">
          <div className="key-feature-content">
            <h2>On-Page SEO And Optimization</h2>
          </div>
          <div className="key-feature-img">
            <img src="assets/img/home6/key-feature-img3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-xl-7">
        <div className="single-key-feature">
          <div className="key-feature-content">
            <h2>Backlink Analysis &amp; Management</h2>
            <p>Aliquam erat volutpat pelentequ habitant morb tristique senec et netus etmalesuada famesac turpis egestas vestibulum.</p>
            <ul>
              <li>
                <span>Monthly Growth</span>
                <div className="number">
                  <strong>+</strong>
                  <h2 className="counter">{inView ? <CountUp end={48} duration={2} /> : '0'}</h2>
                  <strong>%</strong>
                </div>
              </li>
              <li>
                <span>Yearly Growth</span>
                <div className="number">
                  <strong>+</strong>
                  <h2 className="counter">{inView ? <CountUp end={97} duration={2} /> : '0'}</h2>
                  <strong>%</strong>
                </div>
              </li>
            </ul>
          </div>
          <div className="key-feature-img">
            <img src="assets/img/home6/key-feature-img4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Home6Feature