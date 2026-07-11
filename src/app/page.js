import Header1 from "@/components/header/Header1";
import Home1Service from "@/components/service/Home1Service";
import Home1Feature from "@/components/feature/Home1Feature";
import Home1About from "@/components/about/Home1About";
import Home1ProcessSection from "@/components/process-section/Home1ProcessSection";
import Home1Pricing from "@/components/pricing-plan-section/Home1Pricing";
import Home1WhyChooseus from "@/components/why-choose-us-section/Home1WhyChooseus";
import LogoSection1 from "@/components/logo-section/LogoSection1";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Home1CaseStudy from "@/components/case-study-section/Home1CaseStudy";
import Home1Faq from "@/components/faq-section/Home1Faq";
import Home1Audtit from "@/components/audit-section/Home1Audtit";
import Home1Contact from "@/components/contact/Home1Contact";
import Home1Team from "@/components/team-section/Home1Team";
import Home1blog from "@/components/blog-section/Home1blog";
import Footer1 from "@/components/Footer/Footer1";
import Home1Banner from "@/components/banner/Home1banner";



export default function Home() {
  return (
    <>
      <Header1 fluid="container" />
      <Home1Banner />
      <Home1Service />
      <Home1Feature />
      <Home1About />
      <Home1Contact />
      <Home1ProcessSection />
      <Home1Pricing />
      <Home1WhyChooseus />
      <LogoSection1 />
      <Home1Testimonial />
      <Home1CaseStudy />
      <Home1Faq />
      <Home1Team />
      <Home1Audtit />
      <Home1blog />
      <Footer1 />
    </>
  );
}
