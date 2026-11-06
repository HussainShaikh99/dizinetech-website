"use client";

import Header1 from "@/components/header/Header1";
import Breadcrum from "@/components/common/Breadcrum";
import Home5Footer from "@/components/Footer/Home5Footer";
import SelectComponent from "../../components/common/SelectComponent";
import React, { useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Link from "next/link";

const WEB3FORMS_KEY = "55a497db-ca46-480f-8c21-727acb2b9578";

const CarrerList = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const settings = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".career-pagination",
        clickable: "true",
      },
    };
  }, []);

  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Reads the selected text from the custom select inside a wrapper
  const getSelectValue = (key, placeholder) => {
    const wrapper = formRef.current?.querySelector(`[data-select="${key}"]`);
    if (!wrapper) return "";
    const el =
      wrapper.querySelector(".current") ||
      wrapper.querySelector(".nice-select span") ||
      wrapper.querySelector("select");
    const value = (el?.value ?? el?.textContent ?? "").trim();
    return value && value !== placeholder ? value : "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = formRef.current;
    const position = getSelectValue("position", "Select Position");
    const experience = getSelectValue("experience", "Select Experience");
    const resume = form.elements["resume"]?.files?.[0];

    if (!position || !experience) {
      setStatus({
        type: "error",
        message: "Please select position and experience.",
      });
      return;
    }
    if (!resume) {
      setStatus({ type: "error", message: "Please upload your resume." });
      return;
    }
    if (!form.elements["confirm"].checked) {
      setStatus({
        type: "error",
        message: "Please confirm that the information is accurate.",
      });
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `New Job Application - ${position}`);
    formData.append("from_name", "Dizinetech Career Form");
    formData.append("position", position);
    formData.append("experience", experience);

    try {
      setLoading(true);
      setStatus({ type: "", message: "" });

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your application has been submitted.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header1 style={"inner-page"} fluid="container" />
      <Breadcrum
        pageTitle="Career"
        pagename="Join Our Team"
        bannerImage="/assets/img/banner/career-banner.webp"
      />
      <div className="career-page pt-150 mb-10" id="scroll-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-lg-4 gy-5 mb-40">
                <div className="col-lg-7">
                  <div className="section-title text-animation">
                    <h2>
                      Build Your Career With a Team That Builds for Growth.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="position-apply-area">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={42}
                        height={42}
                        viewBox="0 0 42 42"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M35.6529 3.71829L0 39.3693L2.63069 42L38.2817 6.34713V30.9976H42V0H11.0024V3.71829H35.6529Z"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <p>
                        Work on real digital projects, explore modern
                        technologies, and grow your skills while helping
                        businesses build better online experiences.
                      </p>
                      <Link href="/career-details">
                        Apply Position
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="job-post-section">
        <div className="container">
          <div className="row align-items-center g-lg-4 gy-5">
            <div className="col-lg-7 form-careers">
              <div className="contact-form-wrap">
                <div className=" mb-60">
                  <div className="section-title text-animation">
                    <h2>
                      Join<span> Our Team </span>
                    </h2>
                    <p>
                      We may not have an opening right now, but you can still
                      submit your resume. We’ll get in touch when a suitable
                      opportunity comes up.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <form ref={formRef} onSubmit={handleSubmit}>
                      {/* Honeypot spam protection */}
                      <input
                        type="checkbox"
                        name="botcheck"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="row">
                        {/* Full Name */}
                        <div className="col-md-12 mb-35">
                          <div className="form-inner">
                            <label>Full Name *</label>
                            <input type="text" name="name" required />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-6 mb-35">
                          <div className="form-inner">
                            <label>Email *</label>
                            <input type="email" name="email" required />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="col-md-6 mb-35">
                          <div className="form-inner">
                            <label>Phone *</label>
                            <input type="text" name="phone" required />
                          </div>
                        </div>

                        {/* Position */}
                        <div className="col-md-6 mb-35">
                          <div className="form-inner" data-select="position">
                            <label>Position Applying For *</label>
                            <SelectComponent
                              options={[
                                "Frontend Developer",
                                "Backend Developer",
                                "Full Stack Developer",
                                "SEO Specialist",
                                "AI / Automation Specialist",
                                "UI/UX Designer",
                                "Sale Executive",
                                "Business Development",
                                "Other",
                              ]}
                              placeholder={"Select Position"}
                            />
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="col-md-6 mb-35">
                          <div className="form-inner" data-select="experience">
                            <label>Experience *</label>
                            <SelectComponent
                              options={[
                                "Fresher",
                                "Less than 1 Year",
                                "1–2 Years",
                                "2–4 Years",
                                "4+ Years",
                              ]}
                              placeholder={"Select Experience"}
                            />
                          </div>
                        </div>

                        {/* Portfolio / LinkedIn */}
                        <div className="col-md-12 mb-35">
                          <div className="form-inner">
                            <label>Portfolio / LinkedIn Profile</label>
                            <input type="text" name="portfolio" />
                          </div>
                        </div>

                        {/* Resume */}
                        <div className="col-md-12 mb-35">
                          <div className="form-inner">
                            <label>Upload Resume *</label>
                            <input
                              type="file"
                              name="resume"
                              accept=".pdf,.doc,.docx"
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="col-lg-12">
                          <div className="form-inner">
                            <label>Tell Us About Yourself *</label>
                            <textarea
                              name="message"
                              required
                              placeholder="Tell us about your skills, experience, and why you'd like to join Dizinetech."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Terms */}
                      <div className="form-inner2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="confirm"
                            id="careerCheck"
                          />

                          <label
                            className="form-check-label"
                            htmlFor="careerCheck"
                          >
                            I confirm that the information provided is accurate.
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="primary-btn2"
                        data-text="Apply Now"
                        disabled={loading}
                      >
                        <span>{loading ? "Submitting..." : "Apply Now"}</span>
                      </button>

                      {status.message && (
                        <p
                          style={{
                            marginTop: "15px",
                            color: status.type === "success" ? "green" : "red",
                          }}
                        >
                          {status.message}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home5Footer />
    </>
  );
};

export default CarrerList;

// "use client";

// import Header1 from "@/components/header/Header1";
// import Breadcrum from "@/components/common/Breadcrum";
// import Home5Footer from "@/components/Footer/Home5Footer";
// import SelectComponent from "../../components/common/SelectComponent";
// import React, { useMemo } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Autoplay,
//   EffectFade,
//   Navigation,
//   Pagination,
// } from "swiper";
// SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
// import { useInView } from "react-intersection-observer";
// import CountUp from "react-countup";
// import Link from "next/link";
// const CarrerList = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//     triggerOnce: true,
//   });
//   const settings = useMemo(() => {
//     return {
//       speed: 1500,
//       spaceBetween: 30,
//       autoplay: {
//         delay: 2500, // Autoplay duration in milliseconds
//         disableOnInteraction: false,
//       },
//       effect: "fade", // Use the fade effect
//       fadeEffect: {
//         crossFade: true, // Enable cross-fade transition
//       },
//       pagination: {
//         el: ".career-pagination",
//         clickable: "true",
//       },
//     };
//   }, []);
//   return (
//     <>
//       <Header1 style={"inner-page"} fluid="container" />
//       <Breadcrum
//         pageTitle="Career"
//         pagename="Join Our Team"
//         bannerImage="/assets/img/banner/career-banner.webp"
//       />
//       <div className="career-page pt-150 mb-10" id="scroll-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="row g-lg-4 gy-5 mb-40">
//                 <div className="col-lg-7">
//                   <div className="section-title text-animation">
//                     <h2>
//                       Build Your Career With a Team That Builds for Growth.
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="col-lg-5">
//                   <div className="position-apply-area">
//                     <div className="icon">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={42}
//                         height={42}
//                         viewBox="0 0 42 42"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M35.6529 3.71829L0 39.3693L2.63069 42L38.2817 6.34713V30.9976H42V0H11.0024V3.71829H35.6529Z"
//                         />
//                       </svg>
//                     </div>
//                     <div className="content">
//                       <p>
//                         Work on real digital projects, explore modern
//                         technologies, and grow your skills while helping
//                         businesses build better online experiences.
//                       </p>
//                       <Link href="/career-details">
//                         Apply Position
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={12}
//                           height={12}
//                           viewBox="0 0 12 12"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="job-post-section">
//         <div className="container">
//           <div className="row align-items-center g-lg-4 gy-5">
//             <div className="col-lg-7 form-careers">
//               <div className="contact-form-wrap">
//                 <div className=" mb-60">
//                   <div className="section-title text-animation">
//                     <h2>
//                       Join<span> Our Team </span>
//                     </h2>
//                     <p>
//                       We may not have an opening right now, but you can still
//                       submit your resume. We’ll get in touch when a suitable
//                       opportunity comes up.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="">
//                   <div className="">
//                     <form>
//                       <div className="row">
//                         {/* Full Name */}
//                         <div className="col-md-12 mb-35">
//                           <div className="form-inner">
//                             <label>Full Name *</label>
//                             <input type="text" />
//                           </div>
//                         </div>

//                         {/* Email */}
//                         <div className="col-md-6 mb-35">
//                           <div className="form-inner">
//                             <label>Email *</label>
//                             <input type="email" />
//                           </div>
//                         </div>

//                         {/* Phone */}
//                         <div className="col-md-6 mb-35">
//                           <div className="form-inner">
//                             <label>Phone *</label>
//                             <input type="text" />
//                           </div>
//                         </div>

//                         {/* Position */}
//                         <div className="col-md-6 mb-35">
//                           <div className="form-inner">
//                             <label>Position Applying For *</label>
//                             <SelectComponent
//                               options={[
//                                 "Frontend Developer",
//                                 "Backend Developer",
//                                 "Full Stack Developer",
//                                 "SEO Specialist",
//                                 "AI / Automation Specialist",
//                                 "UI/UX Designer",
//                                 "Sale Executive",
//                                 "Business Development",
//                                 "Other",
//                               ]}
//                               placeholder={"Select Position"}
//                             />
//                           </div>
//                         </div>

//                         {/* Experience */}
//                         <div className="col-md-6 mb-35">
//                           <div className="form-inner">
//                             <label>Experience *</label>
//                             <SelectComponent
//                               options={[
//                                 "Fresher",
//                                 "Less than 1 Year",
//                                 "1–2 Years",
//                                 "2–4 Years",
//                                 "4+ Years",
//                               ]}
//                               placeholder={"Select Experience"}
//                             />
//                           </div>
//                         </div>

//                         {/* Portfolio / LinkedIn */}
//                         <div className="col-md-12 mb-35">
//                           <div className="form-inner">
//                             <label>Portfolio / LinkedIn Profile</label>
//                             <input type="text" />
//                           </div>
//                         </div>

//                         {/* Resume */}
//                         <div className="col-md-12 mb-35">
//                           <div className="form-inner">
//                             <label>Upload Resume *</label>
//                             <input type="file" />
//                           </div>
//                         </div>

//                         {/* Message */}
//                         <div className="col-lg-12">
//                           <div className="form-inner">
//                             <label>Tell Us About Yourself *</label>
//                             <textarea
//                               placeholder="Tell us about your skills, experience, and why you'd like to join Dizinetech."
//                               defaultValue={""}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       {/* Terms */}
//                       <div className="form-inner2">
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             defaultValue
//                             id="careerCheck"
//                           />

//                           <label
//                             className="form-check-label"
//                             htmlFor="careerCheck"
//                           >
//                             I confirm that the information provided is accurate.
//                           </label>
//                         </div>
//                       </div>

//                       <button
//                         type="submit"
//                         className="primary-btn2"
//                         data-text="Apply Now"
//                       >
//                         <span>Apply Now</span>
//                       </button>
//                     </form>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Home5Footer />
//     </>
//   );
// };

// export default CarrerList;
