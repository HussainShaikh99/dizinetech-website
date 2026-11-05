
import React from "react";
import Header1 from "@/components/header/Header1";
import Breadcrum from "@/components/common/Breadcrum";
import Home5Footer from "@/components/Footer/Home5Footer";
import caseStudyData from "@/data/case-study-data.json";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const PortfolioPage = () => {
  const caseStudies = caseStudyData.case_study_card || [];

  return (
    <>
      <Header1 style={"inner-page"} fluid="container" />

      <Breadcrum
        pageTitle="Portfolio"
        pagename="Portfolio"
        bannerImage="/assets/img/banner/portfolio-banner.webp"
      />

      <div className="case-study-page pt-150 mb-120" id="scroll-section">
        <div className="container">
          <div className="portfolio-projects">
            {caseStudies.map((caseStudy, index) => (
              <div
                className={`row align-items-center gy-4 portfolio-project-row ${
                  index % 2 !== 0 ? "portfolio-image-left" : ""
                }`}
                key={caseStudy.id}
              >
                {/* Project Content - 60% */}
                <div className="col-lg-7 portfolio-project-text">
                  <div className="portfolio-project-content service-details-content-wrap">
                    <span className="portfolio-project-category service-section-tag">
                      {caseStudy.tag}
                    </span>

                    <h2>{caseStudy.title}</h2>

                    <p>{caseStudy.content}</p>

                    {caseStudy.website_url && (
                      <a
                        href={caseStudy.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-btn four"
                      >
                        <span>View Live Website</span>

                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M10.172 2.86041C8.29526 3.94396 5.58476 3.19947 4.48567 1.29577L4.03522 0.515567L2.49562 1.40445L2.94607 2.18466C3.74517 3.56874 5.09362 4.52122 6.584 4.93196L0.54955 8.41595L1.45045 9.97636L7.4849 6.49237C7.09542 7.98844 7.24607 9.63248 8.04517 11.0166L8.49562 11.7968L10.0352 10.9079L9.58477 10.1277C8.48612 8.22475 9.19616 5.50437 11.0729 4.42082L11.8427 3.97637L10.9418 2.41597L10.172 2.86041Z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image - 40% */}
                <div className="col-lg-5 portfolio-project-visual">
                  <div className="portfolio-project-image">
                    <img
                      src={caseStudy.cover_image}
                      alt={caseStudy.title}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {caseStudies.length === 0 && (
            <div className="text-center">
              <p>No portfolio projects available yet.</p>
            </div>
          )}
        </div>
      </div>

      <Home5Footer />
    </>
  );
};

export default PortfolioPage;
