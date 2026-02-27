import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    orgType: "",
    role: "",
    interests: {
      portfolioPricing: false,
      stressTesting: false,
      auditCompliance: false,
      dataCloudIntegration: false,
      monteCarloCapabilities: false,
      ifrsCecl: false,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [key]: !prev.interests[key as keyof typeof prev.interests],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur sticky top-0 z-50">
        <div className="container py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold font-syne tracking-tight">
              PHOENIX
            </div>
            <div className="text-gray-500 text-sm font-light tracking-widest">
              INTELLEX
            </div>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded text-sm font-semibold hover:bg-gray-100 transition-colors">
            REQUEST ACCESS
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black py-20 border-b border-gray-800">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-gray-500 text-sm font-light tracking-widest mb-4">
              CREDIT DECISION INTELLIGENCE
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-syne tracking-tight mb-6 leading-tight">
              Convert distressed loans into defensible decisions.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Real-time analysis across BASE, ADVERSE, and SEVERE scenarios. Stress-tested against 14 quarters of real market data. EUR 1.145B validated.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-black py-16 border-b border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-gray-500 text-xs font-light tracking-widest mb-2">CAPITAL VALIDATED</p>
              <p className="text-4xl font-bold font-syne">EUR 1.145B</p>
              <p className="text-gray-500 text-sm mt-2">Across 2 live European deals</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-light tracking-widest mb-2">TRACKING ERROR</p>
              <p className="text-4xl font-bold font-syne">1.13%</p>
              <p className="text-gray-500 text-sm mt-2">14 quarters real market data</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-light tracking-widest mb-2">RUN TIME</p>
              <p className="text-4xl font-bold font-syne">&lt; 60 sec</p>
              <p className="text-gray-500 text-sm mt-2">Per portfolio analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-black py-20 border-b border-gray-800">
        <div className="container">
          <div className="mb-12">
            <p className="text-gray-500 text-xs font-light tracking-widest mb-4">01 — THE PROBLEM</p>
            <h2 className="text-4xl md:text-5xl font-bold font-syne tracking-tight mb-8">
              A EUR 500 million NPL portfolio should not take three weeks.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">THE CURRENT REALITY</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>3 weeks. 5 analysts. One defensible number.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>Recovery assumptions chosen by intuition.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>No systematic stress testing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>Audit trail lives in someone's spreadsheet.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>Mixed asset types handled inconsistently.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">WHAT PHOENIX DELIVERS</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>Under 60 seconds. One analyst. Three defensible scenarios.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>Recovery inferred from asset physics — no manual input.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>Base, stressed, and floor scenario in every run.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>Full audit trail — every decision logged and traceable.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600">—</span>
                  <span>RESI, land, developer, and commercial — one run.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Phoenix Does */}
      <section className="bg-black py-20 border-b border-gray-800">
        <div className="container">
          <div className="mb-12">
            <p className="text-gray-500 text-xs font-light tracking-widest mb-4">02 — CAPABILITIES</p>
            <h2 className="text-4xl md:text-5xl font-bold font-syne tracking-tight mb-8">
              Built for institutional counterparties.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-700 pl-8">
              <p className="text-gray-500 text-xs font-light tracking-widest mb-2">01</p>
              <h3 className="text-xl font-semibold mb-2">DEBT FUNDS</h3>
              <p className="text-gray-400">
                Acquires NPL portfolios from €5M–€500M. Focus on Southern European markets.
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-8">
              <p className="text-gray-500 text-xs font-light tracking-widest mb-2">02</p>
              <h3 className="text-xl font-semibold mb-2">INVESTMENT BANKS</h3>
              <p className="text-gray-400">
                Requires independent valuation for held assets and transaction support.
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-8">
              <p className="text-gray-500 text-xs font-light tracking-widest mb-2">03</p>
              <h3 className="text-xl font-semibold mb-2">SERVICERS</h3>
              <p className="text-gray-400">
                Manages NPL portfolios requiring analytics for reporting and workout strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="bg-black py-20 border-b border-gray-800">
        <div className="container">
          <div className="mb-12">
            <p className="text-gray-500 text-xs font-light tracking-widest mb-4">ASSET CLASSES</p>
            <h2 className="text-3xl font-bold font-syne tracking-tight">
              Four asset types. One analytical engine.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-white">RESIDENTIAL</h3>
              <p className="text-gray-400 text-sm">
                Mortgage loans secured on residential property. Recovery accounts for judicial enforcement timelines.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-white">LAND</h3>
              <p className="text-gray-400 text-sm">
                Undeveloped land with no income stream. Recovery based on forced-sale values with disposal discounts.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-white">DEVELOPER LOANS</h3>
              <p className="text-gray-400 text-sm">
                Loans to property developers. Priced against projected completion value adjusted for construction risk.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-white">COMMERCIAL</h3>
              <p className="text-gray-400 text-sm">
                Income-producing commercial assets. Recovery anchored to stressed capitalization rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Validated Results */}
      <section className="bg-black py-20 border-b border-gray-800">
        <div className="container">
          <div className="mb-12">
            <p className="text-gray-500 text-xs font-light tracking-widest mb-4">03 — VALIDATED RESULTS</p>
            <h2 className="text-4xl md:text-5xl font-bold font-syne tracking-tight">
              Tested against real market outcomes.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Deal 1 — EUR 480M Spanish Residential RMBS (2021)</h3>
              <p className="text-gray-400 mb-6">
                Phoenix was run against this transaction and compared to the published pre-sale analysis from Scope Ratings.
              </p>
              <div className="bg-gray-900/50 rounded p-4 text-sm font-mono text-gray-300">
                <p>Senior tranche return deviation from Scope Ratings: &lt; 10 basis points</p>
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Deal 2 — EUR 665M Italian Split-Priority RMBS (2024)</h3>
              <p className="text-gray-400 mb-6">
                Non-standard 55/45 split-priority amortisation structure with bank counterparty interest rate swap. Phoenix correctly identified and modelled both structural features.
              </p>
              <div className="bg-gray-900/50 rounded p-4 text-sm font-mono text-gray-300">
                <p>EUR 1.9M interest shortfall under stress conditions correctly identified</p>
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Real-Market Cashflow Backtest — 14 Quarters</h3>
              <p className="text-gray-400 mb-6">
                Engine output against real money, real dates, real amortisation observed in quarterly remittance reports.
              </p>
              <div className="bg-gray-900/50 rounded p-4 text-sm font-mono text-gray-300">
                <p>Mean tracking error: 1.13% over 14 consecutive quarters</p>
                <p>Maximum single-quarter deviation: 2.25%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-black py-20 border-b border-gray-800">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-syne tracking-tight mb-4">
              Get in touch to learn more about Phoenix
            </h2>
            <p className="text-gray-400">
              Qualified institutions only. Strict vetting process applied.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  FIRST NAME *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="phoenix-input"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  LAST NAME *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="phoenix-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  BUSINESS EMAIL *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="phoenix-input"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  COMPANY NAME *
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="phoenix-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="country" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  COUNTRY *
                </Label>
                <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                  <SelectTrigger className="phoenix-input">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="spain">Spain</SelectItem>
                    <SelectItem value="italy">Italy</SelectItem>
                    <SelectItem value="portugal">Portugal</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="greece">Greece</SelectItem>
                    <SelectItem value="ireland">Ireland</SelectItem>
                    <SelectItem value="netherlands">Netherlands</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  PHONE NUMBER *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="phoenix-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="orgType" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  ORGANIZATION TYPE *
                </Label>
                <Select value={formData.orgType} onValueChange={(value) => handleSelectChange("orgType", value)}>
                  <SelectTrigger className="phoenix-input">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="bank">Commercial & Investment Bank</SelectItem>
                    <SelectItem value="fund">Distressed Debt Fund</SelectItem>
                    <SelectItem value="asset">Asset Management Company</SelectItem>
                    <SelectItem value="insurance">Insurance Company</SelectItem>
                    <SelectItem value="sovereign">Sovereign & Regulatory Body</SelectItem>
                    <SelectItem value="family">Family Office & Private Credit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="role" className="text-gray-300 text-sm font-light tracking-wide mb-2 block">
                  PRIMARY ROLE *
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
                  <SelectTrigger className="phoenix-input">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="credit">Credit Officer</SelectItem>
                    <SelectItem value="portfolio">Portfolio Manager</SelectItem>
                    <SelectItem value="risk">Risk Manager</SelectItem>
                    <SelectItem value="trading">Trading</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-gray-300 text-sm font-light tracking-wide mb-4 block">
                INTERESTED IN *
              </Label>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="portfolioPricing"
                    checked={formData.interests.portfolioPricing}
                    onCheckedChange={() => handleCheckboxChange("portfolioPricing")}
                    className="border-gray-600"
                  />
                  <label htmlFor="portfolioPricing" className="text-gray-400 cursor-pointer">
                    Portfolio Pricing
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="stressTesting"
                    checked={formData.interests.stressTesting}
                    onCheckedChange={() => handleCheckboxChange("stressTesting")}
                    className="border-gray-600"
                  />
                  <label htmlFor="stressTesting" className="text-gray-400 cursor-pointer">
                    Stress Testing
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="auditCompliance"
                    checked={formData.interests.auditCompliance}
                    onCheckedChange={() => handleCheckboxChange("auditCompliance")}
                    className="border-gray-600"
                  />
                  <label htmlFor="auditCompliance" className="text-gray-400 cursor-pointer">
                    Audit & Compliance
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="dataCloudIntegration"
                    checked={formData.interests.dataCloudIntegration}
                    onCheckedChange={() => handleCheckboxChange("dataCloudIntegration")}
                    className="border-gray-600"
                  />
                  <label htmlFor="dataCloudIntegration" className="text-gray-400 cursor-pointer">
                    Data Cloud Integration
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="monteCarloCapabilities"
                    checked={formData.interests.monteCarloCapabilities}
                    onCheckedChange={() => handleCheckboxChange("monteCarloCapabilities")}
                    className="border-gray-600"
                  />
                  <label htmlFor="monteCarloCapabilities" className="text-gray-400 cursor-pointer">
                    Monte Carlo Capabilities
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="ifrsCecl"
                    checked={formData.interests.ifrsCecl}
                    onCheckedChange={() => handleCheckboxChange("ifrsCecl")}
                    className="border-gray-600"
                  />
                  <label htmlFor="ifrsCecl" className="text-gray-400 cursor-pointer">
                    IFRS 9 / CECL Modeling
                  </label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-100 transition-colors text-base"
            >
              SUBMIT ACCESS REQUEST
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-gray-500 text-sm">
                Phoenix · Intellex · Credit Decision Intelligence
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Validated on EUR 1.145 billion · February 2026
              </p>
            </div>
            <div className="text-gray-500 text-xs">
              <p>Confidential · For Qualified Institutions Only</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
