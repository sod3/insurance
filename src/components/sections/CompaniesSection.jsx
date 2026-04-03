import React from "react";
import CompanyCard from "../common/CompanyCard";

const CompaniesSection = () => {
  const companies = [
    { name: "State Farm", logo: "SF", rating: 4.8, avgAnnual: "$1,247/yr", badge: "Best Overall", pros: ["Largest US provider", "Superior claims handling", "Strong local agent network"] },
    { name: "GEICO", logo: "GC", rating: 4.7, avgAnnual: "$1,189/yr", highlight: true, badge: "Cheapest Rate", pros: ["Lowest avg. national rate", "Top mobile app", "15+ discounts available"] },
    { name: "Progressive", logo: "PR", rating: 4.6, avgAnnual: "$1,312/yr", badge: null, pros: ["Best for high-risk drivers", "Snapshot telematics savings", "Name Your Price tool"] },
    { name: "Allstate", logo: "AL", rating: 4.5, avgAnnual: "$1,380/yr", badge: null, pros: ["Drivewise cash-back program", "Accident forgiveness", "Strong local agents"] },
    { name: "USAA", logo: "US", rating: 4.9, avgAnnual: "$1,098/yr", badge: "Military Best", pros: ["Lowest rates overall", "Military & veterans only", "Top J.D. Power scores"] },
    { name: "Liberty Mutual", logo: "LM", rating: 4.4, avgAnnual: "$1,422/yr", badge: null, pros: ["New car replacement", "Better Car Replacement™", "Customizable coverage"] },
  ];
  
  return (
    <section id="companies" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">2026 Rankings</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">
            Best Car Insurance Companies in 2026
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We analyzed 50+ auto insurance providers across price, customer satisfaction, claims handling, and coverage options to produce the most accurate 2026 rankings for American drivers. Rates shown are national averages for a 35-year-old driver with a clean record and good credit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {companies.map(c => <CompanyCard key={c.name} {...c} />)}
        </div>
        <div className="mt-10 p-5 bg-blue-50 border border-blue-100 rounded-2xl text-sm text-slate-600 text-center reveal">
          📊 <strong>Methodology:</strong> Rankings use J.D. Power 2025 Auto Insurance Study, NAIC complaint index, AM Best financial ratings, and verified user reviews. Updated monthly. <div className="text-blue-600 underline ml-1">Learn more about our methodology →</div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;