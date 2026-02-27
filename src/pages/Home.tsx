import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Clean, Professional, Minimal
 * - Light background with black text (high contrast)
 * - Sans-serif typography for clarity
 * - Institutional aesthetic reflecting financial services
 * - Emphasis on data and credibility
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <div className="font-bold text-sm">PHOENIX · INTELLEX</div>
              <div className="text-xs text-gray-600">Credit Decision Intelligence</div>
            </div>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800">
            Request Access
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-gray-500 mb-4 tracking-widest">
              INSTITUTIONAL · RESTRICTED ACCESS
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Credit Decision Intelligence for European Distressed Assets
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We turn a distressed loan portfolio into a single defensible answer. Not a range. Not a model output. A decision — with the evidence to support it in any room.
            </p>
            <div className="flex gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Request Private Pilot
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-50 px-8 py-3">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">EUR 1.145B</div>
              <div className="text-sm text-gray-600">Validated across two live European structured credit deals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1.13%</div>
              <div className="text-sm text-gray-600">Mean tracking error across 14 consecutive quarters</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2.25%</div>
              <div className="text-sm text-gray-600">Maximum single-quarter deviation in Spanish deal</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt; 60 sec</div>
              <div className="text-sm text-gray-600">Time to produce complete three-scenario decision output</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <div className="text-xs font-bold text-gray-500 mb-4 tracking-widest">01 · THE PROBLEM</div>
              <h2 className="text-3xl font-bold mb-6">Every NPL bid is a bet</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The question is whether your bet is informed or not. Buying a distressed loan portfolio is one of the highest-conviction decisions in credit investing. You are committing capital today against cashflows that are uncertain, secured against collateral that is illiquid, in judicial systems that move slowly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The margin between a good deal and a capital-destroying one is narrow. The standard underwriting process produces an answer — but rarely a defensible one.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 mb-4 tracking-widest">02 · WHAT WE DELIVER</div>
              <h2 className="text-3xl font-bold mb-6">One output. Three components.</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-bold mb-2">The Entry Price</div>
                  <p className="text-gray-700 text-sm">The defensible acquisition price derived from the actual characteristics of each loan, the collateral behind it, and the legal environment it sits in.</p>
                </div>
                <div>
                  <div className="font-bold mb-2">The Three Scenarios</div>
                  <p className="text-gray-700 text-sm">Base, stressed, and floor — each with an exact price and probability of loss. You know what happens under normal conditions, under a default spike, and at the absolute limit.</p>
                </div>
                <div>
                  <div className="font-bold mb-2">The Rejection List</div>
                  <p className="text-gray-700 text-sm">The specific loans or clusters that carry disproportionate risk. Exclude them — or apply the stated discount. What remains is clean.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold text-gray-500 mb-4 tracking-widest">03 · WHAT WE ANALYSE</div>
          <h2 className="text-3xl font-bold mb-12">Four asset classes in one run</h2>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="font-bold mb-3">RESIDENTIAL</div>
              <p className="text-sm text-gray-700">Mortgage loans secured on residential property. Recovery reflects judicial enforcement timelines and regional auction dynamics.</p>
            </div>
            <div>
              <div className="font-bold mb-3">LAND</div>
              <p className="text-sm text-gray-700">Undeveloped land. Priced on forced-sale basis with the elevated discount that land commands at auction.</p>
            </div>
            <div>
              <div className="font-bold mb-3">DEVELOPER LOANS</div>
              <p className="text-sm text-gray-700">Loans to developers. Valued against projected completion adjusted for stressed build-out risk.</p>
            </div>
            <div>
              <div className="font-bold mb-3">COMMERCIAL</div>
              <p className="text-sm text-gray-700">Income-producing assets. Recovery anchored to stressed capitalisation rates under forced-sale conditions.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              <strong>Jurisdictions validated and operational:</strong> Spain · Italy
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Architecture for six additional markets:</strong> Portugal · France · Germany · Greece · Ireland · Netherlands
            </p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold text-gray-500 mb-4 tracking-widest">04 · THE TRACK RECORD</div>
          <h2 className="text-3xl font-bold mb-12">Two live deals. Real data. Published benchmarks.</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Deal 1 — EUR 480M Spanish Residential RMBS · 2021</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-3 px-4 font-bold text-sm">TRANCHE</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">NOTIONAL</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">RETURN</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">LIFE</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">P(LOSS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Senior</td>
                    <td className="py-3 px-4">EUR 382M</td>
                    <td className="py-3 px-4">0.70%</td>
                    <td className="py-3 px-4">6.95 yrs</td>
                    <td className="py-3 px-4">0.060%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Class Z</td>
                    <td className="py-3 px-4">EUR 50M</td>
                    <td className="py-3 px-4">0.10%</td>
                    <td className="py-3 px-4">19.42 yrs</td>
                    <td className="py-3 px-4">2.260%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Mezzanine</td>
                    <td className="py-3 px-4">EUR 26.4M</td>
                    <td className="py-3 px-4">0.80%</td>
                    <td className="py-3 px-4">23.93 yrs</td>
                    <td className="py-3 px-4">13.730%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 px-4">Junior</td>
                    <td className="py-3 px-4">EUR 21.6M</td>
                    <td className="py-3 px-4">0.67%</td>
                    <td className="py-3 px-4">27.58 yrs</td>
                    <td className="py-3 px-4">95.170%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">Senior tranche return: less than 10 basis points from Scope Ratings published benchmark.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Deal 2 — EUR 665M Italian Split-Priority RMBS · 2024</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-3 px-4 font-bold text-sm">TRANCHE</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">NOTIONAL</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">RETURN</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">LIFE</th>
                    <th className="text-left py-3 px-4 font-bold text-sm">P(LOSS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Senior A1</td>
                    <td className="py-3 px-4">EUR 365.7M</td>
                    <td className="py-3 px-4">4.23%</td>
                    <td className="py-3 px-4">5.55 yrs</td>
                    <td className="py-3 px-4">0.62%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Senior A2</td>
                    <td className="py-3 px-4">EUR 186.1M</td>
                    <td className="py-3 px-4">4.11%</td>
                    <td className="py-3 px-4">2.68 yrs</td>
                    <td className="py-3 px-4">0.20%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 px-4">Junior</td>
                    <td className="py-3 px-4">EUR 113.2M</td>
                    <td className="py-3 px-4">—</td>
                    <td className="py-3 px-4">—</td>
                    <td className="py-3 px-4">60.61%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">Validated against a non-standard 55/45 split-priority amortisation structure with an active interest rate swap. Identified a EUR 1.9M shortfall under stress conditions at the swap priority step.</p>
          </div>
        </div>
      </section>

      {/* Who Uses This */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold text-gray-500 mb-4 tracking-widest">05 · WHO USES THIS</div>
          <h2 className="text-3xl font-bold mb-12">Built for institutional decision-makers</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-200">
              <div className="font-bold mb-2">Distressed Debt & Credit Funds</div>
              <p className="text-sm text-gray-700 mb-3">Pre-bid underwriting on NPL portfolio acquisitions</p>
              <p className="text-sm text-gray-600">Entry price at three stress levels. Which loans to exclude. What changes the decision.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="font-bold mb-2">Shadow Banks & Direct Lenders</div>
              <p className="text-sm text-gray-700 mb-3">Evaluating opportunistic real estate credit positions</p>
              <p className="text-sm text-gray-600">Asset-level recovery grounded in jurisdiction-specific auction mechanics — not benchmarks.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="font-bold mb-2">Special Situations Investors</div>
              <p className="text-sm text-gray-700 mb-3">Mixed-asset portfolios where standard tools fail</p>
              <p className="text-sm text-gray-600">Four asset classes in one run. RESI, land, developer loans, and commercial priced consistently.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="font-bold mb-2">Bank Resolution & Bad Bank Disposal</div>
              <p className="text-sm text-gray-700 mb-3">Portfolio disposal at mandated value</p>
              <p className="text-sm text-gray-600">Forced liquidation scenario. Sovereign guarantee waterfall. Timeline sensitivity.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="font-bold mb-2">Credit Fund Co-Investors & LPs</div>
              <p className="text-sm text-gray-700 mb-3">Pre-commitment due diligence</p>
              <p className="text-sm text-gray-600">Independent verification of sponsor underwriting before capital is committed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The First Step */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold text-gray-500 mb-4 tracking-widest">06 · THE FIRST STEP</div>
          <h2 className="text-3xl font-bold mb-12">We offer one free analysis on a portfolio sample of your choice</h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="font-bold mb-3">NDA</div>
              <p className="text-gray-700 text-sm mb-6">A standard data processing agreement before any portfolio data is shared.</p>
              
              <div className="font-bold mb-3">Sample Tape</div>
              <p className="text-gray-700 text-sm mb-6">500 to 2,000 loans. However messy the file — our intake layer handles the preparation.</p>
            </div>
            <div>
              <div className="font-bold mb-3">24 Hours</div>
              <p className="text-gray-700 text-sm mb-6">Two-page Decision Report. Entry price. Three scenarios. Rejection list. Thresholds.</p>
              
              <div className="font-bold mb-3">Your Evaluation</div>
              <p className="text-gray-700 text-sm mb-6">Compare against your own underwriting. The numbers either hold up or they do not.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700">
              This is not a demonstration environment or a synthetic dataset. You send a real portfolio sample. We return a real decision output on that specific portfolio. The evidence of what Phoenix does is in the output — not in this document.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in touch to learn more about Phoenix®</h2>
          <p className="text-center text-gray-600 mb-12">Qualified institutions only. Strict vetting process applied.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">FIRST NAME *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">LAST NAME *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">BUSINESS EMAIL *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">COMPANY NAME *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">COUNTRY *</label>
                <select className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required>
                  <option value="">Select Country</option>
                  <option>Spain</option>
                  <option>Germany</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>France</option>
                  <option>Italy</option>
                  <option>Portugal</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">PHONE NUMBER *</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">ORGANIZATION TYPE *</label>
                <select className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required>
                  <option value="">Select Type</option>
                  <option>Asset Management</option>
                  <option>Bank or Financial Institution</option>
                  <option>Debt Fund</option>
                  <option>Insurance Company</option>
                  <option>Pension Fund</option>
                  <option>Servicer</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 tracking-widest">PRIMARY ROLE *</label>
                <select className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-black" required>
                  <option value="">Select Role</option>
                  <option>Portfolio Manager</option>
                  <option>Risk Manager</option>
                  <option>Quantitative Analyst</option>
                  <option>CIO / CFO / COO</option>
                  <option>Head of Analytics</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-4 tracking-widest">INTERESTED IN</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Portfolio Pricing</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Stress Testing</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Audit & Compliance</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">IFRS 9 / CECL Modeling</span>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white py-4 font-bold hover:bg-gray-800 mt-8">
              SUBMIT ACCESS REQUEST →
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-sm text-gray-600">
            <div>Phoenix Intellex © 2026</div>
            <div className="text-center">SYSTEM STATUS: OPERATIONAL</div>
            <div className="text-right">
              <a href="#" className="hover:text-black">DOCS</a> · <a href="#" className="hover:text-black">LEGAL</a> · <a href="#" className="hover:text-black">PRIVACY</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
