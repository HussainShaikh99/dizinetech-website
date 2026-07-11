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

const Home2Team = () => {
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
                slidesPerView: 5,
              },
            },
        };
    }, []);
    return (
        <>
            <div className="home2-team-section mb-120">
                <div className="container">
                    <div className="row g-4 align-items-lg-end mb-60">
                        <div className="col-lg-6">
                            <div className="section-title two text-animation">
                                <span className="sub-title">
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 0H6L2.5 3.5L6 7H3.5L0 3.5L3.5 0Z" />
                                    </svg>
                                    our team
                                    <svg width={6} height={7} viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 7L0 7L3.5 3.5L6.11959e-07 -5.24537e-07L2.5 -3.0598e-07L6 3.5L2.5 7Z" />
                                    </svg>
                                </span>
                                <h2>The masterminds of our <span>Nexaq</span> family.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end">
                            <Link href="/team" className="view-btn">
                                <span>View All Team</span>
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="team-slider-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <Swiper {...settings} className="swiper home2-team-slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img1.png" alt="" />
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
                                                    <h5>Amelia Sophia</h5>
                                                    <span>Founder at, Nexaq</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img2.png" alt="" />
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
                                                    <h5>Sebastian Jack</h5>
                                                    <span>Web Designer</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img3.png" alt="" />
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
                                                    <h5>Michael Daniel</h5>
                                                    <span>Software Developer</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img4.png" alt="" />
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
                                                    <h5>Violet Scarlett</h5>
                                                    <span>UI/UX Designer</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img5.png" alt="" />
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
                                                    <h5>Owen Samuel</h5>
                                                    <span>Graphic Designer</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img6.png" alt="" />
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
                                                    <h5>Cassian Coleson</h5>
                                                    <span>Software Developer</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img7.png" alt="" />
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
                                                    <h5>David Jackson</h5>
                                                    <span>UI/UX Designer</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="team-card style-2">
                                                <div className="team-img">
                                                    <img src="assets/img/home2/home2-team-img8.png" alt="" />
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
                                                    <h5>Scarlett Emily</h5>
                                                    <span>Software Developer</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="pagination-area">
                            <svg width={372} height={8} viewBox="0 0 372 8" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M371.354 4.35355C371.549 4.15829 371.549 3.84171 371.354 3.64645L368.172 0.464466C367.976 0.269204 367.66 0.269204 367.464 0.464466C367.269 0.659728 367.269 0.976311 367.464 1.17157L370.293 4L367.464 6.82843C367.269 7.02369 367.269 7.34027 367.464 7.53553C367.66 7.7308 367.976 7.7308 368.172 7.53553L371.354 4.35355ZM0 4.5H371V3.5H0V4.5Z" fill="url(#paint0_linear_347_1397)" />
                                <defs>
                                    <linearGradient id="paint0_linear_347_1397" x1="122.5" y1={4} x2={371} y2="-2.5" gradientUnits="userSpaceOnUse">
                                        <stop stopOpacity={0} offset={0} />
                                        <stop offset={1} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="swiper-pagination2" />
                            <svg width={372} height={8} viewBox="0 0 372 8" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H372V3.5H1V4.5Z" fill="url(#paint0_linear_347_1396)" />
                                <defs>
                                    <linearGradient id="paint0_linear_347_1396" x1={1} y1="4.5" x2="256.5" y2={4} gradientUnits="userSpaceOnUse">
                                        <stop offset={0} />
                                        <stop offset={1} stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home2Team