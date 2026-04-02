import React from "react";
// import Ad from "../components/common/Ad";
// import AffBtn from "../components/common/AffBtn";
import InternalLinks from "../components/common/InternalLinks";

const TermsOfUse = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms of Use for InsureWise
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Last Updated: January 2026
          </p>
          <div className="mt-8">
            {/* <Ad type="leaderboard" label="Advertisement" slot="privacy-top" /> */}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Welcome to InsureWise. By accessing and using our website, you agree to comply with and be bound by the following Terms of Use. Please read these terms carefully before using our website. If you do not agree with any part of these terms, you should not use InsureWise.
            </p>
          </div>
          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-after-intro" /> */}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Introduction
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              InsureWise is an informational website that provides content related to insurance, including comparisons, guides, and general information. The content on this website is intended for educational and informational purposes only and should not be considered professional or financial advice.
            </p>
            <p className="text-slate-600 mt-4">
              By using this website, you confirm that you are at least 13 years old and agree to these Terms of Use.
            </p>
          </div>
          <div className="mt-8">
            {/* <Ad type="inline" label="Advertisement" slot="privacy-mid-content" /> */}
          </div>
        </div>
      </section>

      {/* Use of the Website Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Use of the Website
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-xl">
              <p className="text-slate-600">
                You agree to use InsureWise only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.
              </p>
              <p className="text-slate-600 font-semibold mt-4">You agree NOT to:</p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Distribute malware, spam, or harmful content</li>
                <li>Copy, reproduce, or republish content without permission</li>
              </ul>
              <p className="text-slate-600 mt-4">
                We reserve the right to restrict or terminate access to users who violate these terms.
              </p>
            </div>
          </div>

          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-mid-section" /> */}
          </div>
        </div>
      </section>

      {/* Intellectual Property Rights Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Intellectual Property Rights
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              All content on InsureWise, including text, graphics, logos, and design elements, is the property of InsureWise unless otherwise stated.
            </p>
            <p className="text-slate-600 font-semibold mt-4">You may:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>View and use content for personal, non-commercial purposes</li>
            </ul>
            <p className="text-slate-600 font-semibold mt-4">You may NOT:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>Copy, reproduce, or distribute content without prior written permission</li>
              <li>Use our content for commercial purposes without authorization</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Unauthorized use of our content may result in legal action.
            </p>
          </div>

          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-before-faq" /> */}
          </div>
        </div>
      </section>

      {/* Disclaimer of Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Disclaimer of Information
          </h2>
          
          <div className="p-6 bg-slate-50 rounded-xl">
            <p className="text-slate-600">
              The information provided on InsureWise is for general informational purposes only.
            </p>
            <p className="text-slate-600 font-semibold mt-4">Important Notes:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>We do not provide insurance, legal, or financial advice</li>
              <li>We do not guarantee the accuracy, completeness, or reliability of any information</li>
              <li>Insurance rates, policies, and terms may vary by provider and location</li>
            </ul>
            <p className="text-slate-600 mt-4">
              You should always verify information directly with auto insurance providers or licensed professionals before making decisions.
            </p>
          </div>
        </div>
      </section>

      {/* No Professional Advice Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            No Professional Advice
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              All content on InsureWise, including guides on car insurance quotes, full coverage insurance, and liability insurance cost, is intended for informational purposes only.
            </p>
            <p className="text-slate-600 mt-4">
              It should not be considered:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>Insurance advice</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Always consult with a qualified professional or insurance provider for advice tailored to your situation.
            </p>
          </div>

          <div className="mt-8">
            {/* <Ad type="inline" label="Advertisement" slot="privacy-security" /> */}
          </div>
        </div>
      </section>

      {/* Third-Party Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Third-Party Links
          </h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              InsureWise may contain links to third-party websites for additional information or comparison purposes.
            </p>
            <p className="text-slate-600 font-semibold mt-4">Please Note:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>We do not control or endorse third-party websites</li>
              <li>We are not responsible for their content, policies, or practices</li>
              <li>Visiting third-party sites is at your own risk</li>
            </ul>
            <p className="text-slate-600 mt-4">
              We recommend reviewing their Terms of Use and Privacy Policies before engaging with them.
            </p>
          </div>
        </div>
      </section>

      {/* Advertising and Google AdSense Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Advertising and Google AdSense
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              InsureWise displays advertisements through Google AdSense and other third-party advertising partners.
            </p>
            <p className="text-slate-600 font-semibold mt-4">Important Information:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>Ads may be personalized based on your browsing behavior</li>
              <li>Third-party vendors may use cookies and tracking technologies</li>
              <li>We do not control the content of advertisements displayed</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Your interaction with ads is subject to the policies of the respective advertisers.
            </p>
          </div>
        </div>
      </section>

      {/* Limitation of Liability Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Limitation of Liability
          </h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              To the fullest extent permitted by law, InsureWise shall not be held liable for any direct, indirect, incidental, or consequential damages arising from:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-3 space-y-1 ml-4">
              <li>Use or inability to use the website</li>
              <li>Reliance on information provided</li>
              <li>Errors or omissions in content</li>
              <li>Third-party links or services</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Your use of the website is at your own risk.
            </p>
          </div>
        </div>
      </section>

      {/* Indemnification Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Indemnification
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              You agree to defend, indemnify, and hold harmless InsureWise from any claims, damages, or expenses arising from:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-3 space-y-1 ml-4">
              <li>Your use of the website</li>
              <li>Your violation of these Terms of Use</li>
              <li>Your infringement of any rights of another party</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Changes to Terms Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Changes to Terms
          </h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              InsureWise reserves the right to update or modify these Terms of Use at any time without prior notice.
            </p>
            <p className="text-slate-600 font-semibold mt-4">What This Means:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>Changes will be posted on this page</li>
              <li>Continued use of the website means you accept the updated terms</li>
            </ul>
            <p className="text-slate-600 mt-4">
              We encourage users to review this page regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Termination Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Termination
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              We reserve the right to suspend or terminate access to InsureWise at our discretion, without notice, for any violation of these Terms of Use.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Law Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Governing Law
          </h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              These Terms of Use shall be governed and interpreted in accordance with applicable international laws. Users accessing the website from different regions are responsible for complying with local laws.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Contact Information
          </h2>
          <p className="text-slate-400 mb-6">
            If you have any questions regarding these Terms of Use, you can contact us:
          </p>
          <div className="inline-flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 text-white bg-[#22c55e] px-6 py-3 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>mudassir.muneer123@gmail.com</span>
            </div>
          </div>
          <div className="mt-8">
            {/* <Ad type="leaderboard" label="Advertisement" slot="privacy-footer" /> */}
          </div>
        </div>
      </section>

      <InternalLinks />
    </div>
  );
};

export default TermsOfUse;