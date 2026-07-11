
import Home6Banner from '@/components/banner/Home6Banner'
import Home6Blog from '@/components/blog-section/Home6Blog'
import Home6Contact from '@/components/contact/Home6Contact'
import Home6Faq from '@/components/faq-section/Home6Faq'
import Home6Feature from '@/components/feature/Home6Feature'
import Home6Footer from '@/components/Footer/Home6Footer'
import Header1 from '@/components/header/Header1'
import Home6PerformanceSection from '@/components/performance-section/Home6PerformanceSection'
import Home6Pricing from '@/components/pricing-plan-section/Home6Pricing'
import Home6ProcessSection from '@/components/process-section/Home6ProcessSection'
import Home6Testimonial from '@/components/testimonial/Home6Testimonial'
import Home6WhyChooseus from '@/components/why-choose-us-section/Home6WhyChooseus'

export const metadata = {
    icons: {
      icon: "/assets/img/fav-icon.svg",
    },
  };
const AiSeoSoftwarePage = () => {
    return (
        <>
            <Header1 style='style-1 four' fluid='container' />
            <Home6Banner />
            <Home6Feature />
            <Home6WhyChooseus />
            <Home6PerformanceSection />
            <Home6ProcessSection />
            <Home6Pricing />
            <Home6Faq />
            <Home6Testimonial/>
            <Home6Blog />/
            <Home6Contact />
            <Home6Footer />

        </>
    )
}

export default AiSeoSoftwarePage