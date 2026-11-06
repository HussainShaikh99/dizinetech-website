"use client";

import { useRef, useState } from "react";
import SelectComponent from "@/components/common/SelectComponent";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "6decaf0b-ea2e-4625-b1be-31b62dec09a6";
const TIMEOUT_MS = 10_000;
const COOLDOWN_MS = 30_000;

const INTEREST_OPTIONS = [
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
];

export default function ContactPage() {
  const formRef = useRef(null);
  const lastSentAt = useRef(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [interest, setInterest] = useState("");
  const [selectKey, setSelectKey] = useState(0); // remount to reset the select after success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);

    // Honeypot tripped: fake success, send nothing.
    if (fd.get("botcheck")) {
      form.reset();
      setStatus({
        type: "success",
        message: "Thanks! We'll be in touch shortly.",
      });
      return;
    }

    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      setStatus({
        type: "error",
        message: "Please wait a moment before sending another message.",
      });
      return;
    }

    const payload = {
      access_key: ACCESS_KEY,
      from_name: "Dizine Tech Website",
      subject: `New enquiry${interest ? ` – ${interest}` : ""}`,
      name: fd.get("name")?.toString().trim(),
      email: fd.get("email")?.toString().trim(),
      phone: fd.get("phone")?.toString().trim(),
      company: fd.get("company")?.toString().trim(),
      website: fd.get("website")?.toString().trim(),
      interested_in: interest || "Not specified",
      message: fd.get("message")?.toString().trim(),
    };

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
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        lastSentAt.current = Date.now();
        form.reset();
        setInterest("");
        setSelectKey((k) => k + 1);
        setStatus({
          type: "success",
          message: "Thanks! We'll be in touch shortly.",
        });
      } else if (res.status === 429) {
        setStatus({
          type: "error",
          message: "Too many requests. Please try again later.",
        });
      } else {
        setStatus({
          type: "error",
          message:
            "Could not send your message. Please try again or email info@dizinetech.com.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.name === "AbortError"
            ? "Request timed out. Please try again."
            : "Network error. Please check your connection and retry.",
      });
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} aria-busy={loading}>
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <div className="row">
        <div className="col-md-12 mb-35">
          <div className="form-inner">
            <label htmlFor="cf-name">Full Name *</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
            />
          </div>
        </div>
        <div className="col-md-6 mb-35">
          <div className="form-inner">
            <label htmlFor="cf-email">Email *</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </div>
        </div>
        <div className="col-md-6 mb-35">
          <div className="form-inner">
            <label htmlFor="cf-phone">Phone *</label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              pattern="[0-9+()\-\s]{7,20}"
              title="Enter a valid phone number"
              maxLength={20}
            />
          </div>
        </div>
        <div className="col-md-6 mb-35">
          <div className="form-inner">
            <label htmlFor="cf-company">Company *</label>
            <input
              id="cf-company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              maxLength={150}
            />
          </div>
        </div>
        <div className="col-md-6 mb-35">
          <div className="form-inner">
            <label htmlFor="cf-website">Website *</label>
            <input
              id="cf-website"
              name="website"
              type="text"
              autoComplete="url"
              required
              maxLength={200}
            />
          </div>
        </div>
        <div className="col-md-12 mb-35">
          <div className="form-inner">
            <label>Interested In</label>
            <SelectComponent
              key={selectKey}
              options={INTEREST_OPTIONS}
              placeholder="Select Interested In"
              onChange={setInterest}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-inner">
            <label htmlFor="cf-message">Message *</label>
            <textarea
              id="cf-message"
              name="message"
              required
              minLength={10}
              maxLength={2000}
            />
          </div>
        </div>
      </div>

      <div className="form-inner2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="contactCheck"
            required
          />
          <label className="form-check-label" htmlFor="contactCheck">
            I have read &amp; accepted Terms &amp; Conditions.
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="primary-btn2"
        data-text={loading ? "Sending..." : "Submit Now"}
        disabled={loading}
      >
        <span>{loading ? "Sending..." : "Submit Now"}</span>
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 mb-0 ${status.type === "success" ? "text-success" : "text-danger"}`}
      >
        {status.message}
      </p>
    </form>
  );
}
