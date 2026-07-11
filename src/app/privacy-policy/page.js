import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Header1 from '@/components/header/Header1'
import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <>
            <Header1 style='style-1 inner-page' />
            <Breadcrum pageTitle="Privacy Policy" pagename="Privacy Policy" />
            <div className="terms-and-conditions-page pt-150 mb-110" id="scroll-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-50">
                            <div className="terms-and-conditions">
                                <h2>Welcome to Nexaq Privacy Policy</h2>
                                <ul>
                                    <li><strong>1) Fees and Payment: </strong> Clearly state your pricing structure,
                                        payment terms, and any additional charges. Specify when and how invoices will be
                                        issued, as well as your accepted payment methods.</li>
                                    <li><strong>2) Termination and Cancellation:</strong> Outline the process for
                                        terminating the consulting agreement and any associated fees or penalties.
                                        Include a notice period required for termination.</li>
                                    <li><strong>3) Liability and Indemnification:</strong> Describe your liability
                                        limits and the circumstances under which you will be held accountable for
                                        damages or losses. Include clauses regarding indemnification, which can protect
                                        you from client claims.</li>
                                    <li><strong>4) Governing Law and Jurisdiction:</strong> Define the governing law
                                        that will apply to the contract and the jurisdiction where any disputes will be
                                        resolved. This can simplify legal matters if disagreements arise.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-50">
                            <div className="terms-and-conditions two">
                                <h2>How we collect personal information</h2>
                                <ul>
                                    <li><strong>1) Fees and Payment: </strong> Clearly state your pricing structure,
                                        payment terms, and any additional charges. Specify when and how invoices will be
                                        issued, as well as your accepted payment methods.</li>
                                    <li><strong>2) Termination and Cancellation:</strong> Outline the process for
                                        terminating the consulting agreement and any associated fees or penalties.
                                        Include a notice period required for termination.</li>
                                    <li><strong>3) Liability and Indemnification:</strong> Describe your liability
                                        limits and the circumstances under which you will be held accountable for
                                        damages or losses. Include clauses regarding indemnification, which can protect
                                        you from client claims.</li>
                                    <li><strong>4) Governing Law and Jurisdiction:</strong> Define the governing law
                                        that will apply to the contract and the jurisdiction where any disputes will be
                                        resolved. This can simplify legal matters if disagreements arise.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="terms-and-conditions two">
                                <h2>Collect personal information</h2>
                                <ul>
                                    <li><strong>1) Fees and Payment: </strong> Clearly state your pricing structure,
                                        payment terms, and any additional charges. Specify when and how invoices will be
                                        issued, as well as your accepted payment methods.</li>
                                    <li><strong>2) Termination and Cancellation:</strong> Outline the process for
                                        terminating the consulting agreement and any associated fees or penalties.
                                        Include a notice period required for termination.</li>
                                    <li><strong>3) Liability and Indemnification:</strong> Describe your liability
                                        limits and the circumstances under which you will be held accountable for
                                        damages or losses. Include clauses regarding indemnification, which can protect
                                        you from client claims.</li>
                                    <li><strong>4) Governing Law and Jurisdiction:</strong> Define the governing law
                                        that will apply to the contract and the jurisdiction where any disputes will be
                                        resolved. This can simplify legal matters if disagreements arise.</li>
                                </ul>
                                <div className="btn-area">
                                    <button type="submit" className="primary-btn" data-text="Accept">
                                        <span>Accept</span>
                                    </button>
                                    <button type="submit" className="primary-btn2" data-text="Decline">
                                        <span>Decline</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer1 />
        </>
    )
}

export default PrivacyPolicyPage