import Home3About from '@/components/about/Home3About'
import Home3Banner from '@/components/banner/Home3Banner'
import Home3Blog from '@/components/blog-section/Home3Blog'
import Home3CaseStudy from '@/components/case-study-section/Home3CaseStudy'
import Topbar from '@/components/common/Topbar'
import Home3Contact from '@/components/contact/Home3Contact'
import Home3Faq from '@/components/faq-section/Home3Faq'
import Home3Feature from '@/components/feature/Home3Feature'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header1 from '@/components/header/Header1'
import Home3logo from '@/components/logo-section/Home3logo'
import Home3Pricing from '@/components/pricing-plan-section/Home3Pricing'
import Home3Service from '@/components/service/Home3Service'
import Home3Team from '@/components/team-section/Home3Team'
import Home3Testimonial from '@/components/testimonial/Home3Testimonial'
import Home3WhyChooseUs from '@/components/why-choose-us-section/Home3WhyChooseUs'

export const metadata = {
    icons: {
      icon: "/assets/img/fav-icon.svg",
    },
  };
const SocialMarketingPage = () => {
    return (
        <>
            <Topbar />
            <Header1 style='two' fluid='container-fluid' />
            <Home3Banner />
            <Home3WhyChooseUs />
            <Home3Service />
            <Home3About />
            <Home3logo />
            <Home3Feature />
            <Home3CaseStudy />
            <Home3Pricing />
            <Home3Team />
            <Home3Testimonial />
            <Home3Faq />
            <Home3Blog />
            <Home3Contact />
            <Home3Footer />
        </>
    )
}

export default SocialMarketingPage