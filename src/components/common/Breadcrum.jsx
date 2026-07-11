import Link from 'next/link'
import React from 'react'

const Breadcrum = ({ pageTitle, pagename }) => {
    return (
        <div className="breadcrumb-section" style={{ backgroundImage: 'url(/assets/img/inner-pages/breadcrumb-bg.png), linear-gradient(180deg, #FFE8DE 0%, #FFE8DE 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-wrapper">
                            <div className="banner-content">
                                <ul className="breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>{pageTitle}</li>
                                </ul>
                                <h1>{pagename}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-down-btn" id="scroll-btn">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={19} height={29} viewBox="0 0 19 29">
                        <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5" />
                    </svg>
                </a>
            </div>
        </div>

    )
}

export default Breadcrum