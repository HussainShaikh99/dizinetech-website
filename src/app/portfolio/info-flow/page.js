"use client"
import React, { useEffect } from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import portfolioData from '@/data/portfolio-data.json'
import Link from 'next/link'
const InfoFlow = () => {
    useEffect(() => {
        const infoflow1TextItem = document.querySelectorAll(
            ".portfolio-info-flow-card"
        );
        function followImageCursor(event, infoflow1TextItem) {
            const contentBox = infoflow1TextItem.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            infoflow1TextItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        infoflow1TextItem.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 100);
            });
        });

    }, [])
    return (
        <div>
            <Header1 style={"inner-page"} fluid='container' />
            <Breadcrum pageTitle={'Portfolio Info Flow'} pagename={'Portfolio Info Flow'} />
            <div className="portfolio-info-flow-page pt-150 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row g-4 mb-70">
                        {portfolioData.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="portfolio-info-flow-card">
                                    <Link href={`/portfolio/${item.id}?fromGrid2=true`} className="info-flow-img">
                                        <img src={item.grid2Image || item.image} alt={item.title} />
                                    </Link>
                                    <div className="info-flow-content">
                                        <h6><Link href={`/portfolio/${item.id}?fromGrid2=true`}>{item.title}</Link></h6>
                                        <Link href={`/portfolio/${item.id}?fromGrid2=true`}>{item.client}</Link>
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
        </div>
    )
}

export default InfoFlow