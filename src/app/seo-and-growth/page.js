import React from 'react'
import Breadcrum from '@/components/common/Breadcrum'
import Header1 from '@/components/header/Header1'
import ServiceDetailsPageSectionSEO from '@/components/service/ServiceDetailsPageSectionSEO'
import Home1ProcessSection from '@/components/process-section/Home1ProcessSection'
import Home1Pricing from '@/components/pricing-plan-section/Home1Pricing'
import Home1WhyChooseus from '@/components/why-choose-us-section/Home1WhyChooseus'
import LogoSection1 from '@/components/logo-section/LogoSection1'
import Home5Footer from "@/components/Footer/Home5Footer";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const ServiceDetailsPage = () => {
  return (
    <>
      <Header1 style={"inner-page"} fluid="container" />
      <Breadcrum pageTitle={'SEO & Growth'} pagename={'SEO & GROWTH'} />
      <ServiceDetailsPageSectionSEO />
      <LogoSection1 />
      <Home5Footer/>
    </>
  )
}

export default ServiceDetailsPage