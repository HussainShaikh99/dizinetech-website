import React from 'react'
import Breadcrum from '@/components/common/Breadcrum'
import Header1 from '@/components/header/Header1'
import Home1Service from '@/components/service/Home1Service'
import Home1Pricing from '@/components/pricing-plan-section/Home1Pricing'
import Home1ProcessSection from '@/components/process-section/Home1ProcessSection'
import Home5Footer from '@/components/Footer/Home5Footer'
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const ServicePage = () => {
  return (
    <>
      <Header1 style={"inner-page"} fluid="container" />
      <Breadcrum pageTitle={'Service'} pagename={'Service'} />
      <Home1Service />
      <Home1Pricing />
      <Home1ProcessSection />
      <Home5Footer/>
    </>
  )
}

export default ServicePage