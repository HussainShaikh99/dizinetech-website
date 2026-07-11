import Link from 'next/link'
import React from 'react'

const Home4Banner2 = () => {
    return (
        <>
            <div className="home4-banner2-section mb-120" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(assets/img/home4/home4-banner2-bg.jpg)' }}>
                <div className="banner-content text-animation">
                    <p>This goal reflects our growth strategy, our purpose, our core&nbsp;values and our culture of shared success.</p>
                    <Link href="/contact" className="primary-btn2" data-text="Contact Now">
                        <span>Contact Now</span>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Home4Banner2