import React from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "bi bi-robot",
    title: "AI Agents",
    description:
      "Custom AI agents designed to perform tasks, process information, assist users, and support your business operations more efficiently.",
    link: "/contact",
  },
  {
    number: "02",
    icon: "bi bi-chat-dots",
    title: "AI Chatbots",
    description:
      "Intelligent AI chatbots designed to answer questions, improve customer communication, provide support, and create faster digital interactions.",
    link: "/contact",
  },
  {
    number: "03",
    icon: "bi bi-arrow-repeat",
    title: "Workflow Automation",
    description:
      "Automate repetitive workflows and everyday tasks to reduce manual effort, improve efficiency, and help your team focus on higher-value work.",
    link: "/contact",
  },
  {
    number: "04",
    icon: "bi bi-diagram-3",
    title: "AI Integrations",
    description:
      "Integrate AI capabilities with your existing websites, applications, and business tools to create smarter and more connected digital experiences.",
    link: "/contact",
  },
  {
    number: "05",
    icon: "bi bi-gear-wide-connected",
    title: "Business Process Automation",
    description:
      "Streamline business processes by connecting systems, automating repetitive operations, and creating more efficient workflows across your organisation.",
    link: "/contact",
  },
  {
    number: "06",
    icon: "bi bi-cpu",
    title: "AI-Powered Applications",
    description:
      "Build intelligent AI features into websites and applications to create smarter user experiences and more capable digital products.",
    link: "/contact",
  },
];

const technologies = [
  {
    icon: "bi bi-cpu",
    title: "OpenAI",
  },
  {
    icon: "bi bi-stars",
    title: "Claude",
  },
  {
    icon: "bi bi-google",
    title: "Google Gemini",
  },
  {
    icon: "bi bi-diagram-3",
    title: "LangChain",
  },
  {
    icon: "bi bi-bezier2",
    title: "n8n",
  },
  {
    icon: "bi bi-arrow-repeat",
    title: "Make",
  },
  {
    icon: "bi bi-code-slash",
    title: "Python",
  },
  {
    icon: "bi bi-plug",
    title: "API Integrations",
  },
];

const ServiceDetailsPageSectionAI = () => {
  return (
    <div className="service-details-page pt-150 mb-120" id="scroll-section">
      <div className="container">
        {/* ================= INTRO SECTION ================= */}

        <div className="row g-lg-4 gy-5 detailed-serive-page-top-content">
          <div className="col-lg-9">
            <div className="service-details-content-wrap">
              <span className="service-section-tag">AI SOLUTIONS</span>

              <h2>
                AI Solutions Built to <br />
                <span>Support Your Business Growth</span>
              </h2>

              <p>
                Artificial intelligence is creating practical opportunities for
                businesses to automate repetitive work, improve customer
                interactions, and streamline everyday operations. At Dizinetech,
                we build AI solutions designed around real business
                requirements, including AI agents, AI chatbots, workflow
                automation, AI integrations, and business process automation.
                Whether you want to improve how your team works, provide faster
                customer support, or automate time-consuming tasks, we focus on
                finding AI solutions that deliver practical value.
              </p>

              <p>
                Every business operates differently, which is why we do not
                believe in applying the same AI solution to every challenge. AI
                agents can assist with tasks and decision-making, while AI
                chatbots can improve customer communication and provide faster
                responses. Workflow automation can reduce repetitive manual
                work, and business process automation can help streamline larger
                operational processes. We take time to understand your existing
                workflows and identify where AI can make a meaningful
                difference.
              </p>

              <p>
                Every business operates differently, which is why we do not
                believe in applying the same AI solution to every challenge. AI
                agents can assist with tasks and decision-making, while AI
                chatbots can improve customer communication and provide faster
                responses. Workflow automation can reduce repetitive manual
                work, and business process automation can help streamline larger
                operational processes. We take time to understand your existing
                workflows and identify where AI can make a meaningful
                difference.
              </p>
            </div>
          </div>
        </div>

       

        {/* ================= SUB SERVICES ================= */}

        <div className="web-sub-services">
          <div className="web-sub-services-heading">
            <span className="service-section-tag">AI CAPABILITIES</span>

            <h2>
              AI Solutions Built for
              <br />
              <span>Smarter Business Operations</span>
            </h2>

            <p>
              From intelligent AI agents to automated business workflows, we
              build practical AI solutions around the way your business works.
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
              <span className="service-section-tag">AI TECHNOLOGY STACK</span>

              <h2>
                Powered by the Right
                <br />
                <span>AI Technology Stack</span>
              </h2>

              <p>
                We combine AI models, automation platforms, APIs, and
                development technologies to build solutions that fit your
                workflows and business needs.
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
            <span className="service-section-tag">AI SOLUTIONS</span>

            <h2>
              Ready to Make Your Business
              <br />
              <span>Smarter With AI?</span>
            </h2>

            <p>
              From AI agents and chatbots to workflow automation and intelligent
              applications, we build practical AI solutions around your business
              needs and goals.
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
              src="/assets/img/ai-solution-btm-banner.webp"
              alt="Mobile App Development"
            />
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default ServiceDetailsPageSectionAI;
