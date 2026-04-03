import React from "react";

const PricingSection = () => {
  const tiers = [
    {
      label: "State Minimum",
      monthly: "$42", annual: "$504/yr",
      color: "border-slate-200", btnStyle: "border border-slate-300 text-slate-700 hover:border-[#22c55e] hover:text-[#22c55e]",
      covers: ["Bodily injury liability", "Property damage liability", "State-mandated minimums only", "No vehicle damage coverage"],
      tag: null, desc: "Bare minimum required by law. Suitable only for low-value vehicles you own outright."
    },
    {
      label: "Liability Only",
      monthly: "$78", annual: "$936/yr",
      color: "border-blue-400", btnStyle: "border border-blue-300 text-blue-700 hover:border-[#22c55e] hover:text-[#22c55e]",
      covers: ["Higher liability limits (100/300/100)", "Uninsured/underinsured motorist", "Medical payments (MedPay)", "No comprehensive or collision"],
      tag: "Most Common", desc: "Best for paid-off cars worth under $8,000. Covers others' damages but not your own vehicle."
    },
    {
      label: "Full Coverage",
      monthly: "$147", annual: "$1,764/yr",
      color: "border-[#22c55e]", btnStyle: "bg-[#22c55e] text-white hover:bg-green-400",
      covers: ["Comprehensive coverage", "Collision coverage", "High liability limits", "Rental car reimbursement", "Roadside assistance 24/7"],
      tag: "Best Protection", desc: "Required by lenders on financed vehicles. Maximum protection for new or high-value cars."
    },
  ];
  
  return (
    <section id="pricing" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">Cost Guide 2026</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            How Much Does Car Insurance Cost?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The average American pays <strong className="text-white">$1,427/year</strong> for car insurance in 2026 - but costs range from $504 to $2,864+ depending on coverage level, state, and driver profile. Understanding the three main tiers helps you choose right.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal">
          {tiers.map(t => (
            <div key={t.label} className={`relative bg-white/[0.04] border-2 ${t.color} rounded-2xl p-7`}>
              {t.tag && (
                <span className="absolute -top-3.5 left-6 bg-[#22c55e] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-lg">
                  {t.tag}
                </span>
              )}
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-2 font-bold">{t.label}</p>
              <div className="flex items-end gap-1 mb-0.5">
                <span className="text-5xl font-black text-white">{t.monthly}</span>
                <span className="text-slate-400 text-sm mb-1.5">/mo</span>
              </div>
              <p className="text-slate-500 text-xs mb-3">{t.annual} national avg.</p>
              <p className="text-slate-400 text-xs mb-5 italic border-l-2 border-white/10 pl-3 leading-relaxed">{t.desc}</p>
              <ul className="space-y-2.5 mb-7">
                {t.covers.map(c => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
              <div className={`block text-center font-bold text-sm py-3 rounded-xl transition-all ${t.btnStyle}`}>
                Compare {t.label} Quotes
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 reveal">
          <h3 className="text-white font-bold text-lg mb-5">
            💡 Average Full Coverage Car Insurance Cost by State (2026)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              ["Michigan", "$2,864", "🔴"],
              ["Louisiana", "$2,412", "🔴"],
              ["Florida", "$2,208", "🟠"],
              ["California", "$1,986", "🟠"],
              ["New York", "$1,872", "🟡"],
              ["Texas", "$1,743", "🟡"],
              ["Georgia", "$1,698", "🟡"],
              ["Nevada", "$1,654", "🟡"],
              ["Colorado", "$1,621", "🟢"],
              ["Ohio", "$1,034", "🟢"],
              ["Iowa", "$1,008", "🟢"],
              ["Maine", "$876", "🟢"],
            ].map(([state, cost, flag]) => (
              <div key={state} className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-3 text-center cursor-default">
                <p className="text-white font-black text-sm">{cost}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">{flag} {state}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">Full coverage rates, 2026 national averages. Rate shown for a 35-year-old with good credit and clean record. Your rate will vary.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;