
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Header1 from "@/components/header/Header1";
import Home5Footer from "@/components/Footer/Home5Footer";
import caseStudyData from "@/data/case-study-data.json";
import { slugify } from "@/utils/slugify";



const defaultChallenges = [
    {
        title: "Standing Out",
        description:
            "Creating a distinctive digital presence in a competitive market.",
    },
    {
        title: "Building Trust",
        description:
            "Presenting the brand professionally to build confidence with potential customers.",
    },
    {
        title: "User Experience",
        description:
            "Making the website easy to navigate across devices and screen sizes.",
    },
    {
        title: "Business Growth",
        description:
            "Building a digital experience aligned with the client's business goals.",
    },
];

const CaseStudyDetails = () => {
    const params = useParams();
    const slugParam = params?.slug;
    const decodedSlug = decodeURIComponent(
        Array.isArray(slugParam) ? slugParam[0] : slugParam || ""
    );

    const caseStudies = caseStudyData.case_study_card || [];

    const caseStudy = caseStudies.find(
        (study) => slugify(study.title) === decodedSlug
    );

    if (!caseStudy) {
        return (
            <>
                <Header1 style="inner-page" fluid="container" />
                <main className="portfolio-not-found">
                    <h1>Project not found</h1>
                    <p>The portfolio project you're looking for is unavailable.</p>
                    <Link href="/portfolio" className="portfolio-back-link">
                        Back to Portfolio →
                    </Link>
                </main>
                <Home5Footer />
            </>
        );
    }

    // Add six image paths to gallery_images in your project data.
    const galleryImages = Array.isArray(caseStudy.gallery_images)
        ? caseStudy.gallery_images.filter(Boolean).slice(0, 6)
        : [];

    // Fill empty gallery slots with the project thumbnail until
    // you add the actual screenshots.
    while (
        galleryImages.length < 6 &&
        caseStudy.thumbnail_image
    ) {
        galleryImages.push(caseStudy.thumbnail_image);
    }

    const challenges =
        Array.isArray(caseStudy.challenges) &&
        caseStudy.challenges.length
            ? caseStudy.challenges.slice(0, 4)
            : defaultChallenges;

    return (
        <>
            <Header1 style="inner-page" fluid="container" />

            <main className="portfolio-details-page">
                {/* 1. Project Banner */}
                <section className="portfolio-project-hero">
                    <div className="portfolio-project-hero-content">
                        <span className="portfolio-eyebrow">
                            {caseStudy.category || "OUR WORK"}
                        </span>

                        <h1>{caseStudy.title}</h1>

                        <p>
                            {caseStudy.short_description ||
                                caseStudy.description ||
                                "A digital experience designed around the client's business goals."}
                        </p>
                    </div>

                    {caseStudy.thumbnail_image && (
                        <div className="portfolio-hero-image">
                            <img
                                src={caseStudy.thumbnail_image}
                                alt={`${caseStudy.title} project preview`}
                                fetchPriority="high"
                            />
                        </div>
                    )}
                </section>

                {/* 2. Six Image Grid */}
                <section
                    className="portfolio-gallery-section"
                    aria-label="Project gallery"
                >
                    <div className="portfolio-section-heading">
                        <span className="portfolio-eyebrow">
                            PROJECT GALLERY
                        </span>
                        <h2>A Closer Look</h2>
                    </div>

                    <div className="portfolio-gallery-grid">
                        {galleryImages.map((image, index) => (
                            <div
                                className="portfolio-gallery-item"
                                key={`${image}-${index}`}
                            >
                                <img
                                    src={image}
                                    alt={`${caseStudy.title} project view ${index + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Client Name and Description */}
                <section className="portfolio-overview">
                    <div className="portfolio-overview-client">
                        <span className="portfolio-eyebrow">
                            THE CLIENT
                        </span>
                        <h2>
                            {caseStudy.client_name || caseStudy.title}
                        </h2>

                        <div className="portfolio-meta">
                            {caseStudy.category && (
                                <div>
                                    <span>Project Type</span>
                                    <strong>{caseStudy.category}</strong>
                                </div>
                            )}

                            {caseStudy.industry && (
                                <div>
                                    <span>Industry</span>
                                    <strong>{caseStudy.industry}</strong>
                                </div>
                            )}

                            {caseStudy.stack && (
                                <div>
                                    <span>Technology</span>
                                    <strong>{caseStudy.stack}</strong>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="portfolio-overview-description">
                        <h3>About the Project</h3>
                        <p>
                            {caseStudy.description ||
                                caseStudy.short_description ||
                                `We worked on ${caseStudy.title} to create a digital experience tailored to the client's needs, priorities, and business objectives.`}
                        </p>
                    </div>
                </section>

                {/* 4. Four Challenge Points */}
                <section className="portfolio-challenges">
                    <div className="portfolio-challenges-heading">
                        <span className="portfolio-eyebrow">
                            THE CHALLENGE
                        </span>
                        <h2>Challenges We Set Out to Solve</h2>
                    </div>

                    <div className="portfolio-challenges-grid">
                        {challenges.map((challenge, index) => (
                            <article
                                className="portfolio-challenge-card"
                                key={`${challenge.title}-${index}`}
                            >
                                <span className="portfolio-challenge-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{challenge.title}</h3>
                                <p>
                                    {challenge.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Back to portfolio */}
                <div className="portfolio-details-footer">
                    <Link href="/portfolio" className="portfolio-back-link">
                        ← Back to Portfolio
                    </Link>
                </div>
            </main>

            <Home5Footer />
        </>
    );
};

export default CaseStudyDetails;
