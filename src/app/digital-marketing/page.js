'use client'
import Home5about from '@/components/about/Home5about'
import Home5banner from '@/components/banner/Home5banner'
import Home5Benifit from '@/components/benifit-section/Home5Benifit'
import Home5Blog from '@/components/blog-section/Home5Blog'
import Home5Contact from '@/components/contact/Home5Contact'
import Home5Feature from '@/components/feature/Home5Feature'
import Home5Footer from '@/components/Footer/Home5Footer'
import Header1 from '@/components/header/Header1'
import Home5Portfolio from '@/components/portfolio/Home5Portfolio'
import Home5Pricing from '@/components/pricing-plan-section/Home5Pricing'
import Home5Service from '@/components/service/Home5Service'
import Home5Team from '@/components/team-section/Home5Team'
import Home5Testimonial from '@/components/testimonial/Home5Testimonial'
import Home5Testimonial2 from '@/components/testimonial/Home5Testimonial2'
import Home5WhyChooseus from '@/components/why-choose-us-section/Home5WhyChooseus'
import React, { useEffect } from 'react'

const DigitalMarketingPage = () => {
    useEffect(() => {
        document.body.classList.add('digital-marketing-home');
        return () => {
            document.body.classList.remove('digital-marketing-home');
        };
    }, []);

    return (
        <>
            <Header1 style='style-1 three' />
            <Home5banner />
            <Home5Feature />
            <Home5about />
            <Home5Service />
            <Home5WhyChooseus />
            <Home5Portfolio />
            <Home5Benifit />
            <Home5Testimonial />
            <Home5Team />
            <Home5Pricing />
            <Home5Blog />
            <Home5Testimonial2 />
            <Home5Contact />
            <Home5Footer />
        </>
    )
}

export default DigitalMarketingPage