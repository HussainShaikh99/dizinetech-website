import React from "react";
import SelectComponent from "../common/SelectComponent";

const Home5Contact = () => {
  return (
    <>
      <div className="home4-contact-section two mb-120">
        <div className="container">
          <div className="row align-items-center g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="contact-wrapper">
                <div className="contact-left">
                  <div className="section-title four text-animation home-form-left-title">
                    <span className="sub-title">
                      LET'S BUILD SOMETHING GREAT
                    </span>
                    <h2>
                      Tell Us About<span> Your Project.</span>
                    </h2>
                  </div>

                  <p className="contact-text">
                    Whether you need a business website, ecommerce store, SEO,
                    or AI-powered solutions, we're here to help you choose the
                    right approach for your business goals.
                  </p>

                  <div className="contact-benefits">
                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Free Consultation</span>
                    </div>

                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Transparent Pricing</span>
                    </div>

                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Response Within 24 Hours</span>
                    </div>

                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Worldwide Service</span>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-wrap">
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-35">
                      <div className="form-inner">
                        <label>Full Name *</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Email *</label>
                        <input type="email" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Phone *</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Company *</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Website </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-35">
                      <div className="form-inner">
                        <label>Interested In</label>
                        <SelectComponent
                          options={[
                            "Business Website",
                            "Ecommerce Website",
                            "Landing Page",
                            "WordPress Website",
                            "Shopify Store",
                            "Custom Web App",
                            "SEO",
                            "AI Solutions",
                            "Website Maintenance",
                            "Other",
                          ]}
                          placeholder="Select a Service"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <label>Message </label>
                        <textarea defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="form-inner2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="contactCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="contactCheck"
                      >
                        I have read &amp; accepted Terms &amp; Conditions.
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="primary-btn2"
                    data-text="Submit Now"
                  >
                    <span>Submit Now</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5Contact;
