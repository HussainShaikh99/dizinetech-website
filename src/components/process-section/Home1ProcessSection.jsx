"use client";
import React, { useMemo } from "react";
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home1ProcessSection = ({sectionGap=""}) => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
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
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
        };
    }, []);
    return (
        <div className={`home1-process-section mb-120 ${sectionGap}`}>
            <div className="container">
                <div className="row align-items-lg-end g-lg-4 gy-5 mb-70">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-animation">
                            <span className="sub-title">Working Process</span>
                            <h2>A Step-By-Step Guide <span>To Our Marketing</span> Approach.</h2>
                            <Link href="/contact" className="primary-btn2" data-text="Contact More Info">
                                <span>Contact More Info</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 d-flex justify-content-lg-end">
                        <div className="pagination-area">
                            <div className="swiper-pagination2" />
                        </div>
                    </div>
                </div>
                <div className="process-slider-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home1-process-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="single-process">
                                            <div className="dot-and-step-no">
                                                <div className="dot">
                                                    <span />
                                                </div>
                                                <div className="step-no">
                                                    <h2>01</h2>
                                                </div>
                                            </div>
                                            <div className="process-content">
                                                <h3>Initial <br /> Consultation</h3>
                                                <p>Conduct thorough market research thoug understand industry trends and customer behavior our project.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <SwiperSlide>
                                        <div className="single-process">
                                            <div className="dot-and-step-no">
                                                <div className="dot">
                                                    <span />
                                                </div>
                                                <div className="step-no">
                                                    <h2>02</h2>
                                                </div>
                                            </div>
                                            <div className="process-content">
                                                <h3>Research and <br /> Analysis</h3>
                                                <p>Conduct thorough market research thoug understand industry trends and customer behavior our project.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-process">
                                            <div className="dot-and-step-no">
                                                <div className="dot">
                                                    <span />
                                                </div>
                                                <div className="step-no">
                                                    <h2>03</h2>
                                                </div>
                                            </div>
                                            <div className="process-content">
                                                <h3>Strategy <br /> Development</h3>
                                                <p>Conduct thorough market research thoug understand industry trends and customer behavior our project.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-process">
                                            <div className="dot-and-step-no">
                                                <div className="dot">
                                                    <span />
                                                </div>
                                                <div className="step-no">
                                                    <h2>04</h2>
                                                </div>
                                            </div>
                                            <div className="process-content">
                                                <h3>Research and <br /> Analysis</h3>
                                                <p>Conduct thorough market research thoug understand industry trends and customer behavior our project.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-process">
                                            <div className="dot-and-step-no">
                                                <div className="dot">
                                                    <span />
                                                </div>
                                                <div className="step-no">
                                                    <h2>05</h2>
                                                </div>
                                            </div>
                                            <div className="process-content">
                                                <h3>Strategy <br /> Development</h3>
                                                <p>Conduct thorough market research thoug understand industry trends and customer behavior our project.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Home1ProcessSection