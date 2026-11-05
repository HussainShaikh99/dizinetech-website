import React from 'react'
import Breadcrum from '@/components/common/Breadcrum'
import Header1 from '@/components/header/Header1'
import Footer1 from '@/components/Footer/Footer1'
import portfolioData from '@/data/portfolio-data.json'
import Link from 'next/link'
const PortfolioGrid3 = () => {
    return (
        <>
            <Header1 style={"inner-page"} fluid={"container"} />
            <Breadcrum pageTitle={"Portfolio Grid 3"} pagename={"Portfolio Grid 3"} />
            <div className="portfolio-grid-page pt-150 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        {portfolioData.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="portfolio-card three magnetic-item">
                                    <div className="card-img-and-content-wrap">
                                    <img src={item.grid2Image || item.image} alt={item.title} />
                                </div>
                                <div className="card-content">
                                    <span>Client: Egenslab</span>
                                    <h4><Link href={`/portfolio/${item.id}?fromGrid2=true`}>{item.title}</Link></h4>
                                    <ul className="tag-list">
                                        {item.tags.map((tag, index) => (
                                            <li key={index}><Link href="/portfolio">{tag}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <a href="#" className="load-more-btn" data-text="Load More">
                                <span>Load More</span>
                                <svg width={20} height={16} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.6035 7.37409L0.626356 7.37364L0.626356 8.62636L17.6035 8.62591L11.7343 14.4951L12.6196 15.3804L20 8L12.6196 0.619627L11.7343 1.50494L17.6035 7.37409Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer1 />
        </>
    )
}

export default PortfolioGrid3    