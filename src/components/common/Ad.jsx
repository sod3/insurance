import React from "react";

const Ad = ({ type = "banner", label = "Advertisement", slot = "" }) => {
  const sizes = {
    banner:      "w-full h-[90px] md:h-[90px]",
    rectangle:   "w-full h-[250px] md:h-[280px]",
    sidebar:     "w-full h-[600px]",
    leaderboard: "w-full h-[90px]",
    inline:      "w-full h-[120px]",
  };
  
  return (
    <div
      className={`adsense-placeholder flex flex-col items-center justify-center border border-dashed border-slate-200 bg-slate-50 rounded-xl ${sizes[type]}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <p className="text-[10px] font-semibold tracking-[0.15em] text-slate-300 uppercase">{label}</p>
      <p className="text-[9px] text-slate-200 mt-0.5">Google AdSense {slot ? `· Slot ${slot}` : `· ${type}`}</p>
    </div>
  );
};

export default Ad;