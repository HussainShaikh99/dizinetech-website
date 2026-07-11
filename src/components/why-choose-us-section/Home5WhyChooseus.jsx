import Link from 'next/link'
import React from 'react'

const Home5WhyChooseus = () => {
    return (
        <>
            <div className="home5-why-choose-section mb-120">
                <div className="container">
                    <div className="row g-lg-4 gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-img magnetic-item">
                                <img src="assets/img/home5/home5-why-choose-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose-content">
                                <div className="section-title four text-animation">
                                    <span className="sub-title">About Nexaq</span>
                                    <h2>The Secret Weapon for Your <span>Business Success</span> Choose the Best.</h2>
                                </div>
                                <div className="content-and-btn text-animation">
                                    <p>We understand your needs and deliver digital marketing through unique selling proposition. Our team of experts is passionate about helping you SEO company. Choose us and experience the difference! Looking for something different?  We challenge the status quo with innovative solutions and a [company culture adjective] approach. Let us show you how we can help you achieve desired outcome in a way you won't expect.</p>
                                    <Link href="/about" className="primary-btn2 three" data-text="About Us More">
                                        <span>About Us More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home5WhyChooseus