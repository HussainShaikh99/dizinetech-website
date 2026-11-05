import React from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "bi bi-search",
    title: "Search Engine Optimization",
    description:
      "Improve your website's search visibility through technical optimisation, on-page improvements, content strategy, and stronger SEO foundations.",
    link: "/contact",
  },
  {
    number: "02",
    icon: "bi bi-geo-alt",
    title: "Local SEO",
    description:
      "Improve visibility for location-based searches and help potential customers discover your business in relevant local search results.",
    link: "/contact",
  },
  {
    number: "03",
    icon: "bi bi-building",
    title: "Google Business Profile",
    description:
      "Optimise your business profile to improve local presence, business information, and visibility across Google Search and Maps.",
    link: "/contact",
  },
  {
    number: "04",
    icon: "bi bi-chat-square-text",
    title: "Answer Engine Optimization",
    description:
      "Structure and optimise content to make it clearer and easier for answer engines to understand and surface for relevant queries.",
    link: "/contact",
  },
  {
    number: "05",
    icon: "bi bi-stars",
    title: "Generative Engine Optimization",
    description:
      "Improve how your business and content can be understood and represented across AI-powered and generative search experiences.",
    link: "/contact",
  },
  {
    number: "06",
    icon: "bi bi-file-earmark-text",
    title: "SEO Content Optimisation",
    description:
      "Optimise website content around search intent, relevance, structure, and user needs to strengthen long-term organic visibility.",
    link: "/contact",
  },
];

const technologies = [
  {
    icon: "bi bi-google",
    title: "Google Search Console",
  },
  {
    icon: "bi bi-bar-chart",
    title: "Google Analytics",
  },
  {
    icon: "bi bi-geo-alt",
    title: "Google Business Profile",
  },
  {
    icon: "bi bi-search",
    title: "Ahrefs",
  },
  {
    icon: "bi bi-graph-up",
    title: "SEMrush",
  },
  {
    icon: "bi bi-speedometer2",
    title: "PageSpeed Insights",
  },
  {
    icon: "bi bi-file-earmark-text",
    title: "Schema Markup",
  },
  {
    icon: "bi bi-stars",
    title: "AI Search Platforms",
  },
];

const ServiceDetailsPageSectionSEO = () => {
  return (
    <div className="service-details-page pt-150 mb-120" id="scroll-section">
      <div className="container">
        {/* ================= INTRO SECTION ================= */}

        <div className="row g-lg-4 gy-5 detailed-serive-page-top-content">
          <div className="col-lg-9">
            <div className="service-details-content-wrap">
              <span className="service-section-tag">SEO & GROWTH</span>

              <h2>
                Grow Your Business Visibility and
                <br />
                <span>Reach the Right Audience</span>
              </h2>

              <p>
                Search visibility is no longer limited to traditional search
                engine rankings. Businesses need to be discoverable across
                search engines, local search results, answer-based search
                experiences, and emerging AI-powered platforms. At Dizinetech,
                we help businesses improve their online visibility through SEO,
                AEO, GEO, and local search optimisation, building strategies
                around their audience, industry, and business goals.
              </p>

              <p>
                Our SEO approach focuses on strengthening the foundation of your
                website through technical improvements, on-page optimisation,
                content strategy, and search-focused website structure. We also
                work with Answer Engine Optimization (AEO) to help make your
                content clearer and easier to understand for answer-based search
                experiences, while Generative Engine Optimization (GEO) focuses
                on improving how your business and content can be understood and
                surfaced across evolving AI-powered search platforms.
              </p>

              <p>
                For businesses targeting customers in specific locations, we
                also help improve local visibility through Google Business
                Profile (formerly Google My Business or GMB) optimisation and
                local SEO strategies. From improving business information and
                local search presence to supporting stronger visibility for
                location-based searches, we focus on helping potential customers
                find your business when they are actively looking for your
                products or services.
              </p>

              <p>
                Rather than treating SEO, AEO, GEO, and local search as separate
                activities, we look at how they can work together to build a
                stronger overall search presence. Our goal is to help your
                business become easier to discover across traditional search
                engines, local results, answer engines, and the evolving
                landscape of AI-powered search.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SUB SERVICES ================= */}

        <div className="web-sub-services">
          <div className="web-sub-services-heading">
            <span className="service-section-tag">SEO CAPABILITIES</span>

            <h2>
              Search Strategies Built for
              <br />
              <span>Better Visibility & Growth</span>
            </h2>

            <p>
              From traditional search optimisation to local and AI-powered
              search visibility, we help businesses improve how they are
              discovered online.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={service.number}>
                <div className="web-sub-service-card">
                  <div className="web-service-icon">
                    <i className={service.icon}></i>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link href="/contact" className="web-service-link">
                    Discuss Your Project <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TECHNOLOGIES SECTION ================= */}

        <div className="technologies-section">
          <div className="technologies-heading">
            <div className="web-sub-services-heading">
              <span className="service-section-tag">
                TOOLS & PLATFORMS WE USE
              </span>

              <h2>
                The Tools Behind Better
                <br />
                <span>Search Visibility</span>
              </h2>

              <p>
                We use trusted SEO, analytics, search, and optimisation tools to
                analyse performance, identify opportunities, and make informed
                decisions for your growth strategy.
              </p>
            </div>
          </div>

          <div className="technology-grid">
            {technologies.map((technology, index) => (
              <div className="technology-card" key={index}>
                <div className="technology-icon">
                  <i className={technology.icon}></i>
                </div>

                <h4>{technology.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Card Image ================= */}

        <div className="service-mid-image-wrapper">
          <div className="service-mid-image-content">
            <span className="service-section-tag">SEO & GROWTH</span>

            <h2>
              Ready to Grow Your
              <br />
              <span>Search Visibility?</span>
            </h2>

            <p>
              From SEO and local search optimisation to AEO, GEO, and Google
              Business Profile optimisation, we help improve your business
              visibility across search engines, local results, answer engines,
              and AI-powered search.
            </p>

            <div className="service-mid-image-buttons">
              <Link href="/portfolio" className="app-primary-btn">
                Explore Our Work
              </Link>

              <Link href="/contact" className="app-secondary-btn">
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div className="service-mid-image">
            <img
              src="/assets/img/seo-btm-banner.webp"
              alt="SEO & Growth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPageSectionSEO;
