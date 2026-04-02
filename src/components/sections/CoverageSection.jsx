import React from "react";
import AffBtn from "../common/AffBtn";

const CoverageSection = () => {
  const rows = [
    ["Bodily Injury Liability", true, true],
    ["Property Damage Liability", true, true],
    ["Uninsured Motorist Coverage", false, true],
    ["Medical Payments / PIP", false, true],
    ["Collision Coverage", false, true],
    ["Comprehensive Coverage", false, true],
    ["Rental Car Reimbursement", false, true],
    ["Roadside Assistance", false, true],
    ["Gap Insurance (add-on)", false, true],
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">Coverage Explained</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">
            Full Coverage vs. Liability Insurance
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            The most common question American drivers ask: do I need full coverage or will liability-only insurance be enough? The answer depends on your vehicle's age, value, loan status, and risk tolerance. Here's a clear comparison.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl reveal">
          <div className="grid grid-cols-3 bg-[#0f172a]">
            <div className="p-4 text-white text-sm font-bold">Coverage Type</div>
            <div className="p-4 text-center border-l border-white/10 text-slate-300 text-sm font-bold">Liability Only<br /><span className="text-xs font-normal text-slate-500">$504–$936/yr</span></div>
            <div className="p-4 text-center border-l border-white/10 text-[#22c55e] text-sm font-bold">Full Coverage<br /><span className="text-xs font-normal text-slate-500">$1,427–$2,200/yr</span></div>
          </div>
          {rows.map(([label, liability, full], i) => (
            <div key={label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-green-50/30 transition-colors`}>
              <div className="p-4 font-medium text-slate-700 border-b border-slate-100">{label}</div>
              <div className="p-4 text-center border-l border-b border-slate-100">
                {liability ? <span className="text-[#22c55e] font-black text-lg">✓</span> : <span className="text-slate-200 text-lg font-bold">✕</span>}
              </div>
              <div className="p-4 text-center border-l border-b border-slate-100">
                {full ? <span className="text-[#22c55e] font-black text-lg">✓</span> : <span className="text-slate-200 text-lg font-bold">✕</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 reveal">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-[#0f172a] mb-3">Choose Liability-Only If:</h4>
            <ul className="text-sm text-slate-600 space-y-2">
              {["Your car's market value is under $5,000", "Your vehicle is fully paid off (no loan)", "You have savings to replace the car if totaled", "You want the absolute lowest possible premium"].map(i => (
                <li key={i} className="flex gap-2 items-start"><span className="text-blue-400 mt-0.5">→</span>{i}</li>
              ))}
            </ul>
            <div className="mt-4">
              <AffBtn label="Compare Liability Quotes" size="sm" />
            </div>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
            <h4 className="font-bold text-[#0f172a] mb-3">Choose Full Coverage If:</h4>
            <ul className="text-sm text-slate-600 space-y-2">
              {["You're financing or leasing your vehicle", "Your car is worth $10,000 or more", "You live in a high-theft or severe-weather state", "You want complete financial protection"].map(i => (
                <li key={i} className="flex gap-2 items-start"><span className="text-[#22c55e] mt-0.5">→</span>{i}</li>
              ))}
            </ul>
            <div className="mt-4">
              <AffBtn label="Compare Full Coverage Quotes" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;