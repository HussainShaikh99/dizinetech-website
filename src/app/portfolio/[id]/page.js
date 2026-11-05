"use client"
import React, { useState, useEffect } from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import ModalVideo from "react-modal-video"
import portfolioData from '@/data/portfolio-data.json'
import { notFound, useSearchParams } from 'next/navigation'

const PortfolioDetails = ({ params }) => {
    const [isOpen, setOpen] = useState(false)
    const [portfolioItem, setPortfolioItem] = useState(null)
    const searchParams = useSearchParams()
    const fromGrid2 = searchParams.get('fromGrid2') === 'true'

    useEffect(() => {
        const item = portfolioData.find(item => item.id === parseInt(params.id))
        if (item) {
            setPortfolioItem(item)
        } else {
            notFound()
        }
    }, [params.id])

    if (!portfolioItem) {
        return <div>Loading...</div>
    }

    const displayImage = fromGrid2 && portfolioItem.grid2Image ? portfolioItem.grid2Image : portfolioItem.image

    return (
        <div>
            <Header1 style={"inner-page"} fluid='container' />
            <Breadcrum pageTitle={portfolioItem.title} pagename={"Portfolio Details"} />

            <div className="portfolio-details-page pt-150 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row g-lg-4 gy-5 mb-100">
                        <div className="col-lg-8">
                            <div className="portfolio-details-content">
                                <img src={displayImage} alt={portfolioItem.title} />
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h3>{portfolioItem.title}</h3>
                                <span className="line-break" />
                                <p>{portfolioItem.description}</p>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h3>Project results</h3>
                                <span className="line-break" />
                                <p>{portfolioItem.results}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-details-sidebar">
                                <div className="portfolio-info-wrap mb-35">
                                    <ul className="portfolio-info">
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={34} height={23} viewBox="0 0 34 23" fill="none">
                                                    <path d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22" strokeWidth={2} strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <span>Client:</span>
                                                <h5>{portfolioItem.client}</h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={34} height={23} viewBox="0 0 34 23" fill="none">
                                                    <path d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22" strokeWidth={2} strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <span>Company:</span>
                                                <h5>{portfolioItem.company}</h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={34} height={23} viewBox="0 0 34 23" fill="none">
                                                    <path d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22" strokeWidth={2} strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <span>Location:</span>
                                                <h5>{portfolioItem.location}</h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={34} height={23} viewBox="0 0 34 23" fill="none">
                                                    <path d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22" strokeWidth={2} strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <span>Project Type:</span>
                                                <h5>{portfolioItem.projectType}</h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={34} height={23} viewBox="0 0 34 23" fill="none">
                                                    <path d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22" strokeWidth={2} strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <span>Duration:</span>
                                                <h5>{portfolioItem.duration}</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-banner">
                                    <img src="/assets/img/inner-pages/case-sidebar-banner-img.jpg" alt="" />
                                    <div className="banner-content-wrap">
                                        <div className="banner-content">
                                            <h2>Ready to <span>work with us?</span></h2>
                                            <a href="#" className="primary-btn" data-text="Get a quote "><span>Get a quote </span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navigation section remains the same */}
                </div>
            </div>
            <React.Fragment>
                <ModalVideo
                    channel="youtube"
                    onClick={() => setOpen(true)}
                    isOpen={isOpen}
                    animationSpeed="350"
                    videoId="r4KpWiK08vM"
                    ratio="16:9"
                    onClose={() => setOpen(false)}
                />
            </React.Fragment>
            <Footer1 />
        </div>
    )
}

export default PortfolioDetails