"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home1CaseStudy = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    const initScrollAnimation = () => {
      const scrollSecTitle = document.querySelector(".scroll-sec-title");
      const scrollSecTitleEnd = document.querySelector(".scroll-sec-title-end");
    
      if (scrollSecTitle && scrollSecTitleEnd) {
        const start = scrollSecTitle.getBoundingClientRect().top;
        const end = scrollSecTitleEnd.getBoundingClientRect().top;
        const distance = end - start;
    
        const scScrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".scroll-sec-title",
            start: "top 15%",
            endTrigger: ".scroll-sec-title-end",
            end: "top top",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
          },
        });
    
        scScrollTl.to(".scroll-sec-title", {
          y: distance,
          duration: 10,
          opacity: 0,
        });
      }
    }
    
    const handleResize = () => {
      if (window.innerWidth >= 991) {
        initScrollAnimation();
      } else {
        if (ScrollTrigger.getById("scScrollTl")) {
          ScrollTrigger.getById("scScrollTl").kill();
        }
      }
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="home1-case-study-section mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-title scroll-sec-title text-animation">
              <span className="sub-title">Success Story</span>
              <h2>How We Helped You <span>From Zero</span> To Hero.</h2>
              <Link href="/case-study" className="primary-btn2" data-text="View All Stories">
                <span>View All Stories</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="case-card-area">
          <div className="row justify-content-end g-4">
            <div className="col-xl-7 col-lg-8">
              <div className="case-study-card">
                <div className="case-card-img">
                  <img src="assets/img/home1/case-study-img1.jpg" alt="" />
                  <ul className="tag-list">
                    <li><Link href="/case-study">Paid Search</Link></li>
                    <li><Link href="/case-study">Paid Social</Link></li>
                    <li><Link href="/case-study">SEO</Link></li>
                  </ul>
                </div>
                <div className="case-card-content" ref={ref}>
                  <div className="logo">
                    <img src="assets/img/home1/case-logo1.png" alt="" />
                  </div>
                  <h4><Link href="/case-study-details">Beautico E-commerce Growth rate.</Link></h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">{inView ? <CountUp end={40} duration={2} /> : '0'}</h5>
                    <span>%</span>
                  </div>
                  <Link href="/case-study-details" className="read-more-btn">Read The Success Stories
                    <svg width={11} height={12} viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 5L-8.27269e-08 5L1.86855e-07 6L8 6L4.36702 10.6276L5.13373 11.2696L10.1754 5.51727L4.13599 0L3.49399 0.766711L8 5Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="case-study-card">
                <div className="case-card-img">
                  <img src="assets/img/home1/case-study-img2.jpg" alt="" />
                  <ul className="tag-list">
                    <li><Link href="/case-study">Paid Search</Link></li>
                    <li><Link href="/case-study">Paid Social</Link></li>
                    <li><Link href="/case-study">SEO</Link></li>
                  </ul>
                </div>
                <div className="case-card-content">
                  <div className="logo">
                    <img src="assets/img/home1/case-logo2.png" alt="" />
                  </div>
                  <h4><Link href="/case-study-details">Travel &amp; Tour World Agency Growth rate.</Link></h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">{inView ? <CountUp end={50} duration={2} /> : '0'}</h5>
                    <span>%</span>
                  </div>
                  <Link href="/case-study-details" className="read-more-btn">Read The Success Stories
                    <svg width={11} height={12} viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 5L-8.27269e-08 5L1.86855e-07 6L8 6L4.36702 10.6276L5.13373 11.2696L10.1754 5.51727L4.13599 0L3.49399 0.766711L8 5Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 scroll-sec-title-end">
              <div className="case-study-card">
                <div className="case-card-img">
                  <img src="assets/img/home1/case-study-img3.jpg" alt="" />
                  <ul className="tag-list">
                    <li><Link href="/case-study">Paid Search</Link></li>
                    <li><Link href="/case-study">Paid Social</Link></li>
                    <li><Link href="/case-study">SEO</Link></li>
                  </ul>
                </div>
                <div className="case-card-content">
                  <div className="logo">
                    <img src="assets/img/home1/case-logo3.png" alt="" />
                  </div>
                  <h4><Link href="/case-study-details">Fashion Cloth Ecommerce Growth rate.</Link></h4>
                  <div className="number">
                    <span>+</span>
                    <h5 className="counter">{inView ? <CountUp end={60} duration={2} /> : '0'}</h5>
                    <span>%</span>
                  </div>
                  <Link href="/case-study-details" className="read-more-btn">Read The Success Stories
                    <svg width={11} height={12} viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 5L-8.27269e-08 5L1.86855e-07 6L8 6L4.36702 10.6276L5.13373 11.2696L10.1754 5.51727L4.13599 0L3.49399 0.766711L8 5Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home1CaseStudy