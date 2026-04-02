import React from "react";

const Footer = () => (
  <footer className="bg-[#0f172a] border-t border-white/10 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-extrabold text-base">InsureCompare<span className="text-[#22c55e]">Pro</span></span>
              <p className="text-[10px] text-slate-500 mt-0.5">Independent · Unbiased · Updated 2026</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-5">
            InsureComparePro is an independent auto insurance comparison resource. We provide unbiased educational content to help American drivers find the best car insurance rates in their state.
          </p>
          <div className="flex gap-3">
            {["Compare Rates", "State Guides", "Coverage FAQ"].map(t => (
              <div className="text-[#22c55e] text-xs font-semibold hover:text-green-400 transition-colors">{t} →</div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Best Insurance</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="/best-car-insurance-usa-2026" className="hover:text-white transition-colors hover:pl-1">Best Car Insurance USA 2026</a></li>
            <li><a href="/cheap-car-insurance-young-drivers" className="hover:text-white transition-colors hover:pl-1">Cheap Insurance Young Drivers</a></li>
            <li><a href="/auto-insurance-high-risk-drivers" className="hover:text-white transition-colors hover:pl-1">High-Risk Drivers Insurance</a></li>
            <li><a href="/full-coverage-insurance-providers" className="hover:text-white transition-colors hover:pl-1">Full Coverage Providers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Comparisons</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="/geico-vs-progressive" className="hover:text-white transition-colors hover:pl-1">GEICO vs Progressive</a></li>
            <li><a href="/statefarm-vs-allstate" className="hover:text-white transition-colors hover:pl-1">StateFarm vs Allstate</a></li>
            <li><a href="/liability-vs-full-coverage" className="hover:text-white transition-colors hover:pl-1">Liability vs Full Coverage</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Cost & Savings</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="/car-insurance-cost-usa" className="hover:text-white transition-colors hover:pl-1">Car Insurance Cost USA</a></li>
            <li><a href="/insurance-cost-texas" className="hover:text-white transition-colors hover:pl-1">Insurance Cost Texas</a></li>
            <li><a href="/full-coverage-cost-breakdown" className="hover:text-white transition-colors hover:pl-1">Full Coverage Cost Breakdown</a></li>
            <li><a href="/cheap-car-insurance-california" className="hover:text-white transition-colors hover:pl-1">Cheap Insurance California</a></li>
            <li><a href="/lowest-insurance-rates-near-me" className="hover:text-white transition-colors hover:pl-1">Lowest Rates Near Me</a></li>
            <li><a href="/cheap-auto-insurance-fast" className="hover:text-white transition-colors hover:pl-1">Cheap Auto Insurance Fast</a></li>
          </ul>
        </div>
      </div>


      <div className="border-t border-white/10 pt-8">
        <p className="text-slate-500 text-xs leading-relaxed mb-4">
          <strong className="text-slate-400">Advertiser Disclosure & Disclaimer:</strong> InsureComparePro is not a licensed insurance company or insurance agent. This site is an independent comparison resource providing educational content only. Some links on this site may be affiliate links - we may earn a commission at no extra cost to you. Rates shown are national averages for illustration only and do not constitute a binding quote. Actual rates depend on your specific profile, state, and coverage choices. Always verify rates and coverage directly with licensed insurance providers. Last updated January 2026.
        </p>
        <div className="flex flex-wrap gap-5 text-xs text-slate-500">
          {["Privacy Policy", "Terms of Use", "Advertiser Disclosure", "Accessibility Statement", "Sitemap"].map(l => (
            <div className="hover:text-slate-300 transition-colors">{l}</div>
          ))}
          <span className="md:ml-auto text-slate-600">© 2026 InsureComparePro. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;