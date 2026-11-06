"use client";

import React, { useRef, useState } from "react";
import SelectComponent from "./SelectComponent";

const ACCESS_KEY = "6decaf0b-ea2e-4625-b1be-31b62dec09a6";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

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
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!form.elements["terms"].checked) {
      setStatus({
        type: "error",
        message: "Please accept the Terms & Conditions.",
      });
      return;
    }

    const fd = new FormData(form);
    if (fd.get("botcheck")) return;

    const interest = getSelectValue("interest", "Select Interested In");

    try {
      setLoading(true);
      setStatus({ type: "", message: "" });

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Contact Enquiry - Dizinetech",
          from_name: "Dizinetech Contact Form",
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          company: fd.get("company"),
          website: fd.get("website"),
          interested_in: interest || "Not selected",
          message: fd.get("message"),
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: "Thank you! We'll get back to you shortly.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
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
            <label>Website *</label>
            <input type="text" name="website" required />
          </div>
        </div>
        <div className="col-md-12 mb-35">
          <div className="form-inner" data-select="interest">
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
              placeholder={"Select Interested In"}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-inner">
            <label>Message *</label>
            <textarea name="message" required defaultValue={""} />
          </div>
        </div>
      </div>
      <div className="form-inner2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="terms"
            id="contactCheck"
          />
          <label className="form-check-label" htmlFor="contactCheck">
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
        <span>{loading ? "Submitting..." : "Submit Now"}</span>
      </button>

      {status.message && (
        <p
          role="status"
          aria-live="polite"
          style={{
            marginTop: "15px",
            color: status.type === "success" ? "green" : "red",
          }}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
