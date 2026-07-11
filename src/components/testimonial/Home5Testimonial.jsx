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

const Home5Testimonial = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            effect: 'fade',             // Use the fade effect
            fadeEffect: {
                crossFade: true           // Enable cross-fade transition
            },
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".portfolio-slider-next",
                prevEl: ".portfolio-slider-prev",
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
        };
    }, []);
    return (
        <>
            <div className="home5-founder-section mb-120">
                <Swiper {...settings} className="swiper home5-founder-slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="home5-founder-wrapper" style={{ backgroundImage: 'linear-gradient(88.35deg, rgba(0, 0, 0, 0.55) 36.72%, rgba(102, 102, 102, 0) 60.57%),url(assets/img/home5/home5-testimonial-banner-img1.jpg)' }}>
                                <div className="founder-content-wrap">
                                    <div className="founder-content">
                                        <p>"We're passionate about helping businesses achieve their marketing goals strategi and driven insights."</p>
                                        <div className="founder-name-desig">
                                            <h6>Paisley Genesis,</h6>
                                            <span>Founder at Nexaq</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="home5-founder-wrapper" style={{ backgroundImage: 'linear-gradient(88.35deg, rgba(0, 0, 0, 0.55) 36.72%, rgba(102, 102, 102, 0) 60.57%),url(assets/img/home5/home5-testimonial-banner-img2.jpg)' }}>
                                <div className="founder-content-wrap">
                                    <div className="founder-content">
                                        <p>"Our passion is assisting companies in achieving their marketing objectives through insightful analysis."</p>
                                        <div className="founder-name-desig">
                                            <h6>Nicholas Jace,</h6>
                                            <span>Founder at Nexaq</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
                <div className="swiper-pagination1" />
            </div>

        </>
    )
}

export default Home5Testimonial