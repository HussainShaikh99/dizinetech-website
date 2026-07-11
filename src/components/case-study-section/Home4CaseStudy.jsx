"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home4CaseStudy = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            // autoplay: {
            // 	delay: 2500, // Autoplay duration in milliseconds
            // 	disableOnInteraction: false,
            // },
            navigation: {
                nextEl: ".portfolio-slider-next",
                prevEl: ".portfolio-slider-prev",
            },

            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        };
    }, []);
    return (
        <>
            <div className="home4-case-study-section mb-120">
                <div className="container">
                    <div className="row align-items-lg-end g-4 mb-70">
                        <div className="col-lg-7">
                            <div className="section-title three text-animation">
                                <h2>From Challenge to Success <span>Marketing Consulting.</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-lg-end">
                            <div className="slider-btn-grp two">
                                <div className="slider-btn portfolio-slider-prev">
                                    <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.54022 8.33623C4.06809 8.33623 6.37199 10.6692 6.37199 13.2333L6.37199 14.2842L8.44571 14.2842L8.44571 13.2333C8.44571 11.3691 7.63904 9.6204 6.37303 8.33623L14.501 8.33623L14.501 6.23448L6.37303 6.23448C7.63904 4.95031 8.44571 3.20165 8.44571 1.3374L8.44571 0.286522L6.37199 0.286523L6.37199 1.3374C6.37199 3.90048 4.06809 6.23448 1.54022 6.23448L0.503357 6.23448L0.503357 8.33623L1.54022 8.33623Z" />
                                    </svg>
                                </div>
                                <div className="slider-btn portfolio-slider-next">
                                    <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4629 6.23411C10.9346 6.23411 8.63034 3.90077 8.63034 1.33621V0.285156L6.55627 0.285156V1.33621C6.55627 3.20077 7.36309 4.94972 8.62931 6.23411L0.5 6.23411L0.5 8.33621H8.62931C7.36309 9.62059 6.55627 11.3695 6.55627 13.2341V14.2852H8.63034V13.2341C8.63034 10.6706 10.9346 8.33621 13.4629 8.33621H14.5V6.23411H13.4629Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="case-study-slider-area mb-60">
                        <div className="row">
                            <div className="col-lg-12">
                                <Swiper {...settings} className="swiper home4-portfolio-slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="case-study-card3">
                                                <div className="case-study-content">
                                                    <span>Driving Growth</span>
                                                    <h5><Link href="/case-study-details">Navigai Growth Startup Agency Success.</Link></h5>
                                                    <p>We understand you need &amp; deliver digital marketing through unique selling onsetab proposition Our team expert.</p>
                                                    <Link href="/case-study-details" className="view-btn two">
                                                        <span>Learn more</span>
                                                        <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Link href="/case-study-details" className="case-study-img">
                                                    <img src="assets/img/home4/portfolio-img1.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="case-study-card3">
                                                <div className="case-study-content">
                                                    <span>Marketing Consulting</span>
                                                    <h5><Link href="/case-study-details">From Local to Glo DEF How Our Strategies.</Link></h5>
                                                    <p>We understand you need &amp; deliver digital marketing through unique selling onsetab proposition Our team expert.</p>
                                                    <Link href="/case-study-details" className="view-btn two">
                                                        <span>Learn more</span>
                                                        <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Link href="/case-study-details" className="case-study-img">
                                                    <img src="assets/img/home4/portfolio-img2.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="case-study-card3">
                                                <div className="case-study-content">
                                                    <span>Marketing Insights</span>
                                                    <h5><Link href="/case-study-details">Boosts Online Presence Comprehensive.</Link></h5>
                                                    <p>We understand you need &amp; deliver digital marketing through unique selling onsetab proposition Our team expert.</p>
                                                    <Link href="/case-study-details" className="view-btn two">
                                                        <span>Learn more</span>
                                                        <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Link href="/case-study-details" className="case-study-img">
                                                    <img src="assets/img/home4/portfolio-img3.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="case-study-card3">
                                                <div className="case-study-content">
                                                    <span>Startup Company</span>
                                                    <h5><Link href="/case-study-details">Unlocking New Markets Strategic Marketing.</Link></h5>
                                                    <p>We understand you need &amp; deliver digital marketing through unique selling onsetab proposition Our team expert.</p>
                                                    <Link href="/case-study-details" className="view-btn two">
                                                        <span>Learn more</span>
                                                        <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Link href="/case-study-details" className="case-study-img">
                                                    <img src="assets/img/home4/portfolio-img4.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="case-study-card3">
                                                <div className="case-study-content">
                                                    <span>Social Media</span>
                                                    <h5><Link href="/case-study-details">How One Local Was Changed by Our PPC.</Link></h5>
                                                    <p>We understand you need &amp; deliver digital marketing through unique selling onsetab proposition Our team expert.</p>
                                                    <Link href="/case-study-details" className="view-btn two">
                                                        <span>Learn more</span>
                                                        <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Link href="/case-study-details" className="case-study-img">
                                                    <img src="assets/img/home4/portfolio-img5.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="case-study-card3">
                                                <div className="case-study-content">
                                                    <span>Advertising Achieve</span>
                                                    <h5><Link href="/case-study-details">How We’re Helped To Achieve Marketing.</Link></h5>
                                                    <p>We understand you need &amp; deliver digital marketing through unique selling onsetab proposition Our team expert.</p>
                                                    <Link href="/case-study-details" className="view-btn two">
                                                        <span>Learn more</span>
                                                        <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Link href="/case-study-details" className="case-study-img">
                                                    <img src="assets/img/home4/portfolio-img6.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="case-study-card3">
                                                <div className="case-study-content">
                                                    <span>Driving Growth</span>
                                                    <h5><Link href="/case-study-details">Redesigning The A Whole Brand Identity.</Link></h5>
                                                    <p>We understand you need &amp; deliver digital marketing through unique selling onsetab proposition Our team expert.</p>
                                                    <Link href="/case-study-details" className="view-btn two">
                                                        <span>Learn more</span>
                                                        <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Link href="/case-study-details" className="case-study-img">
                                                    <img src="assets/img/home4/portfolio-img7.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="bottom-btn">
                                <Link href="/case-study" className="view-btn three">
                                    <span>View All Case</span>
                                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home4CaseStudy