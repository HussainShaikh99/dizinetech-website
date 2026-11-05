import React from "react";

const processData = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We learn your goals, audience, and business needs before planning the right solution.",
    image: "assets/img/home-1.webp",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We create a clear roadmap covering design, development, SEO, and project milestones.",
    image: "assets/img/home-2.webp",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We build fast, secure, and scalable websites with modern technologies and best practices.",
    image: "assets/img/home-1.webp",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "After launch, we provide optimization, maintenance, and ongoing support for long-term success.",
    image: "assets/img/home-3.webp",
  },
];

const Home5WhyChooseus = () => {
  return (
    <div className="our-process-section mb-120">
      <div className="container">

        {/* Section Heading */}
        <div className="section-title four text-center text-animation">
          <span className="sub-title">OUR PROCESS</span>

          <h2>
            How We Transform <span>Ideas Into Digital Success</span>
          </h2>

          <p className="process-description">
            Our proven process combines strategy, creativity, and technology to
            deliver high-performing digital solutions that help your business
            grow with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 mt-30">
          {processData.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="process-card">

                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="process-bg"
                />

                {/* Dark Overlay */}
                <div className="process-overlay"></div>

                {/* Content */}
                <div className="process-content">

                  <span className="process-number">
                    {item.number}
                  </span>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  {/* <a href="#" className="process-link">
                    Learn More
                    <i className="bi bi-arrow-up-right"></i>
                  </a> */}

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home5WhyChooseus;