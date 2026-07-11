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
const Home2Banner = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            // loop: true,
            effect: 'fade',             // Use the fade effect
            fadeEffect: {
                crossFade: true           // Enable cross-fade transition
            },
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
            nextEl: ".banner-slider-next",
            prevEl: ".banner-slider-prev",
            },
        };
    }, []);
    return (
        <>
            <div className="home2-banner-section">
                <div className="container-fluid">
                    <Swiper {...settings} className="swiper home2-banner-slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="home2-banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.5) 100%), url(assets/img/home2/home2-banner-bg.jpg)' }} />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="home2-banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.5) 100%), url(assets/img/home2/home2-banner-bg2.jpg)' }} />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="home2-banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.5) 100%), url(assets/img/home2/home2-banner-bg3.jpg)' }} />
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <div className="banner-content-wrap">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="banner-content">
                                        <h1>Pushing the boundaries of marketing.</h1>
                                        <p>Sed nisl eros, condimentum nec risus sit amet, finibus congue sem. Fusce fringilla est libero, sed tempus urna feugiat eu. Curabitur eu feugiat ligula. Suspendisse nectoraba porttitor velit go this week for work.</p>
                                        <div className="button-grp">
                                            <Link href="/about" className="primary-btn two" data-text="Get Started">
                                                <span>Get Started</span>
                                                <svg width={18} height={10} viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6347 0.501954L15.9023 0.00888778C16.0999 -0.0139744 16.2995 0.00737545 16.4897 0.0717184C16.68 0.136061 16.8572 0.242137 17.0112 0.383884C17.1651 0.525632 17.2929 0.700275 17.3871 0.897837C17.4814 1.0954 17.5402 1.31201 17.5604 1.53529L17.9967 6.35842C18.0196 6.69936 17.9238 7.03694 17.7297 7.29921C17.5356 7.56147 17.2585 7.72767 16.9575 7.76239C16.6565 7.79711 16.3555 7.69759 16.1185 7.48505C15.8815 7.27252 15.7273 6.96377 15.6888 6.62463L15.3349 2.71026L11.8714 3.11022C11.5697 3.13614 11.271 3.02786 11.0389 2.80848C10.8069 2.58909 10.6598 2.27595 10.6291 1.93579C10.5984 1.59564 10.6864 1.25537 10.8745 0.987529C11.0626 0.719685 11.3346 0.545447 11.6347 0.501954Z" />
                                                    <path d="M0.394102 9.57162C0.279607 9.45783 0.186077 9.31966 0.118858 9.165C0.0516384 9.01034 0.0120483 8.84223 0.00234993 8.67026C-0.0073484 8.4983 0.0130353 8.32587 0.062336 8.16281C0.111637 7.99976 0.188888 7.84929 0.289673 7.72L1.96574 5.01287C2.27675 4.61376 2.65802 4.29239 3.08518 4.0693C3.51234 3.84621 3.976 3.72631 4.44649 3.71726H4.50335C5.43276 3.71726 6.32736 4.15394 6.96554 4.91976L8.69441 6.99825C8.89746 7.24216 9.17013 7.37591 9.46485 7.37591H9.47066C9.61656 7.37598 9.76088 7.3416 9.89435 7.27499C10.0278 7.20837 10.1475 7.11099 10.2457 6.98907L15.0773 1.04211L16.7864 2.81636L11.9549 8.76332C11.6401 9.14979 11.2584 9.459 10.8334 9.67173C10.4085 9.88446 9.94935 9.99617 9.48458 9.99992C8.55749 9.9632 7.64432 9.56717 7.00383 8.7961L5.27496 6.71893C5.06726 6.46977 4.81547 6.35175 4.48478 6.34126C4.33731 6.34307 4.19186 6.38025 4.05804 6.45033C3.92422 6.52041 3.8051 6.62179 3.70853 6.74778L2.03247 9.45491C1.93179 9.5843 1.80953 9.69001 1.67268 9.76598C1.53583 9.84195 1.38708 9.88669 1.23493 9.89765C1.08277 9.90861 0.930194 9.88557 0.78592 9.82985C0.641647 9.77414 0.508503 9.68683 0.394102 9.57293V9.57162Z" />
                                                </svg>
                                            </Link>
                                            <Link href="/contact" className="primary-btn transparent two" data-text="Contact Us">
                                                <span>Contact Us</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div className="slider-btn-grp">
                        <div className="slider-btn banner-slider-prev">
                            <svg width={21} height={11} viewBox="0 0 21 11" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.81996 6.12372L6.0042 9.09701L5.14754 10.0146L0.308807 5.49627C1.92172 3.99041 3.53463 2.48376 5.14754 0.977896L6.0042 1.89553L2.81996 4.86883L18.18 4.86883L14.9958 1.89553L15.8525 0.977896L20.6912 5.49627L15.8525 10.0146L14.9958 9.09701L18.18 6.12371L2.81996 6.12372Z" />
                            </svg>
                        </div>
                        <div className="slider-btn banner-slider-next">
                            <svg width={21} height={11} viewBox="0 0 21 11" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.81996 6.12372L6.0042 9.09701L5.14754 10.0146L0.308807 5.49627C1.92172 3.99041 3.53463 2.48376 5.14754 0.977896L6.0042 1.89553L2.81996 4.86883L18.18 4.86883L14.9958 1.89553L15.8525 0.977896L20.6912 5.49627L15.8525 10.0146L14.9958 9.09701L18.18 6.12371L2.81996 6.12372Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home2Banner