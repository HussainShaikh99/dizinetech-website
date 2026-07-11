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

const Home3Team = () => {
     const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
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
			slidesPerView: 4,
		  },
		  1400: {
			slidesPerView: 4,
		  },
		},
        };
    }, []);
    return (
        <>
            <div className="home3-team-section mb-120">
                <div className="container">
                    <div className="row align-items-lg-end g-4 mb-60">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-animation">
                                <span className="sub-title">Meet the Team</span>
                                <h2>Our Team of Experts.</h2>
                                <p>Sed nisl eros, condimentum nec risus sit amet, finibus conguese.Fusen fringilla estlibi nectoraba porttitor velit go this week and more about.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 d-flex justify-content-lg-end text-animation">
                            <Link href="/team" className="primary-btn2" data-text="View All Team">
                                <span>View All Team</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home3-team-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="team-card style-3">
                                            <div className="team-img">
                                                <img src="assets/img/home3/home3-team-img1.png" alt="" />
                                                <ul className="social-list">
                                                    <li>
                                                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <span>Founder at, Nexaq</span>
                                                <h5>Cassian Coleson</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card style-3">
                                            <div className="team-img">
                                                <img src="assets/img/home3/home3-team-img2.png" alt="" />
                                                <ul className="social-list">
                                                    <li>
                                                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <span>Web Designer</span>
                                                <h5>Sebastian Jack</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card style-3">
                                            <div className="team-img">
                                                <img src="assets/img/home3/home3-team-img3.png" alt="" />
                                                <ul className="social-list">
                                                    <li>
                                                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <span>Software Developer</span>
                                                <h5>Violet Scarlett</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card style-3">
                                            <div className="team-img">
                                                <img src="assets/img/home3/home3-team-img4.png" alt="" />
                                                <ul className="social-list">
                                                    <li>
                                                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <span>UI/UX Designer</span>
                                                <h5>Mateo Theodo</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card style-3">
                                            <div className="team-img">
                                                <img src="assets/img/home3/home3-team-img5.png" alt="" />
                                                <ul className="social-list">
                                                    <li>
                                                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <span>Graphic Designer</span>
                                                <h5>Owen Samuel</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card style-3">
                                            <div className="team-img">
                                                <img src="assets/img/home3/home3-team-img6.png" alt="" />
                                                <ul className="social-list">
                                                    <li>
                                                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <span>Software Developer</span>
                                                <h5>Amelia Sophia</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card style-3">
                                            <div className="team-img">
                                                <img src="assets/img/home3/home3-team-img7.png" alt="" />
                                                <ul className="social-list">
                                                    <li>
                                                        <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/"><i className="bi bi-twitter-x" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <span>UI/UX Designer</span>
                                                <h5>Dani Alves</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="pagination-area">
                        <div className="swiper-pagination2" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home3Team