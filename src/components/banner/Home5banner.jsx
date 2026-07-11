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
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="banner-content">
                                <h1>Pushing the <span>boundaries of</span> marketing.</h1>
                                <p>Sed nisl eros, condimentum nec risus sit amet, finibus congue sem. Fusce fringilla est libero, sed tempus urna feugiat eu. Curabitur eu feugiat ligula. Suspendisse nectoraba porttitor velit go this week for work.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center">
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
                        </div>
                    </div>
                </div>
                <div className="single-countdown">
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
                </div>
            </div>

        </>
    )
}

export default Home5banner