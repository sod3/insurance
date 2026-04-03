import React from "react";
// import Ad from "../components/common/Ad";
// import AffBtn from "../components/common/AffBtn";
import InternalLinks from "../components/common/InternalLinks";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            About Us
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Introduction
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
              InsureWise is an informational insurance website designed to help users make smarter, more confident decisions when choosing car insurance. Whether you're searching for car insurance quotes, comparing providers, or trying to understand coverage options, our goal is to simplify the process.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              We understand that insurance can often feel complex and overwhelming, especially with so many options available in the USA. That's why InsureWise focuses on clear, easy-to-understand content that breaks down key topics like coverage types, pricing, and provider comparisons. Our platform is built to guide you with reliable information so you can explore your options and choose what works best for your needs and budget.
            </p>
          </div>
          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-after-intro" /> */}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Our Mission
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-600">
              Our mission at InsureWise is simple: to help users find the right insurance solutions through clear, unbiased, and informative content.
            </p>
            <p className="text-slate-600 font-semibold mt-4">We aim to:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
              <li>Help users understand different types of insurance coverage</li>
              <li>Make it easier to compare insurance rates and providers</li>
              <li>Provide insights that can help users save money</li>
              <li>Empower individuals to make informed financial decisions</li>
            </ul>
            <p className="text-slate-600 mt-4">
              We believe that access to accurate information is the foundation of making the right choice, especially when it comes to something as important as insurance.
            </p>
          </div>
          <div className="mt-8">
            {/* <Ad type="inline" label="Advertisement" slot="privacy-mid-content" /> */}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            What We Offer
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Insurance Comparison Content</h3>
              <p className="text-slate-600">
                We create detailed comparisons of popular auto insurance providers to help you evaluate options side by side. This allows you to better understand pricing, features, and coverage differences.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Cost Guides</h3>
              <p className="text-slate-600">
                Our cost guides break down topics like car insurance costs in different states, helping you understand what affects pricing and how to find affordable options.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Reviews of Insurance Providers</h3>
              <p className="text-slate-600">
                We publish research-based overviews of major insurance companies, highlighting their strengths, coverage options, and factors to consider.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Educational Resources</h3>
              <p className="text-slate-600">
                We offer easy-to-read guides explaining key concepts such as liability vs full coverage insurance, how premiums are calculated, and how to reduce your insurance costs.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-slate-600 bg-slate-100 p-4 rounded-lg">
              Our goal is to provide content that is practical, relevant, and useful for real-world decision-making.
            </p>
          </div>

          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-mid-section" /> */}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            How We Work
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Research-Based Content:</h3>
              <p className="text-slate-600">Our articles are created using publicly available information, industry insights, and general insurance knowledge.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Regular Updates:</h3>
              <p className="text-slate-600">We review and update our content regularly to reflect changes in the insurance market and keep information relevant for 2026 and beyond.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Clear and Simple Language:</h3>
              <p className="text-slate-600">We prioritize clarity so that users can easily understand even complex insurance topics.</p>
            </div>
            <p className="text-slate-600 mt-4 pt-4 border-t border-slate-200">
              We do not provide direct insurance services. Instead, we aim to give you the information you need to make your own informed decisions.
            </p>
          </div>

          <div className="mt-8">
            {/* <Ad type="rectangle" label="Advertisement" slot="privacy-before-faq" /> */}
          </div>
        </div>
      </section>

      {/* Monetization Transparency Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Monetization Transparency
          </h2>
          
          <div className="p-6 bg-slate-50 rounded-xl">
            <p className="text-slate-600">
              InsureWise is monetized through Google AdSense, which means you may see advertisements displayed on our pages.
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-3 space-y-1 ml-4">
              <li>These ads are provided by third-party vendors, including Google</li>
              <li>Ads may be personalized based on your browsing behavior</li>
              <li>We may earn revenue when users interact with these ads</li>
            </ul>
            <p className="text-slate-600 mt-4">
              However, advertising does not influence our content. Our priority is to provide helpful, accurate, and unbiased information to our users. We do not promote specific providers based on advertising partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8">
            Why Trust Us
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-4">
            <p className="text-slate-600">
              We understand that trust is essential when it comes to financial and insurance-related information. At InsureWise, we are committed to maintaining that trust through:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
              <li><span className="font-semibold">Accuracy:</span> We strive to provide correct and up-to-date information</li>
              <li><span className="font-semibold">Transparency:</span> We clearly explain how our website operates and earns revenue</li>
              <li><span className="font-semibold">User-First Approach:</span> Our content is created with the user's needs in mind</li>
              <li><span className="font-semibold">Consistency:</span> We regularly update our content to stay relevant in 2026</li>
            </ul>
            <p className="text-slate-600 mt-4 pt-4 border-t border-slate-200">
              While we aim to provide helpful insights, we always encourage users to verify details directly with insurance providers before making final decisions.
            </p>
          </div>

          <div className="mt-8">
            {/* <Ad type="inline" label="Advertisement" slot="privacy-security" /> */}
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
            If you have any questions, suggestions, or feedback, we'd love to hear from you.
          </p>
          <div className="inline-flex flex-col items-center gap-3">
            <div className="text-white text-lg font-semibold">
              You can reach us at:
            </div>
            <div className="inline-flex items-center gap-2 text-white bg-[#22c55e] px-6 py-3 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>mudassir.muneer123@gmail.com</span>
            </div>
          </div>
          <p className="text-slate-400 mt-8 text-sm">
            At InsureWise, our goal is to make insurance easier to understand—so you can make confident, informed decisions every step of the way.
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

export default About;