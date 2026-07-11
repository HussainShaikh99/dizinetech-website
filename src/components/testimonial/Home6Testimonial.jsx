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

const Home6Testimonial = () => {
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
			el: ".swiper-pagination1",
			clickable: true,
		},
		navigation: {
		  nextEl: ".testimonial-slider-next",
		  prevEl: ".testimonial-slider-prev",
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
			slidesPerView: 2,
		  },
		  1200: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  1400: {
			slidesPerView: 2,
		  },
		},
        };
    }, []);
  return (
    <>
     <div className="home6-testimonial-section mb-120">
  <div className="container">
    <div className="row justify-content-center mb-60">
      <div className="col-xl-7 col-lg-8 text-animation">
        <div className="section-title five text-center">
          <span className="sub-title">Client Testimonial</span>
          <h2>Success Stories From Our Creative Clients.</h2>
        </div>
      </div>
    </div>
    <div className="testimonial-slider-wrap">
      <div className="row"> 
        <div className="col-lg-12">
          <Swiper {...settings} className="swiper home6-testimonial-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="author-and-quote-area">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/testimonial-author-img1.png" alt="" />
                      </div>
                      <div className="author-name-and-desig">
                        <h4>Mateo Theodo</h4>
                        <span>CEO At zenfy.com</span>
                      </div>
                    </div>
                    <svg className="quote" width={63} height={57} viewBox="0 0 63 57" xmlns="http://www.w3.org/2000/svg">
                      <path d="M42.1438 56.1732C43.0297 55.9641 47.0287 53.8846 48.7268 52.7525C50.9293 51.2883 52.1721 50.2916 54.0301 48.4336C60.0471 42.4535 62.3235 36.1658 62.8772 24.0088C62.9633 22.2615 63.0002 17.3766 62.9756 12.0117C62.9387 3.60762 62.9264 2.93086 62.7172 2.5248C62.4219 1.94648 61.8436 1.35586 61.2283 1.02363L60.7239 0.75293L50.0803 0.752931C41.3809 0.752932 39.3506 0.789846 38.9569 0.925197C38.3539 1.13438 37.591 1.82344 37.2465 2.46328L36.9758 2.96778L36.9389 13.476C36.902 25.0301 36.8897 24.7717 37.6526 25.6945C37.8494 25.9406 38.3047 26.2852 38.6616 26.4574L39.3014 26.7773L44.3832 26.7773L49.4651 26.7773L49.4651 27.6756C49.4651 29.6443 48.9852 32.4129 48.2961 34.4801C46.7334 39.1559 44.0141 42.109 38.883 44.6807C37.8864 45.1852 36.9143 45.7512 36.6928 45.985C36.1268 46.5633 35.893 47.277 35.9545 48.2121C36.0037 48.9012 36.176 49.3441 37.468 52.0389C38.9815 55.2012 39.2645 55.6318 40.1627 56.001C40.7164 56.2348 41.5778 56.3086 42.1438 56.1732Z" />
                      <path d="M7.13672 55.7795C15.4178 52.1619 21.7301 46.0096 24.5232 38.8359C25.3231 36.7934 26.0367 33.6803 26.4428 30.4688C26.9596 26.4451 27.0088 24.9316 27.0088 13.7344C27.0088 3.41074 26.9965 2.94316 26.775 2.5002C26.4797 1.89727 25.9506 1.36816 25.2984 1.02363L24.7939 0.75293L14.0889 0.752931C3.46992 0.752932 3.38379 0.752932 2.83008 1.01133C2.16563 1.31895 1.67344 1.79883 1.3043 2.47559C1.0459 2.96778 1.0459 2.99239 1.00899 13.476C0.972073 25.0301 0.959768 24.7717 1.72266 25.6945C1.91953 25.9406 2.37481 26.2852 2.73164 26.4574L3.37149 26.7773L8.51485 26.7773C13.5229 26.7773 13.6582 26.7773 13.6582 27.0111C13.6582 27.934 13.3383 30.6533 13.0922 31.8838C12.7107 33.7787 12.3047 34.9969 11.5049 36.6826C9.80684 40.251 7.22286 42.6504 2.83008 44.7668C0.566021 45.8496 0.0738336 46.4279 0.0615295 48.0029C0.0615295 48.852 0.0861382 48.9012 1.47657 51.7928C2.25176 53.3924 3.05157 54.9182 3.24844 55.1643C4.12208 56.2225 5.58633 56.4563 7.13672 55.7795Z" />
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p>“Integer purus odio, placera rhoncus in going tour offe corper necless dolor. and utoffer tha wegon poort himenaeos thao gain again offe all work this project very dificult lacinia.”</p>
                  </div>
                  <div className="logo-and-rating">
                    <div className="logo">
                      <img src="assets/img/home4/icon/testimonial-logo1.svg" alt="" />
                    </div>
                    <ul className="rating">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="author-and-quote-area">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/testimonial-author-img2.png" alt="" />
                      </div>
                      <div className="author-name-and-desig">
                        <h4>Camila Eleano</h4>
                        <span>CEO At triprex.com</span>
                      </div>
                    </div>
                    <svg className="quote" width={63} height={57} viewBox="0 0 63 57" xmlns="http://www.w3.org/2000/svg">
                      <path d="M42.1438 56.1732C43.0297 55.9641 47.0287 53.8846 48.7268 52.7525C50.9293 51.2883 52.1721 50.2916 54.0301 48.4336C60.0471 42.4535 62.3235 36.1658 62.8772 24.0088C62.9633 22.2615 63.0002 17.3766 62.9756 12.0117C62.9387 3.60762 62.9264 2.93086 62.7172 2.5248C62.4219 1.94648 61.8436 1.35586 61.2283 1.02363L60.7239 0.75293L50.0803 0.752931C41.3809 0.752932 39.3506 0.789846 38.9569 0.925197C38.3539 1.13438 37.591 1.82344 37.2465 2.46328L36.9758 2.96778L36.9389 13.476C36.902 25.0301 36.8897 24.7717 37.6526 25.6945C37.8494 25.9406 38.3047 26.2852 38.6616 26.4574L39.3014 26.7773L44.3832 26.7773L49.4651 26.7773L49.4651 27.6756C49.4651 29.6443 48.9852 32.4129 48.2961 34.4801C46.7334 39.1559 44.0141 42.109 38.883 44.6807C37.8864 45.1852 36.9143 45.7512 36.6928 45.985C36.1268 46.5633 35.893 47.277 35.9545 48.2121C36.0037 48.9012 36.176 49.3441 37.468 52.0389C38.9815 55.2012 39.2645 55.6318 40.1627 56.001C40.7164 56.2348 41.5778 56.3086 42.1438 56.1732Z" />
                      <path d="M7.13672 55.7795C15.4178 52.1619 21.7301 46.0096 24.5232 38.8359C25.3231 36.7934 26.0367 33.6803 26.4428 30.4688C26.9596 26.4451 27.0088 24.9316 27.0088 13.7344C27.0088 3.41074 26.9965 2.94316 26.775 2.5002C26.4797 1.89727 25.9506 1.36816 25.2984 1.02363L24.7939 0.75293L14.0889 0.752931C3.46992 0.752932 3.38379 0.752932 2.83008 1.01133C2.16563 1.31895 1.67344 1.79883 1.3043 2.47559C1.0459 2.96778 1.0459 2.99239 1.00899 13.476C0.972073 25.0301 0.959768 24.7717 1.72266 25.6945C1.91953 25.9406 2.37481 26.2852 2.73164 26.4574L3.37149 26.7773L8.51485 26.7773C13.5229 26.7773 13.6582 26.7773 13.6582 27.0111C13.6582 27.934 13.3383 30.6533 13.0922 31.8838C12.7107 33.7787 12.3047 34.9969 11.5049 36.6826C9.80684 40.251 7.22286 42.6504 2.83008 44.7668C0.566021 45.8496 0.0738336 46.4279 0.0615295 48.0029C0.0615295 48.852 0.0861382 48.9012 1.47657 51.7928C2.25176 53.3924 3.05157 54.9182 3.24844 55.1643C4.12208 56.2225 5.58633 56.4563 7.13672 55.7795Z" />
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p>“Integer purus odio, placera rhoncus in going tour offe corper necless dolor. and utoffer tha wegon poort himenaeos thao gain again offe all work this project very dificult lacinia.”</p>
                  </div>
                  <div className="logo-and-rating">
                    <div className="logo">
                      <img src="assets/img/home4/icon/testimonial-logo1.svg" alt="" />
                    </div>
                    <ul className="rating">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="author-and-quote-area">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/testimonial-author-img3.png" alt="" />
                      </div>
                      <div className="author-name-and-desig">
                        <h4>Scarlett Emily</h4>
                        <span>CEO At beautico.com</span>
                      </div>
                    </div>
                    <svg className="quote" width={63} height={57} viewBox="0 0 63 57" xmlns="http://www.w3.org/2000/svg">
                      <path d="M42.1438 56.1732C43.0297 55.9641 47.0287 53.8846 48.7268 52.7525C50.9293 51.2883 52.1721 50.2916 54.0301 48.4336C60.0471 42.4535 62.3235 36.1658 62.8772 24.0088C62.9633 22.2615 63.0002 17.3766 62.9756 12.0117C62.9387 3.60762 62.9264 2.93086 62.7172 2.5248C62.4219 1.94648 61.8436 1.35586 61.2283 1.02363L60.7239 0.75293L50.0803 0.752931C41.3809 0.752932 39.3506 0.789846 38.9569 0.925197C38.3539 1.13438 37.591 1.82344 37.2465 2.46328L36.9758 2.96778L36.9389 13.476C36.902 25.0301 36.8897 24.7717 37.6526 25.6945C37.8494 25.9406 38.3047 26.2852 38.6616 26.4574L39.3014 26.7773L44.3832 26.7773L49.4651 26.7773L49.4651 27.6756C49.4651 29.6443 48.9852 32.4129 48.2961 34.4801C46.7334 39.1559 44.0141 42.109 38.883 44.6807C37.8864 45.1852 36.9143 45.7512 36.6928 45.985C36.1268 46.5633 35.893 47.277 35.9545 48.2121C36.0037 48.9012 36.176 49.3441 37.468 52.0389C38.9815 55.2012 39.2645 55.6318 40.1627 56.001C40.7164 56.2348 41.5778 56.3086 42.1438 56.1732Z" />
                      <path d="M7.13672 55.7795C15.4178 52.1619 21.7301 46.0096 24.5232 38.8359C25.3231 36.7934 26.0367 33.6803 26.4428 30.4688C26.9596 26.4451 27.0088 24.9316 27.0088 13.7344C27.0088 3.41074 26.9965 2.94316 26.775 2.5002C26.4797 1.89727 25.9506 1.36816 25.2984 1.02363L24.7939 0.75293L14.0889 0.752931C3.46992 0.752932 3.38379 0.752932 2.83008 1.01133C2.16563 1.31895 1.67344 1.79883 1.3043 2.47559C1.0459 2.96778 1.0459 2.99239 1.00899 13.476C0.972073 25.0301 0.959768 24.7717 1.72266 25.6945C1.91953 25.9406 2.37481 26.2852 2.73164 26.4574L3.37149 26.7773L8.51485 26.7773C13.5229 26.7773 13.6582 26.7773 13.6582 27.0111C13.6582 27.934 13.3383 30.6533 13.0922 31.8838C12.7107 33.7787 12.3047 34.9969 11.5049 36.6826C9.80684 40.251 7.22286 42.6504 2.83008 44.7668C0.566021 45.8496 0.0738336 46.4279 0.0615295 48.0029C0.0615295 48.852 0.0861382 48.9012 1.47657 51.7928C2.25176 53.3924 3.05157 54.9182 3.24844 55.1643C4.12208 56.2225 5.58633 56.4563 7.13672 55.7795Z" />
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p>“Integer purus odio, placera rhoncus in going tour offe corper necless dolor. and utoffer tha wegon poort himenaeos thao gain again offe all work this project very dificult lacinia.”</p>
                  </div>
                  <div className="logo-and-rating">
                    <div className="logo">
                      <img src="assets/img/home4/icon/testimonial-logo1.svg" alt="" />
                    </div>
                    <ul className="rating">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="author-and-quote-area">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/testimonial-author-img4.png" alt="" />
                      </div>
                      <div className="author-name-and-desig">
                        <h4>David Jackson</h4>
                        <span>CEO At turio.com</span>
                      </div>
                    </div>
                    <svg className="quote" width={63} height={57} viewBox="0 0 63 57" xmlns="http://www.w3.org/2000/svg">
                      <path d="M42.1438 56.1732C43.0297 55.9641 47.0287 53.8846 48.7268 52.7525C50.9293 51.2883 52.1721 50.2916 54.0301 48.4336C60.0471 42.4535 62.3235 36.1658 62.8772 24.0088C62.9633 22.2615 63.0002 17.3766 62.9756 12.0117C62.9387 3.60762 62.9264 2.93086 62.7172 2.5248C62.4219 1.94648 61.8436 1.35586 61.2283 1.02363L60.7239 0.75293L50.0803 0.752931C41.3809 0.752932 39.3506 0.789846 38.9569 0.925197C38.3539 1.13438 37.591 1.82344 37.2465 2.46328L36.9758 2.96778L36.9389 13.476C36.902 25.0301 36.8897 24.7717 37.6526 25.6945C37.8494 25.9406 38.3047 26.2852 38.6616 26.4574L39.3014 26.7773L44.3832 26.7773L49.4651 26.7773L49.4651 27.6756C49.4651 29.6443 48.9852 32.4129 48.2961 34.4801C46.7334 39.1559 44.0141 42.109 38.883 44.6807C37.8864 45.1852 36.9143 45.7512 36.6928 45.985C36.1268 46.5633 35.893 47.277 35.9545 48.2121C36.0037 48.9012 36.176 49.3441 37.468 52.0389C38.9815 55.2012 39.2645 55.6318 40.1627 56.001C40.7164 56.2348 41.5778 56.3086 42.1438 56.1732Z" />
                      <path d="M7.13672 55.7795C15.4178 52.1619 21.7301 46.0096 24.5232 38.8359C25.3231 36.7934 26.0367 33.6803 26.4428 30.4688C26.9596 26.4451 27.0088 24.9316 27.0088 13.7344C27.0088 3.41074 26.9965 2.94316 26.775 2.5002C26.4797 1.89727 25.9506 1.36816 25.2984 1.02363L24.7939 0.75293L14.0889 0.752931C3.46992 0.752932 3.38379 0.752932 2.83008 1.01133C2.16563 1.31895 1.67344 1.79883 1.3043 2.47559C1.0459 2.96778 1.0459 2.99239 1.00899 13.476C0.972073 25.0301 0.959768 24.7717 1.72266 25.6945C1.91953 25.9406 2.37481 26.2852 2.73164 26.4574L3.37149 26.7773L8.51485 26.7773C13.5229 26.7773 13.6582 26.7773 13.6582 27.0111C13.6582 27.934 13.3383 30.6533 13.0922 31.8838C12.7107 33.7787 12.3047 34.9969 11.5049 36.6826C9.80684 40.251 7.22286 42.6504 2.83008 44.7668C0.566021 45.8496 0.0738336 46.4279 0.0615295 48.0029C0.0615295 48.852 0.0861382 48.9012 1.47657 51.7928C2.25176 53.3924 3.05157 54.9182 3.24844 55.1643C4.12208 56.2225 5.58633 56.4563 7.13672 55.7795Z" />
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p>“Integer purus odio, placera rhoncus in going tour offe corper necless dolor. and utoffer tha wegon poort himenaeos thao gain again offe all work this project very dificult lacinia.”</p>
                  </div>
                  <div className="logo-and-rating">
                    <div className="logo">
                      <img src="assets/img/home4/icon/testimonial-logo1.svg" alt="" />
                    </div>
                    <ul className="rating">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card two">
                  <div className="author-and-quote-area">
                    <div className="author-area">
                      <div className="author-img">
                        <img src="assets/img/home1/testimonial-author-img5.png" alt="" />
                      </div>
                      <div className="author-name-and-desig">
                        <h4>Owen Samuel</h4>
                        <span>CEO At scooby.com</span>
                      </div>
                    </div>
                    <svg className="quote" width={63} height={57} viewBox="0 0 63 57" xmlns="http://www.w3.org/2000/svg">
                      <path d="M42.1438 56.1732C43.0297 55.9641 47.0287 53.8846 48.7268 52.7525C50.9293 51.2883 52.1721 50.2916 54.0301 48.4336C60.0471 42.4535 62.3235 36.1658 62.8772 24.0088C62.9633 22.2615 63.0002 17.3766 62.9756 12.0117C62.9387 3.60762 62.9264 2.93086 62.7172 2.5248C62.4219 1.94648 61.8436 1.35586 61.2283 1.02363L60.7239 0.75293L50.0803 0.752931C41.3809 0.752932 39.3506 0.789846 38.9569 0.925197C38.3539 1.13438 37.591 1.82344 37.2465 2.46328L36.9758 2.96778L36.9389 13.476C36.902 25.0301 36.8897 24.7717 37.6526 25.6945C37.8494 25.9406 38.3047 26.2852 38.6616 26.4574L39.3014 26.7773L44.3832 26.7773L49.4651 26.7773L49.4651 27.6756C49.4651 29.6443 48.9852 32.4129 48.2961 34.4801C46.7334 39.1559 44.0141 42.109 38.883 44.6807C37.8864 45.1852 36.9143 45.7512 36.6928 45.985C36.1268 46.5633 35.893 47.277 35.9545 48.2121C36.0037 48.9012 36.176 49.3441 37.468 52.0389C38.9815 55.2012 39.2645 55.6318 40.1627 56.001C40.7164 56.2348 41.5778 56.3086 42.1438 56.1732Z" />
                      <path d="M7.13672 55.7795C15.4178 52.1619 21.7301 46.0096 24.5232 38.8359C25.3231 36.7934 26.0367 33.6803 26.4428 30.4688C26.9596 26.4451 27.0088 24.9316 27.0088 13.7344C27.0088 3.41074 26.9965 2.94316 26.775 2.5002C26.4797 1.89727 25.9506 1.36816 25.2984 1.02363L24.7939 0.75293L14.0889 0.752931C3.46992 0.752932 3.38379 0.752932 2.83008 1.01133C2.16563 1.31895 1.67344 1.79883 1.3043 2.47559C1.0459 2.96778 1.0459 2.99239 1.00899 13.476C0.972073 25.0301 0.959768 24.7717 1.72266 25.6945C1.91953 25.9406 2.37481 26.2852 2.73164 26.4574L3.37149 26.7773L8.51485 26.7773C13.5229 26.7773 13.6582 26.7773 13.6582 27.0111C13.6582 27.934 13.3383 30.6533 13.0922 31.8838C12.7107 33.7787 12.3047 34.9969 11.5049 36.6826C9.80684 40.251 7.22286 42.6504 2.83008 44.7668C0.566021 45.8496 0.0738336 46.4279 0.0615295 48.0029C0.0615295 48.852 0.0861382 48.9012 1.47657 51.7928C2.25176 53.3924 3.05157 54.9182 3.24844 55.1643C4.12208 56.2225 5.58633 56.4563 7.13672 55.7795Z" />
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p>“Integer purus odio, placera rhoncus in going tour offe corper necless dolor. and utoffer tha wegon poort himenaeos thao gain again offe all work this project very dificult lacinia.”</p>
                  </div>
                  <div className="logo-and-rating">
                    <div className="logo">
                      <img src="assets/img/home4/icon/testimonial-logo1.svg" alt="" />
                    </div>
                    <ul className="rating">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="slider-btn-grp">
        <div className="slider-btn testimonial-slider-prev">
          <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.54022 8.33623C4.06809 8.33623 6.37199 10.6692 6.37199 13.2333L6.37199 14.2842L8.44571 14.2842L8.44571 13.2333C8.44571 11.3691 7.63904 9.6204 6.37303 8.33623L14.501 8.33623L14.501 6.23448L6.37303 6.23448C7.63904 4.95031 8.44571 3.20165 8.44571 1.3374L8.44571 0.286522L6.37199 0.286523L6.37199 1.3374C6.37199 3.90048 4.06809 6.23448 1.54022 6.23448L0.503357 6.23448L0.503357 8.33623L1.54022 8.33623Z" />
          </svg>
        </div>
        <div className="slider-btn testimonial-slider-next">
          <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4629 6.23411C10.9346 6.23411 8.63034 3.90077 8.63034 1.33621V0.285156L6.55627 0.285156V1.33621C6.55627 3.20077 7.36309 4.94972 8.62931 6.23411L0.5 6.23411L0.5 8.33621H8.62931C7.36309 9.62059 6.55627 11.3695 6.55627 13.2341V14.2852H8.63034V13.2341C8.63034 10.6706 10.9346 8.33621 13.4629 8.33621H14.5V6.23411H13.4629Z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="pagination-area">
      <div className="swiper-pagination1" />
    </div>
  </div>
</div>
   
    </>
  )
}

export default Home6Testimonial