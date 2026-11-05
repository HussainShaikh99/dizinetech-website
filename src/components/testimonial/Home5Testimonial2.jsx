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

const Home5Testimonial2 = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".testimonial-slider-next",
        prevEl: ".testimonial-slider-prev",
      },
    };
  }, []);
  return (
    <>
      <div className="home5-testimonial-section mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-content">
                <div className="section-title four text-animation">
                  <span className="sub-title">Client Testimonial</span>
                  <h2>
                    Trusted by Businesses<span> That Expect Results.</span>
                  </h2>
                </div>
                <svg
                  width={6}
                  height={83}
                  viewBox="0 0 6 83"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM2.5 3V83H3.5V3H2.5Z" />
                </svg>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-slider-area">
                <Swiper
                  {...settings}
                  className="swiper home5-testimonial-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="testimonial-card-content">
                          <div className="author-and-logo-area">
                            <div className="author-area">
                              <h4>Al Aman</h4>
                              <span>Business Head At Jamaan Contracting</span>
                            </div>
                           
                          </div>
                          <p>
                            “Working with Dizinetech was a great experience.
                            They understood our requirements, brought our ideas
                            to life, and delivered a professional website that
                            truly represents our business. The entire process
                            was smooth and well-managed.”
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="testimonial-card-content">
                          <div className="author-and-logo-area">
                            <div className="author-area">
                              <h4>Sumit Chauhan</h4>
                              <span>Director At Glutape</span>
                            </div>
                            
                          </div>
                          <p>
                            “We were looking for more than just website traffic. We wanted visibility that could generate real business enquiries. Dizinetech understood our goals and helped improve our Google rankings and organic lead generation.”
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="testimonial-card-content">
                          <div className="author-and-logo-area">
                            <div className="author-area">
                              <h4>Aadit Lamba</h4>
                              <span>Owner At Pramara</span>
                            </div>
                            
                          </div>
                          <p>
                            “Working with Dizinetech was a great experience. They understood our requirements and created a website that showcases our products and work beautifully. Even after the launch, their team has been helpful and supportive whenever we needed them.”
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="testimonial-card-content">
                          <div className="author-and-logo-area">
                            <div className="author-area">
                              <h4>Jumaan Sami</h4>
                              <span>Founder At Moaadi</span>
                            </div>
                            
                          </div>
                          <p>
                            “The team at Dizinetech understood what we wanted to build and did a great job bringing MOAADI to life. The platform is smooth, easy to use, and includes all the features we needed. We're really happy with the outcome.”
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card3">
                        <div className="testimonial-card-content">
                          <div className="author-and-logo-area">
                            <div className="author-area">
                              <h4>Aadit Lamba</h4>
                              <span>Owner and Business Head At Zyftt</span>
                            </div>
                            
                          </div>
                          <p>
                            “Dizinetech did a great job understanding our requirements and turning our idea into a working e-commerce platform. The product customization feature is exactly what we needed. Overall, a smooth experience working with the team.”
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                  </div>
                </Swiper>
                <div className="slider-btn-grp">
                  <div className="slider-btn testimonial-slider-prev">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.54022 8.33623C4.06809 8.33623 6.37199 10.6692 6.37199 13.2333L6.37199 14.2842L8.44571 14.2842L8.44571 13.2333C8.44571 11.3691 7.63904 9.6204 6.37303 8.33623L14.501 8.33623L14.501 6.23448L6.37303 6.23448C7.63904 4.95031 8.44571 3.20165 8.44571 1.3374L8.44571 0.286522L6.37199 0.286523L6.37199 1.3374C6.37199 3.90048 4.06809 6.23448 1.54022 6.23448L0.503357 6.23448L0.503357 8.33623L1.54022 8.33623Z"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn testimonial-slider-next">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4629 6.23411C10.9346 6.23411 8.63034 3.90077 8.63034 1.33621V0.285156L6.55627 0.285156V1.33621C6.55627 3.20077 7.36309 4.94972 8.62931 6.23411L0.5 6.23411L0.5 8.33621H8.62931C7.36309 9.62059 6.55627 11.3695 6.55627 13.2341V14.2852H8.63034V13.2341C8.63034 10.6706 10.9346 8.33621 13.4629 8.33621H14.5V6.23411H13.4629Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5Testimonial2;
