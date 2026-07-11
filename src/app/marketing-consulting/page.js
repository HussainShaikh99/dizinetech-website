"use client"
import Home4ABout from '@/components/about/Home4ABout'
import Home4Banner from '@/components/banner/Home4Banner'
import Home4Banner2 from '@/components/banner/Home4Banner2'
import Home4Blog from '@/components/blog-section/Home4Blog'
import Home4CaseStudy from '@/components/case-study-section/Home4CaseStudy'
import Home4Contact from '@/components/contact/Home4Contact'
import Home4Footer from '@/components/Footer/Home4Footer'
import Header4 from '@/components/header/Header4'
import Home4Pricing from '@/components/pricing-plan-section/Home4Pricing'
import Home4Process from '@/components/process-section/Home4Process'
import Home4Service from '@/components/service/Home4Service'
import Home4Testimonial from '@/components/testimonial/Home4Testimonial'
import Home4WhyChooseUs from '@/components/why-choose-us-section/Home4WhyChooseUs'
import React, { useEffect } from 'react'

  
const MarketingConsultingpage = () => {
  useEffect(() => {
    // Add class to body when the component mounts
    document.body.classList.add('marketing-home-bg');

    // Cleanup function to remove class when the component unmounts
    return () => {
      document.body.classList.remove('marketing-home-bg');
    };
  }, []);
    return (
        <>
            <Header4 />
            <Home4Banner />
            <Home4Service />
            <Home4Process />
            <Home4WhyChooseUs />
            <Home4ABout />
            <Home4Banner2 />
            <Home4CaseStudy />
            <Home4Pricing />
            <Home4Blog />
            <Home4Testimonial />
            <Home4Contact />
            <Home4Footer />
        </>
    )
}

export default MarketingConsultingpage