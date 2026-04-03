import React, { useState } from "react";
import AffBtn from "../common/AffBtn";

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: "What is the cheapest car insurance in the USA for 2026?",
      a: "GEICO consistently offers the cheapest national average rates at around $1,189/year for full coverage. USAA is even lower ($1,098/yr) but is limited to military members and families. State Farm and Progressive compete closely for drivers with varied records. The cheapest provider for your specific situation depends on your state, age, vehicle, and driving record - always compare at least 3 live quotes."
    },
    {
      q: "How much car insurance do I legally need in the USA?",
      a: "Every U.S. state except New Hampshire requires minimum liability insurance. Most require at least 25/50/25 coverage ($25K per person, $50K per accident in bodily injury, $25K property damage). Financial experts recommend exceeding state minimums - a serious accident can quickly exhaust minimum limits, leaving you personally liable for the remainder."
    },
    {
      q: "Does my credit score affect my car insurance rate?",
      a: "In 44 U.S. states, yes. Insurers use a credit-based insurance score to predict claim frequency. Excellent credit (750+) saves an average of $478–$700/year versus poor credit for the same coverage. Exceptions: California, Hawaii, Massachusetts, and Michigan have laws prohibiting credit-based insurance pricing."
    },
    {
      q: "How often should I compare car insurance rates?",
      a: "At minimum once per year, 30–45 days before renewal. Also compare after major life events: marriage, home purchase, new vehicle, adding a teen driver, or relocation to a different state. If you've had an at-fault accident, reshop after 3 years when the incident typically stops affecting rates."
    },
    {
      q: "What does full coverage car insurance actually include?",
      a: "Full coverage combines three types: liability (others' damages), collision (your car in an accident regardless of fault), and comprehensive (theft, weather, vandalism, animal collisions). It's not a single defined policy - it's industry shorthand. If you're financing or leasing a vehicle, your lender typically requires full coverage plus gap insurance."
    },
    {
      q: "Can I get cheap car insurance with a bad driving record?",
      a: "Yes, with specialized insurers. The General, Dairyland, Bristol West, and Infinity Auto specialize in high-risk drivers. Expect to pay 40–100% more than a clean-record driver. Completing a defensive driving course reduces points in many states. After 3–5 years with no new violations, standard insurers will reassess your rate significantly lower."
    },
    {
      q: "What is the difference between comprehensive and collision insurance?",
      a: "Collision covers damage to your vehicle from an accident - whether you hit another car, a guardrail, or a pole - regardless of fault. Comprehensive covers non-collision events: theft, vandalism, hail, floods, hurricanes, wildfires, and hitting an animal. Both are part of full coverage and each has a separate deductible you choose."
    },
    {
      q: "Is car insurance cheaper if I pay in full vs. monthly?",
      a: "Yes, paying your annual premium in full typically saves 5–12% compared to monthly installments. Insurers charge installment fees ($3–$10/month) on top of the divided premium. On a $1,400/year policy, paying in full can save $60–$168 annually. Setting up auto-pay for monthly payments reduces (but doesn't eliminate) installment fees."
    },
  ];
  
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">Questions Answered</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">
            Car Insurance FAQ 2026
          </h2>
          <p className="text-slate-500">Common questions about auto insurance coverage, costs, and how to find the best rates in the USA.</p>
        </div>
        <div className="space-y-2.5 reveal">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:border-slate-200 transition-all">
              <button
                className="w-full text-left p-5 flex items-start justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0f172a] text-sm md:text-base leading-snug pr-2">{f.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-base font-light transition-all mt-0.5 ${open === i ? "border-[#22c55e] text-[#22c55e] rotate-45" : "border-slate-300 text-slate-400"}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center reveal">
          <p className="text-slate-500 text-sm mb-4">Still have questions? Compare quotes from top insurers to see your personalized rates.</p>
          <AffBtn label="Compare Car Insurance Quotes →" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;