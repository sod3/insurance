import React from "react";

const AffBtn = ({ label = "Compare Providers", size = "md" }) => {
  const sz = size === "sm"
    ? "text-xs px-4 py-2"
    : size === "lg"
    ? "text-base px-8 py-4 font-bold"
    : "text-sm px-5 py-2.5 font-semibold";
    
  return (
    <div className={`inline-flex items-center gap-2 bg-[#22c55e] hover:bg-green-400 text-white rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-900/20 ${sz}`}>
      {label}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  );
};

export default AffBtn;