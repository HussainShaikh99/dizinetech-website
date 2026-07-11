import React from 'react'
import Breadcrum from '@/components/common/Breadcrum'
import Header1 from '@/components/header/Header1'
import ServiceDetailsPageSection from '@/components/service/ServiceDetailsPageSection'
import Home1ProcessSection from '@/components/process-section/Home1ProcessSection'
import Home1Pricing from '@/components/pricing-plan-section/Home1Pricing'
import Home1WhyChooseus from '@/components/why-choose-us-section/Home1WhyChooseus'
import LogoSection1 from '@/components/logo-section/LogoSection1'
import Footer1 from '@/components/Footer/Footer1'
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const ServiceDetailsPage = () => {
  return (
    <>
      <Header1 style={"inner-page"} fluid="container" />
      <Breadcrum pageTitle={'Service Details'} pagename={'Service Details'} />
      <ServiceDetailsPageSection />
      <Home1ProcessSection />
      <Home1Pricing />
      <Home1WhyChooseus />
      <LogoSection1 />
      <Footer1 />
    </>
  )
}

export default ServiceDetailsPage