// ============================================================
// App.js - Multi-Page Insurance Site with React Router
// 13 High-CPC SEO Pages | Lazy-Loaded | AdSense Optimized
// ============================================================

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ─────────────────────────────────────────────
// LAZY-LOADED PAGES - Best
// ─────────────────────────────────────────────
const BestCarInsuranceUSA = lazy(() =>
  import("./pages/best/BestCarInsuranceUSA")
);
const CheapCarInsuranceYoungDrivers = lazy(() =>
  import("./pages/best/CheapCarInsuranceYoungDrivers")
);
const AutoInsuranceHighRisk = lazy(() =>
  import("./pages/best/AutoInsuranceHighRisk")
);
const FullCoverageProviders = lazy(() =>
  import("./pages/best/FullCoverageProviders")
);

// ─────────────────────────────────────────────
// LAZY-LOADED PAGES - Compare (named exports)
// ─────────────────────────────────────────────
const GeicoVsProgressive = lazy(() =>
  import("./pages/compare/ComparePages").then(m => ({ default: m.GeicoVsProgressive }))
);
const StateFarmVsAllstate = lazy(() =>
  import("./pages/compare/ComparePages").then(m => ({ default: m.StateFarmVsAllstate }))
);
const LiabilityVsFullCoverage = lazy(() =>
  import("./pages/compare/ComparePages").then(m => ({ default: m.LiabilityVsFullCoverage }))
);

// ─────────────────────────────────────────────
// LAZY-LOADED PAGES - Cost (named exports)
// ─────────────────────────────────────────────
const CarInsuranceCostUSA = lazy(() =>
  import("./pages/cost/CostPages").then(m => ({ default: m.CarInsuranceCostUSA }))
);
const InsuranceCostTexas = lazy(() =>
  import("./pages/cost/CostPages").then(m => ({ default: m.InsuranceCostTexas }))
);
const FullCoverageCostBreakdown = lazy(() =>
  import("./pages/cost/CostPages").then(m => ({ default: m.FullCoverageCostBreakdown }))
);

// ─────────────────────────────────────────────
// LAZY-LOADED PAGES - Cheap (named exports)
// ─────────────────────────────────────────────
const CheapCarInsuranceCalifornia = lazy(() =>
  import("./pages/cheap/CheapPages").then(m => ({ default: m.CheapCarInsuranceCalifornia }))
);
const LowestInsuranceRatesNearMe = lazy(() =>
  import("./pages/cheap/CheapPages").then(m => ({ default: m.LowestInsuranceRatesNearMe }))
);
const CheapAutoInsuranceFast = lazy(() =>
  import("./pages/cheap/CheapPages").then(m => ({ default: m.CheapAutoInsuranceFast }))
);

// ─────────────────────────────────────────────
// PAGE LOADING SKELETON
// ─────────────────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center gap-4">
    <div className="flex items-center gap-2.5 mb-6">
      <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <span className="text-white font-extrabold text-base">InsureCompare<span className="text-[#22c55e]">Pro</span></span>
    </div>
    {/* Animated dots */}
    <div className="flex gap-2">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="w-2.5 h-2.5 bg-[#22c55e] rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
    <p className="text-slate-500 text-xs mt-2">Loading best insurance rates…</p>
  </div>
);

// ─────────────────────────────────────────────
// ROOT APP - BrowserRouter + Routes
// ─────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ── Default redirect ── */}
          <Route path="/" element={<Navigate to="/best-car-insurance-usa-2026" replace />} />

          {/* ── BEST PAGES ── */}
          <Route path="/best-car-insurance-usa-2026" element={<BestCarInsuranceUSA />} />
          <Route path="/cheap-car-insurance-young-drivers" element={<CheapCarInsuranceYoungDrivers />} />
          <Route path="/auto-insurance-high-risk-drivers" element={<AutoInsuranceHighRisk />} />
          <Route path="/full-coverage-insurance-providers" element={<FullCoverageProviders />} />

          {/* ── COMPARE PAGES ── */}
          <Route path="/geico-vs-progressive" element={<GeicoVsProgressive />} />
          <Route path="/statefarm-vs-allstate" element={<StateFarmVsAllstate />} />
          <Route path="/liability-vs-full-coverage" element={<LiabilityVsFullCoverage />} />

          {/* ── COST PAGES ── */}
          <Route path="/car-insurance-cost-usa" element={<CarInsuranceCostUSA />} />
          <Route path="/insurance-cost-texas" element={<InsuranceCostTexas />} />
          <Route path="/full-coverage-cost-breakdown" element={<FullCoverageCostBreakdown />} />

          {/* ── CHEAP PAGES ── */}
          <Route path="/cheap-car-insurance-california" element={<CheapCarInsuranceCalifornia />} />
          <Route path="/lowest-insurance-rates-near-me" element={<LowestInsuranceRatesNearMe />} />
          <Route path="/cheap-auto-insurance-fast" element={<CheapAutoInsuranceFast />} />

          {/* ── 404 fallback ── */}
          <Route path="*" element={<Navigate to="/best-car-insurance-usa-2026" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
