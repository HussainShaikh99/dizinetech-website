"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import Link from 'next/link'

const Home2About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    useEffect(() => {
        const circularProgress = document.querySelectorAll(".circular-progress");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const progressObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progressValue = progressBar.querySelector(".percentage");
                    let startValue = 0,
                        endValue = Number(progressBar.getAttribute("data-percentage")),
                        speed = 40,
                        progressColor = progressBar.getAttribute("data-progress-color");

                    const progress = setInterval(() => {
                        startValue++;
                        progressValue.textContent = `${startValue}%`;
                        progressValue.style.color = `${progressColor}`;

                        progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6}deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
                        if (startValue === endValue) {
                            clearInterval(progress);
                        }
                    }, speed);

                    observer.unobserve(progressBar);
                }
            });
        }, observerOptions);

        circularProgress.forEach(progressBar => {
            progressObserver.observe(progressBar);
        });

        return () => {
            progressObserver.disconnect();
        };
    }, []);

    return (
        <>
            <div className="home2-about-section mb-120" ref={ref}>
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="about-content-wrap">
                                <div className="section-title two text-animation">
                                    <span className="sub-title">
                                        <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 0H6L2.5 3.5L6 7H3.5L0 3.5L3.5 0Z" />
                                        </svg>
                                        what we received
                                        <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 7L0 7L3.5 3.5L6.11959e-07 -5.24537e-07L2.5 -3.0598e-07L6 3.5L2.5 7Z" />
                                        </svg>
                                    </span>
                                    <h2>Our Achievement</h2>
                                    <p>Sed nisl eros, condimentum nec risus sit amet, finibus conguese.Fusen fringillaes porttitor velit go this week and more about.</p>
                                </div>
                                <div className="counter-area">
                                    <div className="row gy-sm-5 g-4">
                                        <div className="col-sm-6">
                                            <div className="single-counter">
                                                <div className="number">
                                                    <h2 className="counter">{inView ? <CountUp end={2.8} duration={2} decimals={1} /> : '0'}</h2>
                                                    <strong>k</strong>
                                                </div>
                                                <span>Project Complete</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-counter">
                                                <div className="number">
                                                    <h2 className="counter">{inView ? <CountUp end={3.8} decimals={1} duration={2} /> : '0'}</h2>
                                                    <strong>k</strong>
                                                </div>
                                                <span>Target Audience</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-counter">
                                                <div className="number">
                                                    <h2 className="counter"><span>{inView ? <CountUp end={200} duration={2} /> : '0'}</span></h2>
                                                    <strong>+</strong>
                                                </div>
                                                <span>Responsible Member</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-counter">
                                                <div className="number">
                                                    <h2 className="counter">{inView ? <CountUp end={300} duration={2} /> : '0'}</h2>
                                                </div>
                                                <span>Industry Benchmarks</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/about" className="view-btn">
                                    <span>View More About Us</span>
                                    <i className="bi bi-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="assets/img/home2/home2-about-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="progress-area">
                        <div className="progress-wrap" id="progress-section">
                            <div className="circular-progress" data-percentage={90} data-progress-color="#FF8B4A" data-bg-color="black">
                                <div className="inner-circle" />
                                <span className="percentage">0%</span>
                                <svg width={16} height={20} viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3175 6.43271L9.06764 0.18281C8.82389 -0.0609365 8.42765 -0.0609365 8.1839 0.18281L1.934 6.43271C1.754 6.61271 1.70025 6.8802 1.79775 7.11395C1.894 7.3477 2.12274 7.5002 2.37524 7.5002H5.50019V12.1626C5.50019 13.6076 5.0627 15.0013 4.23646 16.1938C3.41147 17.3838 2.26024 18.2813 0.905263 18.79C0.768322 18.8415 0.653776 18.9393 0.581593 19.0666C0.50941 19.1938 0.484169 19.3423 0.510269 19.4863C0.536281 19.6304 0.61212 19.7608 0.724533 19.8547C0.836946 19.9486 0.978784 20.0001 1.12526 20H4.6752C8.97264 20 11.7501 16.7326 11.7501 11.6751V7.5002H14.875C15.1275 7.5002 15.3563 7.3477 15.4525 7.11395C15.5488 6.8802 15.495 6.61271 15.3175 6.43271Z" />
                                </svg>
                            </div>
                        </div>
                        <p>Average Increase In Sales For Our Clients.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home2About