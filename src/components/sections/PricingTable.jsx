import React, { useState } from "react";
import { Check, X } from "lucide-react";

const PricingTableSection = () => {
  const [billing, setBilling] = useState("monthly");

  // -----------------------------
  // ✅ MONTHLY PLANS
  // -----------------------------
  const monthlyPlans = [
    {
      name: "Enterprise (Cloud Hosted)",
      price: "$5,000",
      period: "month",
      features: {
        queries: "20,000+ queries/month",
        docker: "One-click Docker deployment",
        sso: "SSO Authentication",
        tools: "Custom AI tools",
        onboarding: "White glove onboarding",
        support: "Priority support",
        rateLimit: "Up to 200 queries/minute",
        contracts: "SLA, MSA and DPA available",
      },
    },
    {
      name: "Enterprise (Self-hosted)",
      price: "N/A",
      period: "month",
      popular: true,
      features: {
        queries: "Unlimited queries",
        docker: "Self-hosted deployment",
        sso: "SSO Authentication",
        tools: "Custom AI tools",
        onboarding: "White glove onboarding",
        support: "Priority support",
        rateLimit: "No rate limits",
        contracts: "SLA, MSA and DPA available",
      },
    },
  ];

  // -----------------------------
  // ✅ ANNUAL PLANS
  // -----------------------------
  const annualPlans = [
    {
      name: "Enterprise (Cloud Hosted)",
      price: "$50,000+",
      period: "year",
      features: {
        queries: "20,000+ queries/month",
        docker: "One-click Docker deployment",
        sso: "SSO Authentication",
        tools: "Custom AI tools",
        onboarding: "White glove onboarding",
        support: "Priority support",
        rateLimit: "Up to 200 queries/minute",
        contracts: "SLA, MSA and DPA available",
      },
    },
    {
      name: "Enterprise (Self-hosted)",
      price: "$100,000+",
      period: "year",
      popular: true,
      features: {
        queries: "Unlimited queries",
        docker: "Self-hosted deployment",
        sso: "SSO Authentication",
        tools: "Custom AI tools",
        onboarding: "White glove onboarding",
        support: "Priority support",
        rateLimit: "No rate limits",
        contracts: "SLA, MSA and DPA available",
      },
    },
  ];

  // 🔁 Switch based on billing mode
  const plans = billing === "monthly" ? monthlyPlans : annualPlans;

  // -----------------------------
  // Feature labels (unchanged)
  // -----------------------------
  const featureLabels = {
    queries: "Queries",
    docker: "Deployment",
    sso: "SSO Authentication",
    tools: "Custom AI Tools",
    onboarding: "Onboarding",
    support: "Support",
    rateLimit: "Rate Limits",
    contracts: "Legal Agreements",
  };

  return (
    <section id="plans" className="bg-black text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-10">
          Choose your
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            plan
          </span>
        </h1>

        {/* ----------------------------- */}
        {/* Billing Toggle */}
        {/* ----------------------------- */}
        <div className="flex justify-center mb-10 gap-3">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billing === "monthly"
                ? "bg-lime-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("annual")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billing === "annual"
                ? "bg-lime-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            Annual
          </button>
        </div>

        {/* ----------------------------- */}
        {/* Pricing Table */}
        {/* ----------------------------- */}
        <div className="overflow-hidden rounded-2xl border border-gray-700">

          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray-900">
            <div className="p-6 border-r border-gray-700">
              <h3 className="text-lg font-semibold text-gray-400">Features</h3>
            </div>

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 text-center ${
                  plan.popular
                    ? "bg-lime-400/10 border-l-2 border-r-2 border-lime-400"
                    : ""
                } ${index < plans.length - 1 ? "border-r border-gray-700" : ""}`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-lime-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>

                {plan.popular && (
                  <div className="inline-block bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    Popular
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {Object.entries(featureLabels).map(([key, label], rowIndex) => (
            <div
              key={key}
              className={`grid grid-cols-3 ${
                rowIndex % 2 === 0 ? "bg-gray-900/50" : "bg-gray-900"
              }`}
            >
              {/* Feature Label */}
              <div className="p-4 border-r border-gray-700 flex items-center">
                <span className="font-medium text-gray-300">{label}</span>
              </div>

              {/* Feature Values */}
              {plans.map((plan, planIndex) => (
                <div
                  key={planIndex}
                  className={`p-4 text-center flex items-center justify-center ${
                    planIndex < plans.length - 1
                      ? "border-r border-gray-700"
                      : ""
                  } ${plan.popular ? "bg-lime-400/5" : ""}`}
                >
                  <span className="text-gray-200">
                    {plan.features[key] || <X className="text-gray-600" />}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-3 bg-gray-900 border-t border-gray-700">
            <div className="p-6 border-r border-gray-700"></div>

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 flex justify-center ${
                  index < plans.length - 1 ? "border-r border-gray-700" : ""
                } ${plan.popular ? "bg-lime-400/10" : ""}`}
              >
                <button
                  className={`px-6 py-3 font-semibold rounded-xl text-black shadow-lg transition-transform transform hover:scale-105 ${
                    plan.popular
                      ? "bg-lime-400 hover:bg-lime-600"
                      : "bg-lime-600 hover:bg-lime-700"
                  }`}
                >
                  Contact Us
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingTableSection;
