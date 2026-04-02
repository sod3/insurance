import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SidebarAd from "./components/layout/SidebarAd";
import Ad from "./components/common/Ad";
import HeroSection from "./components/sections/HeroSection";
import CompareSection from "./components/sections/CompareSection";
import CompaniesSection from "./components/sections/CompaniesSection";
import PricingSection from "./components/sections/PricingSection";
import CheapOptionsSection from "./components/sections/CheapOptionsSection";
import CoverageSection from "./components/sections/CoverageSection";
import StateGuidesSection from "./components/sections/StateGuidesSection";
import LowerPremiumsSection from "./components/sections/LowerPremiumSection";
import FAQSection from "./components/sections/FaqSection";
import useSmoothScrollReveal from "./components/hooks/useSmoothScrollReveal";

// Import all new pages
import BestCarInsuranceUSA from "./pages/BestCarInsuranceUSA";
import CheapCarInsuranceYoungDrivers from "./pages/CheapCarInsuranceYoungDrivers";
import AutoInsuranceHighRiskDrivers from "./pages/AutoInsuranceHighRiskDrivers";
import FullCoverageInsuranceProviders from "./pages/FullCoverageInsuranceProviders";
import GeicoVsProgressive from "./pages/GeicoVsProgressive";
import StatefarmVsAllstate from "./pages/StatefarmVsAllstate";
import LiabilityVsFullCoverage from "./pages/LiabilityVsFullCoverage";
import CarInsuranceCostUSA from "./pages/CarInsuranceCostUSA";
import InsuranceCostTexas from "./pages/InsuranceCostTexas";
import FullCoverageCostBreakdown from "./pages/FullCoverageCostBreakdown";
import CheapCarInsuranceCalifornia from "./pages/CheapCarInsuranceCalifornia";
import LowestInsuranceRatesNearMe from "./pages/LowestInsuranceRatesNearMe";
import CheapAutoInsuranceFast from "./pages/CheapAutoInsuranceFast";

function HomePage() {
  useSmoothScrollReveal();

  return (
    <>
      {/* <div className="bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2">
          <Ad type="leaderboard" label="Advertisement" slot="top-leaderboard" />
        </div>
      </div> */}

      <HeroSection />

      {/* <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Ad type="rectangle" label="Advertisement" slot="post-hero-rectangle" />
        </div>
      </div> */}

      <div className="flex gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="flex-1 min-w-0">
          <CompareSection />
          <CompaniesSection />

          {/* <div className="py-6">
            <Ad type="rectangle" label="Advertisement" slot="mid-content-1" />
          </div> */}

          <PricingSection />
          <CheapOptionsSection />
{/* 
          <div className="py-6">
            <Ad type="inline" label="Advertisement" slot="mid-content-2" />
          </div> */}

          <CoverageSection />
          <StateGuidesSection />

          {/* <div className="py-6">
            <Ad type="rectangle" label="Advertisement" slot="pre-tips" />
          </div> */}

          <LowerPremiumsSection />
          <FAQSection />

          {/* <div className="bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Ad type="rectangle" label="Advertisement" slot="end-of-page" />
            </div>
          </div> */}
        </main>

        {/* <SidebarAd /> */}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-white text-[#0f172a]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/best-car-insurance-usa-2026" element={<BestCarInsuranceUSA />} />
          <Route path="/cheap-car-insurance-young-drivers" element={<CheapCarInsuranceYoungDrivers />} />
          <Route path="/auto-insurance-high-risk-drivers" element={<AutoInsuranceHighRiskDrivers />} />
          <Route path="/full-coverage-insurance-providers" element={<FullCoverageInsuranceProviders />} />
          <Route path="/geico-vs-progressive" element={<GeicoVsProgressive />} />
          <Route path="/statefarm-vs-allstate" element={<StatefarmVsAllstate />} />
          <Route path="/liability-vs-full-coverage" element={<LiabilityVsFullCoverage />} />
          <Route path="/car-insurance-cost-usa" element={<CarInsuranceCostUSA />} />
          <Route path="/insurance-cost-texas" element={<InsuranceCostTexas />} />
          <Route path="/full-coverage-cost-breakdown" element={<FullCoverageCostBreakdown />} />
          <Route path="/cheap-car-insurance-california" element={<CheapCarInsuranceCalifornia />} />
          <Route path="/lowest-insurance-rates-near-me" element={<LowestInsuranceRatesNearMe />} />
          <Route path="/cheap-auto-insurance-fast" element={<CheapAutoInsuranceFast />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;