import React from "react";

const LowerPremiumsSection = () => {
  const steps = [
    { step: "01", title: "Get at least 3 quotes", body: "The single most powerful action: comparing 3+ quotes from different insurers. Rates for identical coverage vary by $500–$1,200/year between companies - shopping is free and takes 10 minutes." },
    { step: "02", title: "Review your coverage annually", body: "A car that was worth $20,000 five years ago may now be worth $8,000. At that value, dropping comprehensive and collision can save $400–$600/year with no meaningful risk increase." },
    { step: "03", title: "Improve your credit score", body: "In most states, raising your credit score from 'fair' to 'good' saves an average of $300–$500/year on car insurance premiums. Pay down credit card balances and correct any errors on your credit report." },
    { step: "04", title: "Take a defensive driving course", body: "A state-approved defensive driving course (often $25–$50 online) earns a 5–15% discount with most major insurers. Some states mandate the discount by law. The discount typically lasts 3 years." },
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">Expert Strategy</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">
            Tips to Lower Your Insurance Premium in 2026
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Beyond basic discounts, these four strategic moves consistently produce the biggest savings for American drivers - without reducing the coverage protection you actually need.
          </p>
        </div>
        <div className="space-y-5 reveal">
          {steps.map(s => (
            <div key={s.step} className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#22c55e]/30 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center text-[#22c55e] font-black text-sm">
                {s.step}
              </div>
              <div>
                <h3 className="font-bold text-[#0f172a] text-base mb-1.5">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LowerPremiumsSection;