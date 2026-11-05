import Breadcrum from "@/components/common/Breadcrum";
import React from "react";
import Header1 from "@/components/header/Header1";
import Home5Footer from "@/components/Footer/Home5Footer";
import Home1About from "@/components/about/Home1About";
import Home1Feature from "@/components/feature/Home1Feature";
import Home1ProcessSection from "@/components/process-section/Home1ProcessSection";
import Home1Contact from "@/components/contact/Home1Contact";
import Home1CaseStudy from "@/components/case-study-section/Home1CaseStudy";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Home1blog from "@/components/blog-section/Home1blog";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const AboutPage = () => {
  return (
    <div>
      <Header1 style={"inner-page"} fluid="container" />
      <Breadcrum
        pageTitle="About"
        pagename="About DizineTech"
        bannerImage="/assets/img/banner/about-banner.webp"
      />
      <Home1About sectionGap={"pt-150"} />
      <Home1Feature />
      {/* <Home1ProcessSection /> */}
      <Home1Contact />
      {/* <Home1CaseStudy/> */}
      {/* <Home1Testimonial /> */}
      {/* <Home1blog/> */}
      <Home5Footer />
    </div>
  );
};

export default AboutPage;
