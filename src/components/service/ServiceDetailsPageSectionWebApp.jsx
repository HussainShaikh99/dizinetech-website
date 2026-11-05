import React from "react";
import Link from "next/link";

const services = [
  {
    icon: "bi bi-display",
    title: "Business Websites",
    description:
      "Professional, high-performing websites designed to strengthen your online presence, build trust, and turn visitors into potential customers.",
  },
  {
    icon: "bi bi-cart",
    title: "Ecommerce Websites",
    description:
      "Secure, user-friendly online stores built to showcase products, simplify purchasing, and create a smooth shopping experience.",
  },
  {
    icon: "bi bi-window",
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages designed for campaigns, products, and services, helping turn targeted visitors into valuable leads.",
  },
  {
    icon: "bi bi-grid",
    title: "Custom Web Applications",
    description:
      "Scalable custom web applications built around your business processes, user requirements, and specific operational needs.",
  },
  {
    icon: "bi bi-tools",
    title: "Website Maintenance",
    description:
      "Ongoing website support, updates, security checks, performance improvements, and maintenance to keep your website running smoothly.",
  },
  {
    icon: "bi bi-phone",
    title: "Mobile App Development",
    description:
      "Custom mobile applications designed to deliver smooth and reliable experiences while supporting your business goals and growing user needs.",
  },
];

const technologies = [
  {
    icon: "bi bi-wordpress",
    title: "WordPress",
  },
  {
    icon: "bi bi-shop",
    title: "Shopify",
  },
  {
    icon: "bi bi-code-slash",
    title: "React",
  },
  {
    icon: "bi bi-lightning",
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
  {
    icon: "bi bi-phone",
    title: "React Native",
  },
];

const ServiceDetailsPageSectionWebApp = () => {
  return (
    <div className="service-details-page pt-150 mb-120" id="scroll-section">
      <div className="container">
        {/* ================= INTRO SECTION ================= */}

        <div className="row g-lg-4 gy-5 detailed-serive-page-top-content">
          <div className="col-lg-9">
            <div className="service-details-content-wrap">
              <span className="service-section-tag">WEB & APP DEVELOPMENT</span>

              <h2>
                Websites, Apps and Technology <br />
                <span>Built to Support Your Growth.</span>
              </h2>

              <p>
                We design and develop digital solutions that help businesses
                build a stronger online presence, connect with their audience,
                and support long-term growth. Our web and app development
                services cover business websites, ecommerce websites, landing
                pages, custom web applications, mobile app development, and
                ongoing website maintenance. Whether you are launching a new
                business, improving an existing digital presence, or building a
                completely new platform, we focus on understanding what your
                business needs before deciding how the solution should be built.
              </p>

              <p>
                Every project is approached with your specific goals, users, and
                requirements in mind. A business website may need to build trust
                and generate enquiries, while an ecommerce website needs to
                create a smooth and secure shopping experience. A landing page
                may focus on generating conversions, while a custom web
                application or mobile app may need to support more complex
                workflows and user interactions. We build each solution around
                its purpose, with a focus on usability, performance,
                responsiveness, and the ability to grow as your business
                evolves.
              </p>

              <p>
                Our development approach combines thoughtful design with modern
                and reliable technologies. Depending on the requirements of your
                project, we work with platforms and technologies including
                WordPress, Shopify, React, Next.js, Node.js, MongoDB, MERN
                Stack, and React Native. From flexible content-driven websites
                and scalable ecommerce stores to custom applications and mobile
                experiences, we choose the right technology for the job. We also
                provide ongoing website maintenance to help keep your digital
                platforms updated, secure, and running smoothly after launch.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SUB SERVICES ================= */}

        <div className="web-sub-services">
          <div className="web-sub-services-heading">
            <span className="service-section-tag">WHAT WE BUILD</span>

            <h2>
              Web & App Solutions for Every <br />
              <span>Business Need.</span>
            </h2>

            <p>
              From professional business websites to custom applications, we
              build digital solutions around your business goals and
              requirements.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={service.number}>
                <div className="web-sub-service-card">
                  <div className="web-service-icon">
                    <i className={service.icon}></i>
                  </div>

                  <span className="service-number">{service.number}</span>

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
                Built With the Right <br />
                <span>Technology Stack</span>
              </h2>

              <p>
                We choose technologies based on your project requirements,
                performance needs, scalability, and long-term business goals.
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

        {/* ================= Card Image SECTION ================= */}

        <div className="service-mid-image-wrapper">
          <div className="service-mid-image-content">
            <span className="service-section-tag">MOBILE APP DEVELOPMENT</span>

            <h2>
              Ready to Turn Your <br />
              <span>Web & App Idea Into Reality?</span>
            </h2>

            <p>
              From planning and design to development and launch, we build
              Websites and mobile applications designed around your users,
              business goals, and long-term growth.
            </p>

            <div className="service-mid-image-buttons">
              <Link href="/contact" className="app-primary-btn">
                Discuss Your Project
              </Link>

              <Link href="/contact" className="app-secondary-btn">
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div className="service-mid-image">
            <img
              src="/assets/img/mobile_app.png"
              alt="Mobile App Development"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPageSectionWebApp;
