
import Breadcrum from "@/components/common/Breadcrum";
import Home5Footer from "@/components/Footer/Home5Footer";
import Header1 from "@/components/header/Header1";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Dizinetech",
  description:
    "Learn how Dizinetech collects, uses, and protects your personal information when you visit our website or use our digital services.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header1 style="style-1 inner-page" />

      <Breadcrum
        pageTitle="Privacy Policy"
        pagename="Privacy Policy"
      />

      <div
        className="terms-and-conditions-page pt-150 mb-110"
        id="scroll-section"
      >
        <div className="container">
          <div className="row">
            {/* Introduction */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions">
                <h2>Welcome to Dizinetech Privacy Policy</h2>

                <p>
                  At Dizinetech, we respect your privacy and are committed to
                  protecting your personal information. This Privacy Policy
                  explains how we collect, use, store, and protect your
                  information when you visit our website, contact us, or use
                  our services.
                </p>

                <p>
                  By accessing our website or submitting your information
                  through our forms, you agree to the practices described in
                  this Privacy Policy.
                </p>

                <p>
                  <strong>Last Updated:</strong> November 2, 2026
                </p>
              </div>
            </div>

            {/* Information Collection */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>1. Information We Collect</h2>

                <p>
                  We may collect different types of information depending on
                  how you interact with our website and services.
                </p>

                <p><strong>Personal Information:</strong></p>

                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company or business name</li>
                  <li>Website URL</li>
                  <li>Project requirements and enquiry details</li>
                </ul>

                <p><strong>Technical Information:</strong></p>

                <ul>
                  <li>IP address</li>
                  <li>Browser type and device information</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Website usage and interaction data</li>
                </ul>
              </div>
            </div>

            {/* How We Collect Information */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>2. How We Collect Personal Information</h2>

                <p>We collect information through various interactions, including:</p>

                <ul>
                  <li>
                    Contact forms and project enquiry forms submitted through
                    our website.
                  </li>
                  <li>
                    Direct communication through email, phone, or other
                    communication channels.
                  </li>
                  <li>
                    Information provided when requesting a consultation or
                    quotation.
                  </li>
                  <li>
                    Cookies and analytics technologies used to understand
                    website performance and visitor behaviour.
                  </li>
                </ul>
              </div>
            </div>

            {/* Use of Information */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>3. How We Use Your Information</h2>

                <p>We use the collected information for purposes such as:</p>

                <ul>
                  <li>Responding to enquiries and consultation requests.</li>
                  <li>
                    Understanding your business requirements and preparing
                    project proposals.
                  </li>
                  <li>
                    Providing website development, e-commerce, SEO, digital
                    marketing, and AI-related services.
                  </li>
                  <li>
                    Communicating project updates, service information, and
                    relevant business updates.
                  </li>
                  <li>
                    Improving our website, services, and user experience.
                  </li>
                  <li>Analysing website traffic and visitor behaviour.</li>
                  <li>
                    Maintaining security and preventing fraudulent or
                    unauthorized activities.
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>4. Cookies and Tracking Technologies</h2>

                <p>
                  Our website may use cookies and similar tracking
                  technologies to improve functionality, understand visitor
                  behaviour, and analyse website performance.
                </p>

                <p>
                  These technologies may help us remember user preferences,
                  understand website traffic, and improve our services.
                </p>

                <p>
                  You can manage or disable cookies through your browser
                  settings. However, disabling certain cookies may affect
                  some website functionalities.
                </p>
              </div>
            </div>

            {/* Sharing Information */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>5. Sharing of Information</h2>

                <p>
                  Dizinetech does not sell or rent your personal information
                  to third parties.
                </p>

                <p>
                  We may share relevant information with trusted third-party
                  service providers when necessary to operate our website,
                  deliver our services, or support our business operations.
                </p>

                <ul>
                  <li>Website hosting and infrastructure providers.</li>
                  <li>Analytics and website performance tools.</li>
                  <li>Communication and email service providers.</li>
                  <li>Project management and business software providers.</li>
                </ul>

                <p>
                  We may also disclose information when required by
                  applicable laws, regulations, or legal processes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>6. Data Security</h2>

                <p>
                  We take reasonable technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>

                <p>
                  While we work to safeguard your information, no method of
                  online transmission or electronic storage can be guaranteed
                  to be completely secure.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>7. Data Retention</h2>

                <p>
                  We retain personal information only for as long as
                  necessary to fulfil the purposes described in this Privacy
                  Policy, provide our services, maintain business records,
                  and comply with applicable legal obligations.
                </p>

                <p>
                  When information is no longer required, we take reasonable
                  steps to delete or securely dispose of it.
                </p>
              </div>
            </div>

            {/* Third Party Links */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>8. Third-Party Links</h2>

                <p>
                  Our website may contain links to third-party websites,
                  platforms, or services. These external websites operate
                  independently and have their own privacy policies.
                </p>

                <p>
                  Dizinetech is not responsible for the privacy practices,
                  content, or security of third-party websites. We encourage
                  visitors to review their respective privacy policies
                  before sharing personal information.
                </p>
              </div>
            </div>

            {/* Privacy Rights */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>9. Your Privacy Rights</h2>

                <p>
                  Depending on applicable laws, you may have the right to:
                </p>

                <ul>
                  <li>
                    Request access to the personal information we hold about
                    you.
                  </li>
                  <li>
                    Request corrections to inaccurate or incomplete
                    information.
                  </li>
                  <li>
                    Request deletion of your personal information, where
                    legally permitted.
                  </li>
                  <li>
                    Withdraw consent for certain data processing activities.
                  </li>
                  <li>
                    Request information about how your personal data is
                    being used.
                  </li>
                </ul>

                <p>
                  To exercise these rights, you can contact us using the
                  details provided below.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>10. Children's Privacy</h2>

                <p>
                  Our website and services are intended for businesses and
                  individuals who are legally able to use our services. We
                  do not knowingly collect personal information from
                  children without appropriate consent.
                </p>

                <p>
                  If you believe a child has provided personal information
                  to us, please contact us so that we can take appropriate
                  action.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="col-lg-12 mb-50">
              <div className="terms-and-conditions two">
                <h2>11. Changes to This Privacy Policy</h2>

                <p>
                  Dizinetech reserves the right to update or modify this
                  Privacy Policy whenever necessary to reflect changes in
                  our business practices, website functionality, or
                  applicable legal requirements.
                </p>

                <p>
                  Any updates will be published on this page along with the
                  revised "Last Updated" date.
                </p>

                <p>
                  We encourage visitors to review this page periodically.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-12">
              <div className="terms-and-conditions two">
                <h2>12. Contact Us</h2>

                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or how your personal information is
                  handled, please contact us.
                </p>

                <ul>
                  <li><strong>Company:</strong> Dizinetech</li>
                  <li>
                    <strong>Location:</strong> Mumbai, Maharashtra, India
                  </li>
                  <li>
                    <strong>Email:</strong> info@moaadi.com
                  </li>
                  <li>
                    <strong>Website:</strong> dizinetech.com
                  </li>
                </ul>

                <p>
                  We will make reasonable efforts to respond to
                  privacy-related enquiries in a timely manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home5Footer />
    </>
  );
};

export default PrivacyPolicyPage;
