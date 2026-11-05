import React from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "bi bi-code-slash",
    title: "Custom Software Development",
    description:
      "Custom software solutions built around your business processes, workflows, users, and specific operational requirements.",
    link: "/contact",
  },
  {
    number: "02",
    icon: "bi bi-cloud",
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms designed to deliver reliable digital services, manage users, and support long-term product growth.",
    link: "/contact",
  },
  {
    number: "03",
    icon: "bi bi-diagram-3",
    title: "Business Management Systems",
    description:
      "Custom systems designed to streamline operations, manage data, improve workflows, and support efficient business processes.",
    link: "/contact",
  },
];

const technologies = [
  {
    icon: "bi bi-filetype-js",
    title: "JavaScript",
  },
  {
    icon: "bi bi-code-slash",
    title: "React",
  },
  {
    icon: "bi bi-lightning-charge",
    title: "Next.js",
  },
  {
    icon: "bi bi-braces",
    title: "Node.js",
  },
  {
    icon: "bi bi-database",
    title: "MongoDB",
  },
  {
    icon: "bi bi-layers",
    title: "MERN Stack",
  },
];

const ServiceDetailsPageSectionSD = () => {
  return (
    <div className="service-details-page pt-150 mb-120" id="scroll-section">
      <div className="container">
        {/* ================= INTRO SECTION ================= */}

        <div className="row g-lg-4 gy-5 detailed-serive-page-top-content">
          <div className="col-lg-9">
            <div className="service-details-content-wrap">
              <span className="service-section-tag">Software Development</span>

              <h2>
                Software Solutions Built to
                <br />
                <span>Support Your Business Growth </span>
              </h2>

              <p>
                Software plays an important role in helping businesses manage
                operations, improve efficiency, and create better digital
                experiences. At Dizinetech, we build software solutions around
                real business requirements, including custom software, SaaS
                platforms, and business management systems. Whether you need a
                completely new platform or a solution to improve an existing
                process, we focus on understanding how your business works
                before deciding how the software should be built.
              </p>

              <p>
                Every business has different workflows, challenges, and goals.
                That is why we do not believe in one-size-fits-all software.
                Custom software can help solve specific operational challenges,
                while SaaS platforms can turn an idea into a scalable digital
                product. Business management systems can help bring important
                processes, data, and workflows into one organised platform,
                making everyday operations easier to manage.
              </p>

              <p>
                Our approach combines thoughtful planning, clean user
                experiences, and reliable development to create software that is
                practical and built for long-term use. We focus on usability,
                performance, scalability, and maintainability throughout the
                development process. From the initial idea and planning stage to
                development and ongoing improvements, we work to create software
                that supports your business today and can continue to grow as
                your needs evolve.
              </p>
            </div>
          </div>
        </div>

       
        {/* ================= SUB SERVICES ================= */}

        <div className="web-sub-services">
          <div className="web-sub-services-heading">
            <span className="service-section-tag">SOFTWARE CAPABILITIES</span>

            <h2>
              Software Solutions Built for
              <br />
              <span>Growing Business Operations</span>
            </h2>

            <p>
              From custom software to scalable platforms and business management
              systems, we build practical solutions around the way your business
              operates.
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
              <span className="service-section-tag">TECHNOLOGIES WE USE</span>

              <h2>
                Built With the Right
                <br />
                <span>Technology Stack</span>
              </h2>

              <p>
                We choose modern and reliable technologies based on your
                software requirements, scalability needs, performance, and
                long-term business goals.
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
            <span className="service-section-tag">SOFTWARE DEVELOPMENT</span>

            <h2>
              Ready to Build Software That
              <br />
              <span>Works for Your Business?</span>
            </h2>

            <p>
              From custom software and SaaS platforms to business management
              systems, we build scalable solutions around your processes,
              requirements, and long-term goals.
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
              src="/assets/img/software-btm-banner.webp"
              alt="Software Development"
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default ServiceDetailsPageSectionSD;
