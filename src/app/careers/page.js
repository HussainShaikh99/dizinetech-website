"use client";

import { useRef, useState } from "react";
import SelectComponent from "@/components/common/SelectComponent";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_CAREER_KEY ??
  "55a497db-ca46-480f-8c21-727acb2b9578";

const RESUME_UPLOAD_ENABLED = true;
const MAX_FILE_MB = 5; // match your plan's limit
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

const TIMEOUT_MS = 30_000; // uploads need more headroom than JSON posts
const COOLDOWN_MS = 30_000;

const POSITIONS = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "SEO Specialist",
  "AI / Automation Specialist",
  "UI/UX Designer",
  "Sale Executive",
  "Business Development",
  "Other",
];

const EXPERIENCE = [
  "Fresher",
  "Less than 1 Year",
  "1–2 Years",
  "2–4 Years",
  "4+ Years",
];

export default function CareerForm() {
  const formRef = useRef(null);
  const lastSentAt = useRef(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [selectKey, setSelectKey] = useState(0); // remount selects to reset after success

  const fail = (message) => setStatus({ type: "error", message });

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
        message: "Thanks! Your application has been received.",
      });
      return;
    }

    if (!position || !experience) {
      fail("Please select the position and your experience.");
      return;
    }

    if (RESUME_UPLOAD_ENABLED) {
      const file = fd.get("attachment");
      const ext = file?.name?.slice(file.name.lastIndexOf(".")).toLowerCase();
      if (!file || !file.size) return fail("Please upload your resume.");
      if (!ALLOWED_EXT.includes(ext))
        return fail("Resume must be a PDF, DOC or DOCX file.");
      if (file.size > MAX_FILE_MB * 1024 * 1024)
        return fail(`Resume must be under ${MAX_FILE_MB} MB.`);
    }

    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      return fail("Please wait a moment before sending another application.");
    }

    const name = fd.get("name").toString().trim();

    // Build a clean multipart body (no terms checkbox / honeypot leakage).
    const body = new FormData();
    body.append("access_key", ACCESS_KEY);
    body.append("from_name", "Dizine Tech Careers");
    body.append("subject", `Job application – ${position} – ${name}`);
    body.append("name", name);
    body.append("email", fd.get("email").toString().trim());
    body.append("phone", fd.get("phone").toString().trim());
    body.append("position", position);
    body.append("experience", experience);
    body.append(
      "portfolio",
      fd.get("portfolio")?.toString().trim() || "Not provided",
    );
    body.append("message", fd.get("message").toString().trim());
    if (RESUME_UPLOAD_ENABLED) body.append("attachment", fd.get("attachment"));
    else body.append("resume_link", fd.get("resume_link").toString().trim());

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // No Content-Type header: the browser sets the multipart boundary.
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
        signal: controller.signal,
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        lastSentAt.current = Date.now();
        form.reset();
        setPosition("");
        setExperience("");
        setSelectKey((k) => k + 1);
        setStatus({
          type: "success",
          message: "Thanks! Your application has been received.",
        });
      } else if (res.status === 429) {
        fail("Too many requests. Please try again later.");
      } else {
        fail(
          "Could not submit your application. Please try again or email info@dizinetech.com.",
        );
      }
    } catch (err) {
      fail(
        err.name === "AbortError"
          ? "Upload timed out. Try a smaller file or retry."
          : "Network error. Please check your connection and retry.",
      );
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
            <label htmlFor="cr-name">Full Name *</label>
            <input
              id="cr-name"
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
            <label htmlFor="cr-email">Email *</label>
            <input
              id="cr-email"
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
            <label htmlFor="cr-phone">Phone *</label>
            <input
              id="cr-phone"
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
            <label>Position Applying For *</label>
            <SelectComponent
              key={`pos-${selectKey}`}
              options={POSITIONS}
              placeholder="Select Position"
              onChange={setPosition}
            />
          </div>
        </div>

        <div className="col-md-6 mb-35">
          <div className="form-inner">
            <label>Experience *</label>
            <SelectComponent
              key={`exp-${selectKey}`}
              options={EXPERIENCE}
              placeholder="Select Experience"
              onChange={setExperience}
            />
          </div>
        </div>

        <div className="col-md-12 mb-35">
          <div className="form-inner">
            <label htmlFor="cr-portfolio">Portfolio / LinkedIn Profile</label>
            <input
              id="cr-portfolio"
              name="portfolio"
              type="text"
              autoComplete="url"
              maxLength={200}
            />
          </div>
        </div>

        <div className="col-md-12 mb-35">
          <div className="form-inner">
            {RESUME_UPLOAD_ENABLED ? (
              <>
                <label htmlFor="cr-resume">
                  Upload Resume * (PDF, DOC, DOCX – max {MAX_FILE_MB} MB)
                </label>
                <input
                  id="cr-resume"
                  name="attachment"
                  type="file"
                  accept={ALLOWED_EXT.join(",")}
                  required
                />
              </>
            ) : (
              <>
                <label htmlFor="cr-resume">
                  Resume Link * (Google Drive / Dropbox, public view)
                </label>
                <input
                  id="cr-resume"
                  name="resume_link"
                  type="url"
                  required
                  maxLength={300}
                />
              </>
            )}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-inner">
            <label htmlFor="cr-message">Tell Us About Yourself *</label>
            <textarea
              id="cr-message"
              name="message"
              required
              minLength={20}
              maxLength={3000}
              placeholder="Tell us about your skills, experience, and why you'd like to join Dizinetech."
            />
          </div>
        </div>
      </div>

      <div className="form-inner2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="careerCheck"
            required
          />
          <label className="form-check-label" htmlFor="careerCheck">
            I confirm that the information provided is accurate.
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="primary-btn2"
        data-text={loading ? "Submitting..." : "Apply Now"}
        disabled={loading}
      >
        <span>{loading ? "Submitting..." : "Apply Now"}</span>
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
