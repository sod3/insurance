import React from "react";
// import Ad from "../components/common/Ad";
// import AffBtn from "../components/common/AffBtn";
import InternalLinks from "../components/common/InternalLinks";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Privacy Policy for InsureComparePro
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
              At InsureComparePro, we value your privacy and are committed to protecting your personal information. This Privacy Policy document outlines the types of information that are collected and recorded by InsureComparePro and how we use it.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              This policy applies to our website and is intended for a global audience, including users in the United States. By using our website, you consent to the practices described in this Privacy Policy.
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
              InsureComparePro is an informational insurance website that provides content, comparisons, and insights related to car insurance and related topics. We do not require user accounts or collect sensitive personal information directly.
            </p>
            <p className="text-slate-600 mt-4">
              However, like most websites, we may collect certain non-personal data automatically to improve user experience and support advertising through Google AdSense.
            </p>
          </div>
          <div className="mt-8">
            {/* <Ad type="inline" label="Advertisement" slot="privacy-mid-content" /> */}
          </div>
        </div>
      </section>

      {/* Information We Collect Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Log Files</h3>
              <p className="text-slate-600">
                InsureComparePro follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected may include:
              </p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
                <li>Internet Protocol (IP) addresses</li>
                <li>Browser type</li>
                <li>Internet Service Provider (ISP)</li>
                <li>Date and time stamp</li>
                <li>Referring/exit pages</li>
                <li>Number of clicks</li>
              </ul>
              <p className="text-slate-600 mt-2">
                This data is not linked to any personally identifiable information.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Usage Data</h3>
              <p className="text-slate-600">
                We may collect information about how visitors interact with our website, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Navigation paths</li>
              </ul>
              <p className="text-slate-600 mt-2">
                This helps us improve content quality and user experience.
              </p>
            </div>
          </div>

          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-mid-section" /> */}
          </div>
        </div>
      </section>

      {/* How We Use Information Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            How We Use Information
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              We use the collected information in the following ways:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-3 space-y-2 ml-4">
              <li>To operate and maintain our website</li>
              <li>To improve, personalize, and expand our content</li>
              <li>To analyze user behavior and trends</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To prevent fraud and ensure website security</li>
            </ul>
            <p className="text-slate-600 mt-4 font-medium">
              We do not sell, trade, or rent users' personal information.
            </p>
          </div>

          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-before-faq" /> */}
          </div>
        </div>
      </section>

      {/* Cookies and Web Beacons Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Cookies and Web Beacons
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">What Are Cookies?</h3>
              <p className="text-slate-600">
                Cookies are small data files stored on your device that help websites remember information about your visit.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">How We Use Cookies:</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>To understand and save user preferences</li>
                <li>To analyze website traffic</li>
                <li>To deliver relevant advertisements</li>
              </ul>
              <p className="text-slate-600 mt-3">
                You can choose to disable cookies through your browser settings. More detailed information about cookie management can be found in your browser's help section.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google AdSense Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Google AdSense
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-4">
            <p className="text-slate-600">
              We use Google AdSense to display advertisements on our website.
            </p>
            <div>
              <h3 className="font-semibold text-lg mb-2">How Google Uses Data:</h3>
              <p className="text-slate-600">
                Google is a third-party vendor that uses cookies, including the DART cookie, to serve ads to users based on their visit to our website and other sites on the internet. The DART cookie enables Google to show ads based on users' interests and browsing behavior.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Third-Party Advertising:</h3>
              <p className="text-slate-600">
                Third-party ad servers or ad networks may also use technologies like cookies, JavaScript, or web beacons in their advertisements. These technologies are used to measure the effectiveness of ads and personalize the advertising content you see.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Opt-Out Option:</h3>
              <p className="text-slate-600">
                Users may opt out of personalized advertising by visiting Google Ads Settings:
                <br />
                <a href="https://adssettings.google.com/" className="text-[#22c55e] hover:underline break-all">https://adssettings.google.com/</a>
              </p>
            </div>
          </div>

          <div className="mt-8">
            {/* <Ad type="inline" label="Advertisement" slot="privacy-security" /> */}
          </div>
        </div>
      </section>

      {/* Third Party Privacy Policies Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Third Party Privacy Policies
          </h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              InsureComparePro's Privacy Policy does not apply to other advertisers or websites.
            </p>
            <p className="text-slate-600 mt-4">
              We may include links to third-party websites for informational or comparison purposes. We advise you to review the respective Privacy Policies of these third-party sites for more detailed information about their practices and how to opt out of certain options.
            </p>
          </div>
        </div>
      </section>

      {/* Data Protection & Security Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Data Protection & Security
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              We take reasonable steps to protect your information and ensure the security of our website.
            </p>
            <p className="text-slate-600 mt-4">
              However, please note:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>No method of transmission over the internet is 100% secure</li>
              <li>We cannot guarantee absolute security</li>
            </ul>
            <p className="text-slate-600 mt-4">
              We continuously update our practices to maintain a safe browsing environment.
            </p>
          </div>
        </div>
      </section>

      {/* Children's Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Children's Information (COPPA Compliance)
          </h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              Protecting children's privacy is important to us.
            </p>
            <p className="text-slate-600 mt-4">
              InsureComparePro does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that your child has provided such information on our website, please contact us immediately, and we will promptly remove such information from our records.
            </p>
          </div>
        </div>
      </section>

      {/* Consent Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Consent
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </section>

      {/* Updates to This Privacy Policy Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
            Updates to This Privacy Policy
          </h2>
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              We may update this Privacy Policy from time to time.
            </p>
            <p className="text-slate-600 mt-4">
              Any changes will be posted on this page with an updated revision date. We encourage users to review this page periodically to stay informed about how we are protecting your information.
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
            If you have any questions or require more information about our Privacy Policy, please feel free to contact us.
          </p>
          <div className="inline-flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 text-white bg-[#22c55e] px-6 py-3 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>mudassir.muneer123@gmail.com</span>
            </div>
          </div>
          <p className="text-slate-400 mt-6 text-sm">
            Your privacy is important to us, and we are committed to maintaining transparency and trust while you use InsureComparePro.
          </p>
          <div className="mt-8">
            {/* <Ad type="leaderboard" label="Advertisement" slot="privacy-footer" /> */}
          </div>
        </div>
      </section>

      <InternalLinks />
    </div>
  );
};

export default PrivacyPolicy;