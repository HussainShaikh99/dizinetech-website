"use client"
import React from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const Home5banner = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })
    return (
        <>
            <div className="home5-banner-section" ref={ref}>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-10">
                            <div className="banner-content">
                                <h1>One Partner for <br></br><span class="heading-color">Websites, SEO & AI Solutions.</span></h1>
                                <p>We help businesses establish a powerful digital presence through high-performance websites, strategic SEO, and innovative AI solutions that drive growth, improve efficiency, and deliver measurable results.</p>
                                <div className="btn-area banner-btn d-flex">
                            <a href="https://wa.me/918591754209" target="_blank" className="primary-btn" data-text="Let's Talk"><span>Let's Talk</span></a>
                            <a href="/portfolio" className="primary-btn banner-btn-2 home-banner-btn2" data-text="Explore Portfolio"><span>Explore Portfolio</span></a>
                        </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-12 d-flex justify-content-center">
                            <div className="banner-img">
                                <img src="assets/img/home5/home5-banner-map.png" alt="" />
                                <ul className="tag">
                                    <li>Social Media</li>
                                    <li className="style-2">Search Engine</li>
                                    <li className="style-2">Paid Search</li>
                                    <li>SEO Analysis</li>
                                    <li className="style-3">SEO Analysis</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="single-countdown">
                    <div className="countdown-area">
                        <div className="number">
                            <h3 className="counter">{inView ? <CountUp end={40} duration={2} /> : '0'}</h3>
                            <span>%</span>
                        </div>
                        <p>Average increase in sales for our clients.</p>
                    </div>
                    <div className="countdown-bottom" />
                </div>
                <div className="single-countdown two">
                    <div className="countdown-area">
                        <div className="number">
                            <h3 className="counter">{inView ? <CountUp end={50} duration={2} /> : '0'}</h3>
                            <span>%</span>
                        </div>
                        <p>Google And Facebook Certified Team.</p>
                    </div>
                    <div className="countdown-bottom" />
                </div> */}
            </div>

        </>
    )
}

export default Home5banner