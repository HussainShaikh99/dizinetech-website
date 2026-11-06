"use client";

import React, { useRef, useState } from "react";
import SelectComponent from "../common/SelectComponent";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "965a2973-f1d4-4705-8e73-0aa02c4ee40d";
const TIMEOUT_MS = 10000;
const COOLDOWN_MS = 30000;

const Home5Contact = () => {
  const formRef = useRef(null);
  const lastSentAt = useRef(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (loading) return;

    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);

    // Honeypot
    if (fd.get("botcheck")) {
      form.reset();
      setStatus({ type: "success", message: "Thank you! We'll be in touch." });
      return;
    }

    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      setStatus({
        type: "error",
        message: "Please wait a moment and try again.",
      });
      return;
    }

    // Read the selected service from the nice-select dropdown
    const selectedText =
      form.querySelector(".nice-select .current")?.textContent?.trim() || "";
    const service =
      !selectedText || selectedText === "Select a Service"
        ? "Not selected"
        : selectedText;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: "Dizine Tech Website",
          subject: "New project enquiry from website",
          name: String(fd.get("name") || "").trim(),
          email: String(fd.get("email") || "")
            .trim()
            .toLowerCase(),
          phone: String(fd.get("phone") || "").trim(),
          company: String(fd.get("company") || "").trim(),
          website: String(fd.get("website") || "").trim(),
          interested_in: service,
          message: String(fd.get("message") || "").trim(),
          source_page: window.location.pathname,
        }),
        signal: controller.signal,
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        lastSentAt.current = Date.now();
        form.reset();
        setStatus({
          type: "success",
          message: "Thank you! We'll get back to you within 24 hours.",
        });
      } else if (res.status === 429) {
        setStatus({
          type: "error",
          message: "Too many requests. Please try again later.",
        });
      } else {
        console.error("Web3Forms error:", res.status, data);
        setStatus({
          type: "error",
          message: data?.message || "Could not send. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.name === "AbortError"
            ? "Request timed out. Please try again."
            : "Network error. Please try again.",
      });
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  };

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
                <form
                  ref={formRef}
                  action={ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="access_key" value={ACCESS_KEY} />
                  <input
                    type="hidden"
                    name="subject"
                    value="New project enquiry from website"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="Dizine Tech Website"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: "none" }}
                  />
                  <div className="row">
                    <div className="col-md-12 mb-35">
                      <div className="form-inner">
                        <label>Full Name *</label>
                        <input type="text" name="name" required />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Email *</label>
                        <input type="email" name="email" required />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Phone *</label>
                        <input type="text" name="phone" required />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Company *</label>
                        <input type="text" name="company" required />
                      </div>
                    </div>
                    <div className="col-md-6 mb-35">
                      <div className="form-inner">
                        <label>Website </label>
                        <input type="text" name="website" />
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
                        <textarea name="message" defaultValue={""} />
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
                        required
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
                    disabled={loading}
                  >
                    <span>{loading ? "Sending..." : "Submit Now"}</span>
                  </button>
                  <p
                    role="status"
                    aria-live="polite"
                    className={`small mt-3 mb-0 ${
                      status.type === "success" ? "text-success" : "text-danger"
                    }`}
                  >
                    {status.message}
                  </p>
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

// import React from "react";
// import SelectComponent from "../common/SelectComponent";

// const Home5Contact = () => {
//   return (
//     <>
//       <div className="home4-contact-section two mb-120">
//         <div className="container">
//           <div className="row align-items-center g-lg-4 gy-5">
//             <div className="col-lg-5">
//               <div className="contact-wrapper">
//                 <div className="contact-left">
//                   <div className="section-title four text-animation home-form-left-title">
//                     <span className="sub-title">
//                       LET'S BUILD SOMETHING GREAT
//                     </span>
//                     <h2>
//                       Tell Us About<span> Your Project.</span>
//                     </h2>
//                   </div>

//                   <p className="contact-text">
//                     Whether you need a business website, ecommerce store, SEO,
//                     or AI-powered solutions, we're here to help you choose the
//                     right approach for your business goals.
//                   </p>

//                   <div className="contact-benefits">
//                     <div className="benefit-item">
//                       <i className="bi bi-check-circle-fill"></i>
//                       <span>Free Consultation</span>
//                     </div>

//                     <div className="benefit-item">
//                       <i className="bi bi-check-circle-fill"></i>
//                       <span>Transparent Pricing</span>
//                     </div>

//                     <div className="benefit-item">
//                       <i className="bi bi-check-circle-fill"></i>
//                       <span>Response Within 24 Hours</span>
//                     </div>

//                     <div className="benefit-item">
//                       <i className="bi bi-check-circle-fill"></i>
//                       <span>Worldwide Service</span>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-7">
//               <div className="contact-form-wrap">
//                 <form>
//                   <div className="row">
//                     <div className="col-md-12 mb-35">
//                       <div className="form-inner">
//                         <label>Full Name *</label>
//                         <input type="text" />
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-35">
//                       <div className="form-inner">
//                         <label>Email *</label>
//                         <input type="email" />
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-35">
//                       <div className="form-inner">
//                         <label>Phone *</label>
//                         <input type="text" />
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-35">
//                       <div className="form-inner">
//                         <label>Company *</label>
//                         <input type="text" />
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-35">
//                       <div className="form-inner">
//                         <label>Website </label>
//                         <input type="text" />
//                       </div>
//                     </div>
//                     <div className="col-md-12 mb-35">
//                       <div className="form-inner">
//                         <label>Interested In</label>
//                         <SelectComponent
//                           options={[
//                             "Business Website",
//                             "Ecommerce Website",
//                             "Landing Page",
//                             "WordPress Website",
//                             "Shopify Store",
//                             "Custom Web App",
//                             "SEO",
//                             "AI Solutions",
//                             "Website Maintenance",
//                             "Other",
//                           ]}
//                           placeholder="Select a Service"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="form-inner">
//                         <label>Message </label>
//                         <textarea defaultValue={""} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-inner2">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         defaultValue
//                         id="contactCheck"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="contactCheck"
//                       >
//                         I have read &amp; accepted Terms &amp; Conditions.
//                       </label>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="primary-btn2"
//                     data-text="Submit Now"
//                   >
//                     <span>Submit Now</span>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home5Contact;
