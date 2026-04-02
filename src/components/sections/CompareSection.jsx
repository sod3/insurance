import React from "react";
import AffBtn from "../common/AffBtn";

const CompareSection = () => {
  const factors = [
    { icon: "🏙️", title: "Your Location", desc: "Urban drivers in Michigan, New York, Louisiana, and Florida pay significantly more than rural areas due to higher accident and theft rates. Moving zip codes - even just across a county line - can shift your rate by $400+/year." },
    { icon: "👤", title: "Driver Profile", desc: "Age, gender, marital status, and driving history all influence premiums. Teen drivers pay 2–3× the average rate. Clean-record drivers over 25 consistently access the cheapest car insurance USA rates available." },
    { icon: "🚗", title: "Vehicle Type", desc: "Sports cars, luxury SUVs, and EVs cost more to insure due to repair costs and theft risk. Practical sedans - like Honda Accord or Toyota Camry - typically carry the lowest liability insurance premiums." },
    { icon: "📋", title: "Coverage Level", desc: "Liability-only coverage starts around $400/year. Full coverage adds comprehensive and collision protection but can increase your premium by $600–$900 annually depending on your vehicle value." },
    { icon: "💳", title: "Credit Score", desc: "In 44 states, insurers factor credit into pricing. Drivers with excellent credit (750+) save an average of $478/year vs. poor-credit drivers for identical coverage. California, Hawaii, Massachusetts prohibit credit-based pricing." },
    { icon: "📦", title: "Deductible Choice", desc: "Raising your deductible from $250 to $1,000 can cut your full coverage insurance cost by 15–25%. Smart strategy if you have savings to cover out-of-pocket claims. Low deductible = higher monthly premium." },
  ];
  
  return (
    <section id="compare" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">Rate Factors 2026</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">
            Find the Best Auto Insurance Rates in the USA Today
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Car insurance rates vary by $1,000+ per year between companies for <em>identical</em> coverage. These six factors determine your premium - understanding them is the first step to finding the best auto insurance rates available in your state.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {factors.map(f => (
            <div key={f.title} className="group p-6 rounded-2xl border border-slate-100 hover:border-[#22c55e]/40 hover:shadow-xl hover:-translate-y-1 transition-all bg-white cursor-default">
              <div className="text-3xl mb-3" style={{fontSize:"28px"}}>{f.icon}</div>
              <h3 className="font-bold text-[#0f172a] text-base mb-2 group-hover:text-[#22c55e] transition-colors">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center reveal">
          <p className="text-sm text-slate-400 mb-4">Ready to compare car insurance rates online? See what you qualify for today.</p>
          <AffBtn label="Compare Car Insurance Quotes →" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default CompareSection;