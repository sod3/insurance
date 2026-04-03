import React from "react";
import Ad from "../common/Ad";
import AffBtn from "../common/AffBtn";

const SidebarAd = () => (
  <aside className="hidden xl:block w-[300px] flex-shrink-0">
    <div className="sticky top-24 space-y-5">
      <Ad type="sidebar" label="Advertisement · Auto Insurance" slot="sidebar-1" />
      <div className="bg-[#0f172a] rounded-2xl p-5 text-center">
        <p className="text-white font-bold text-sm mb-1">⚡ Rates Change Daily</p>
        <p className="text-slate-400 text-xs mb-4 leading-relaxed">Lock in today's best rate before prices update.</p>
        <AffBtn label="Check Latest Rates" size="sm" />
      </div>
    </div>
  </aside>
);

export default SidebarAd;