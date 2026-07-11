import Link from 'next/link'
import React from 'react'

const Home3Contact = () => {
    return (
        <>
            <div className="home2-contact-section style-2">
                <div className="container">
                    <div className="contact-wrap text-animation">
                        <div className="contact-content">
                            <div className="sub-title">
                                <strong />
                                <span>Start your free trail</span>
                                <strong />
                            </div>
                            <h2>Ready To Take Your SEO To The Next Level?</h2>
                        </div>
                        <Link href="/contact" className="primary-btn2" data-text="Let’s Talk">
                            <span>Let’s Talk</span>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home3Contact