import React from "react";
import AffBtn from "../common/AffBtn";

const CheapOptionsSection = () => {
  const tips = [
    { icon: "🔄", tip: "Shop & Compare Annually", detail: "Car insurance rates change every renewal. Set a calendar reminder 45 days before your policy expires - switching companies at renewal can save $300–$700/year with zero lapse in coverage." },
    { icon: "📦", tip: "Bundle Home & Auto", detail: "Multi-policy discounts are among the biggest available. Bundling auto with homeowners or renters insurance typically saves 10–25% across both policies, averaging $540/year in total savings." },
    { icon: "🎓", tip: "Stack All Discounts", detail: "Good student (up to 25%), defensive driving, low mileage, paperless billing, auto-pay, and loyalty discounts can stack - many drivers reduce their cheap car insurance USA premiums by 30–40% through combinations." },
    { icon: "📱", tip: "Use Telematics Programs", detail: "GEICO DriveEasy, Progressive Snapshot, and Allstate Drivewise monitor your driving habits via app. Safe drivers typically save 15–30%, and just signing up often earns an immediate discount." },
    { icon: "🏦", tip: "Raise Your Deductible", detail: "Increasing your deductible from $250 to $1,000 reduces your full coverage insurance cost by 15–25%. This makes sense only if you have an emergency fund to cover the higher deductible if needed." },
    { icon: "🚘", tip: "Choose Insurance-Friendly Vehicles", detail: "Honda CR-V, Toyota Camry, Subaru Outback, and Ford F-150 rank among the cheapest to insure nationally. Sports cars and luxury EVs can cost 40–80% more to insure for identical liability limits." },
  ];
  
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">Money-Saving Guide</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">
            Cheap Auto Insurance Options for 2026
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Finding cheap car insurance doesn't require sacrificing protection. These six strategies are used by the most cost-conscious American drivers to dramatically lower their annual premiums while keeping solid coverage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal">
          {tips.map(t => (
            <div key={t.tip} className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#22c55e]/30 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-lg" style={{fontSize:"20px"}}>
                {t.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#0f172a] mb-1.5 text-base">{t.tip}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center reveal">
          <AffBtn label="Find Cheapest Rate in Your State →" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default CheapOptionsSection;