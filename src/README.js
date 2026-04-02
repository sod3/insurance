// ============================================================
// InsureComparePro - Multi-Page Insurance Site
// React Router SPA | 13 High-CPC SEO Pages | AdSense Optimized
// ============================================================
// 
// PROJECT STRUCTURE:
// src/
//   App.jsx                               ← Root with BrowserRouter + Routes (lazy-loaded)
//   components/
//     shared.jsx                          ← ALL reusable components
//   pages/
//     best/
//       BestCarInsuranceUSA.jsx           ← /best-car-insurance-usa-2026
//       CheapCarInsuranceYoungDrivers.jsx ← /cheap-car-insurance-young-drivers
//       AutoInsuranceHighRisk.jsx         ← /auto-insurance-high-risk-drivers
//       FullCoverageProviders.jsx         ← /full-coverage-insurance-providers
//     compare/
//       ComparePages.jsx                  ← 3 compare pages (named exports)
//     cost/
//       CostPages.jsx                     ← 3 cost pages (named exports)
//     cheap/
//       CheapPages.jsx                    ← 3 cheap pages (named exports)
//
// ROUTES IMPLEMENTED:
// /best-car-insurance-usa-2026
// /cheap-car-insurance-young-drivers
// /auto-insurance-high-risk-drivers
// /full-coverage-insurance-providers
// /geico-vs-progressive
// /statefarm-vs-allstate
// /liability-vs-full-coverage
// /car-insurance-cost-usa
// /insurance-cost-texas
// /full-coverage-cost-breakdown
// /cheap-car-insurance-california
// /lowest-insurance-rates-near-me
// /cheap-auto-insurance-fast
//
// SETUP INSTRUCTIONS:
// 1. npm install react-router-dom
// 2. Copy all files into src/ as described above
// 3. Tailwind CSS required (already in your project)
// 4. Replace <AdSlot /> components with actual Google AdSense ins tags
// 5. Replace CTAButton href="#" with your affiliate tracking links
//
// ============================================================
// ADSENSE INTEGRATION NOTES:
// ============================================================
// 
// Replace AdSlot component in shared.jsx with:
//
// export const AdSlot = ({ slot }) => (
//   <ins
//     className="adsbygoogle"
//     style={{ display: "block" }}
//     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
//     data-ad-slot={slot}
//     data-ad-format="auto"
//     data-full-width-responsive="true"
//   />
// );
//
// Add to each page's useEffect:
// (window.adsbygoogle = window.adsbygoogle || []).push({});
//
// AD SLOT PLACEMENTS PER PAGE:
// ① top-leaderboard     - above the fold, below navbar (PageLayout)
// ② post-intro          - after intro section (high engagement)
// ③ mid-content-1       - inside main content grid
// ④ mid-content-2       - after 2nd major section
// ⑤ pre-faq             - before FAQ (high user intent zone)
// ⑥ pre-final-cta       - before final CTA (FinalCTA component)
//
// ============================================================
// SEO NOTES:
// ============================================================
//
// Each page sets document.title via PageLayout's useEffect.
// Add react-helmet-async for full <head> meta tag control:
//
// <Helmet>
//   <title>{title}</title>
//   <meta name="description" content={description} />
//   <link rel="canonical" href={`https://yoursite.com${pathname}`} />
//   <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
// </Helmet>
//
// FAQ Schema (add to each FAQ section for rich results):
// {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": faqs.map(q => ({
//     "@type": "Question",
//     "name": q.question,
//     "acceptedAnswer": { "@type": "Answer", "text": q.answer }
//   }))
// }
//
// ============================================================

export const PROJECT_README = true;
