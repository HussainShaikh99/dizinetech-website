import React from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Home5Footer from '@/components/Footer/Home5Footer'
import Home1ProcessSection from '@/components/process-section/Home1ProcessSection'
import Home1Contact from '@/components/contact/Home1Contact'
import Home1Testimonial from '@/components/testimonial/Home1Testimonial'
import Home1Team from '@/components/team-section/Home1Team'
import Home3About from '@/components/about/Home3About'
export const metadata = {
    icons: {
        icon: "/assets/img/fav-icon.svg",
    },
};
const WhyChooseUse = () => {
    return (
        <>
            <Header1 style={"inner-page"} fluid='container' />
            <Breadcrum pageTitle={'Why Choose Us'} pagename={'Why Choose Us'} />
            <Home1ProcessSection sectionGap={'pt-150'} />
            <Home1Contact />
            <Home3About />
            <Home1Testimonial />
            <Home1Team />
            <Home5Footer/>
        </>
    )
}

export default WhyChooseUse