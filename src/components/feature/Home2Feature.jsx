"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2Feature = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            // autoplay: {
            // 	delay: 2500, // Autoplay duration in milliseconds
            // 	disableOnInteraction: false,
            // },
            pagination: {
                el: ".swiper-pagination2",
                clickable: true,
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2.7,
                },
                1200: {
                    slidesPerView: 3.7,
                },
                1400: {
                    slidesPerView: 4.7,
                },
            },
        };
    }, []);
    return (
        <>
            <div className="home2-feature-section mb-120">
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                            <div className="section-title two white text-animation">
                                <span className="sub-title">
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 0H6L2.5 3.5L6 7H3.5L0 3.5L3.5 0Z" />
                                    </svg>
                                    nexaq feature
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 7L0 7L3.5 3.5L6.11959e-07 -5.24537e-07L2.5 -3.0598e-07L6 3.5L2.5 7Z" />
                                    </svg>
                                </span>
                                <h2>The Answer SEO Chalke How <span>Can We Help.</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home2-feature-slider-area">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home2-feature-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img1.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Increased Organic</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two primary1">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img2.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Targeted Audience</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img3.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Cost-Effective</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two primary2">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img4.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>AI Solutions</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img5.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Credibility and Trust</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two primary1">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img6.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Competitor Analysis</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img7.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Link Building</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="feature-card two primary2">
                                            <div className="icon">
                                                <img src="assets/img/home2/feature-img8.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>Keyword Research</h5>
                                                <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home2-score-section mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="score-form-area">
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
                                    <h2>Your SEO Score</h2>
                                </div>
                                <form>
                                    <div className="form-inner mb-35">
                                        <label>Your website url *</label>
                                        <input type="text" placeholder="www.example.com" />
                                    </div>
                                    <div className="form-inner">
                                        <label>Your email address *</label>
                                        <input type="email" placeholder="example@gmail.com" />
                                    </div>
                                    <div className="form-inner2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                                            <label className="form-check-label" htmlFor="contactCheck">
                                                I have read &amp; accepted Terms &amp; Conditions.
                                            </label>
                                        </div>
                                    </div>
                                    <button className="primary-btn2 two" data-text="Send now"><span>Send now</span></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex justify-content-lg-end">
                            <div className="score-img d-lg-block d-none">
                                <img src="assets/img/home2/home2-score-section-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home2Feature