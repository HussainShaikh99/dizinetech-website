import Home2Banner from '@/components/banner/Home2Banner'
import Header1 from '@/components/header/Header1'
import React from 'react'
import Home2Service from '@/components/service/Home2Service'
import Home2About from '@/components/about/Home2About'
import Home2Portfolio from '@/components/portfolio/Home2Portfolio'
import Home2Feature from '@/components/feature/Home2Feature'
import Home2Testimonial from '@/components/testimonial/Home2Testimonial'
import Home2Pricing from '@/components/pricing-plan-section/Home2Pricing'
import Home2Team from '@/components/team-section/Home2Team'
import Home2Blog from '@/components/blog-section/Home2Blog'
import Home2Contact from '@/components/contact/Home2Contact'
import Home2Footer from '@/components/Footer/Home2Footer'
export const metadata = {
    icons: {
      icon: "/assets/img/fav-icon.svg",
    },
  };
const SeoCompanyPage = () => {
    return (
        <>
            <Header1 style={"two"} fluid={"container-fluid"} />
            <Home2Banner />
            <Home2Service />
            <Home2About />
            <Home2Portfolio />
            <Home2Feature />
            <Home2Testimonial />
            <Home2Pricing />
            <Home2Team />
            <Home2Blog />
            <Home2Contact />
            <Home2Footer />
        </>
    )
}

export default SeoCompanyPage