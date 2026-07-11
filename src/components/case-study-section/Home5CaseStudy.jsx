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

const Home5CaseStudy = () => {
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
			slidesPerView: 1,
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
    <>
     <div className="home5-case-study-section mb-120">
  <div className="container">
    <div className="row g-4 align-items-lg-end mb-70">
      <div className="col-xl-6 col-lg-7">
        <div className="section-title four text-animation">
          <span className="sub-title">Case Studies</span>
          <h2>A Look Inside Our <span>Digital Marketing</span> Strategy.</h2>
        </div>
      </div>
      <div className="col-xl-6 col-lg-5 d-flex justify-content-lg-end">
        <Link href="/case-study-details" className="view-btn four">
          <span>View All Case</span>
          <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
          </svg>
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Swiper {...settings} className="swiper home5-case-study-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="case-study-card2">
                <div className="case-img">
                  <img src="assets/img/home5/case-img1.jpg" alt="" /> 
                </div>
                <div className="case-content">
                  <span>Driving Growth</span>
                  <h4><Link href="/case-study-details">Navig Growth rate  Startup Agency Success.</Link></h4>
                  <p>We understand you need &amp; deliver digital sociad marketing through unique selling onse tabledoni proposition Our team expert.</p>
                  <Link href="/case-study-details" className="view-btn four">
                    <span>Case Details</span>
                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="case-study-card2">
                <div className="case-img">
                  <img src="assets/img/home5/case-img2.jpg" alt="" /> 
                </div>
                <div className="case-content">
                  <span>Social Media</span>
                  <h4><Link href="/case-study-details">The Power of Digital Talked Marketing Agency.</Link></h4>
                  <p>We understand you need &amp; deliver digital sociad marketing through unique selling onse tabledoni proposition Our team expert.</p>
                  <Link href="/case-study-details" className="view-btn four">
                    <span>Case Details</span>
                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="case-study-card2">
                <div className="case-img">
                  <img src="assets/img/home5/case-img3.jpg" alt="" /> 
                </div>
                <div className="case-content">
                  <span>Advertising Achieve</span>
                  <h4><Link href="/case-study-details">How We’re Helped another Achieve marketing.</Link></h4>
                  <p>We understand you need &amp; deliver digital sociad marketing through unique selling onse tabledoni proposition Our team expert.</p>
                  <Link href="/case-study-details" className="view-btn four">
                    <span>Case Details</span>
                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="case-study-card2">
                <div className="case-img">
                  <img src="assets/img/home5/case-img4.jpg" alt="" /> 
                </div>
                <div className="case-content">
                  <span>Driving Growth</span>
                  <h4><Link href="/case-study-details">Maximizing RO with Target Email Marketing.</Link></h4>
                  <p>We understand you need &amp; deliver digital sociad marketing through unique selling onse tabledoni proposition Our team expert.</p>
                  <Link href="/case-study-details" className="view-btn four">
                    <span>Case Details</span>
                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="case-study-card2">
                <div className="case-img">
                  <img src="assets/img/home5/case-img5.jpg" alt="" /> 
                </div>
                <div className="case-content">
                  <span>Advertising Achieve</span>
                  <h4><Link href="/case-study-details">Revamping Brand Identity A Comprehensive.</Link></h4>
                  <p>We understand you need &amp; deliver digital sociad marketing through unique selling onse tabledoni proposition Our team expert.</p>
                  <Link href="/case-study-details" className="view-btn four">
                    <span>Case Details</span>
                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="case-study-card2">
                <div className="case-img">
                  <img src="assets/img/home5/case-img6.jpg" alt="" /> 
                </div>
                <div className="case-content">
                  <span>Social Media</span>
                  <h4><Link href="/case-study-details">Conquering New Markets International Expand.</Link></h4>
                  <p>We understand you need &amp; deliver digital sociad marketing through unique selling onse tabledoni proposition Our team expert.</p>
                  <Link href="/case-study-details" className="view-btn four">
                    <span>Case Details</span>
                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z" />
                    </svg>
                  </Link>
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

export default Home5CaseStudy