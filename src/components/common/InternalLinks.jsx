import React from "react";

const InternalLinks = ({ title = "Related Articles" }) => {
  const links = [
    { href: "/best-car-insurance-usa-2026", label: "Best Car Insurance USA 2026" },
    { href: "/cheap-car-insurance-young-drivers", label: "Cheap Car Insurance for Young Drivers" },
    { href: "/auto-insurance-high-risk-drivers", label: "Auto Insurance for High-Risk Drivers" },
    { href: "/full-coverage-insurance-providers", label: "Full Coverage Insurance Providers" },
    { href: "/geico-vs-progressive", label: "GEICO vs Progressive Comparison" },
    { href: "/statefarm-vs-allstate", label: "StateFarm vs Allstate Comparison" },
    { href: "/liability-vs-full-coverage", label: "Liability vs Full Coverage" },
    { href: "/car-insurance-cost-usa", label: "Car Insurance Cost USA" },
    { href: "/insurance-cost-texas", label: "Insurance Cost Texas" },
    { href: "/full-coverage-cost-breakdown", label: "Full Coverage Cost Breakdown" },
    { href: "/cheap-car-insurance-california", label: "Cheap Car Insurance California" },
    { href: "/lowest-insurance-rates-near-me", label: "Lowest Insurance Rates Near Me" },
    { href: "/cheap-auto-insurance-fast", label: "Cheap Auto Insurance Fast" },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-[#22c55e] hover:underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;