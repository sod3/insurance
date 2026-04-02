import React from "react";
import AffBtn from "../common/AffBtn";

const StateGuidesSection = () => {
  const states = [
    { state: "Texas", avg: "$1,743", note: "No-fault optional; high storm risk adds to rates.", link: "#" },
    { state: "California", avg: "$1,986", note: "Credit score banned for pricing; earthquake coverage separate.", link: "#" },
    { state: "Florida", avg: "$2,208", note: "PIP required; high fraud rates push premiums up.", link: "#" },
    { state: "New York", avg: "$1,872", note: "No-fault state; NYC ZIP codes can triple rural rates.", link: "#" },
    { state: "Georgia", avg: "$1,698", note: "Atlanta metro drives state average significantly higher.", link: "#" },
    { state: "Illinois", avg: "$1,347", note: "Chicago areas pay 2× downstate rates due to traffic.", link: "#" },
    { state: "Pennsylvania", avg: "$1,289", note: "Choice no-fault system; limited tort saves ~$200/yr.", link: "#" },
    { state: "Ohio", avg: "$1,034", note: "Among cheapest states; strong competitive market.", link: "#" },
  ];
  
  return (
    <section id="states" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">State-by-State Guides</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">
            Cheap Car Insurance by State (2026)
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Car insurance requirements and average costs vary dramatically by state. Each state has unique minimum coverage laws, no-fault rules, and pricing regulations. Find your state's guide for the best local rates.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {states.map(s => (
            <div key={s.state} className="bg-white rounded-2xl border border-slate-100 p-5 hover:border-[#22c55e]/40 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-[#0f172a] text-lg group-hover:text-[#22c55e] transition-colors">
                  {s.state}
                </h3>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-lg">{s.avg}/yr</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{s.note}</p>
              <a href={s.link} rel="nofollow" className="text-[#22c55e] text-xs font-bold hover:underline flex items-center gap-1">
                Best Rates in {s.state} →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 bg-[#0f172a] rounded-2xl text-center reveal">
          <p className="text-white font-bold text-lg mb-2">Find the Cheapest Car Insurance in Your State</p>
          <p className="text-slate-400 text-sm mb-5">Rates change daily. Compare live quotes from top providers available in your area right now.</p>
          <AffBtn label="View Best Plans in My State →" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default StateGuidesSection;