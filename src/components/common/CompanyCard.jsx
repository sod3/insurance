import React from "react";

const CompanyCard = ({ name, logo, rating, avgAnnual, highlight, badge, pros }) => (
  <div className={`relative bg-white rounded-2xl shadow-md border-2 transition-all hover:shadow-xl hover:-translate-y-1.5 ${highlight ? "border-[#22c55e]" : "border-slate-100"} p-6 flex flex-col`}>
    {badge && (
      <span className="absolute -top-3 left-5 bg-[#22c55e] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-lg">
        {badge}
      </span>
    )}
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-base font-black text-[#0f172a] tracking-tight">
        {logo}
      </div>
      <div className="text-right">
        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-0.5">Avg. Annual</p>
        <p className="text-xl font-black text-[#0f172a]">{avgAnnual}</p>
      </div>
    </div>
    <h3 className="font-bold text-[#0f172a] text-lg mb-2">{name}</h3>
    <div className="flex items-center gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-amber-400" : "text-slate-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-slate-500 ml-1.5">{rating}/5</span>
    </div>
    {pros && (
      <ul className="mb-4 space-y-1.5 flex-1">
        {pros.map(p => (
          <li key={p} className="flex items-start gap-2 text-xs text-slate-500">
            <svg className="w-3.5 h-3.5 text-[#22c55e] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {p}
          </li>
        ))}
      </ul>
    )}
    <div className="flex gap-2 mt-auto pt-2">
      <div className="flex-1 block text-center bg-[#0f172a] hover:bg-[#22c55e] text-white text-sm font-bold py-2.5 rounded-xl transition-all">
        View Best Plans
      </div>
      <div className="flex-1 block text-center border border-slate-200 hover:border-[#22c55e] text-slate-600 hover:text-[#22c55e] text-sm font-semibold py-2.5 rounded-xl transition-all">
        Check Rates
      </div>
    </div>
  </div>
);

export default CompanyCard;