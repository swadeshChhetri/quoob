import React from "react";
import { Check, X } from "lucide-react";

const PricingTableSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "month",
      features: {
        websites: "1 Website",
        callSpeeds: "ID card calls speeds",
        email: "Free Email Address",
        webBuilder: "Basic Web Builder",
        ssl: "No SSL Certificate",
        support: "Limited support",
      },
    },
    {
      name: "Advanced",
      price: "$29",
      period: "month",
      popular: true,
      features: {
        websites: "I/O WebShare",
        callSpeeds: "ISO call link speeds",
        email: "Free Email Address",
        webBuilder: "Advanced Web Builder",
        ssl: "Free SSL Certificate",
        support: "Unlimited support",
      },
    },
    {
      name: "Premium",
      price: "$49",
      period: "month",
      features: {
        websites: "I/B1 WebShare",
        callSpeeds: "I/100 call link speeds",
        email: "Free Email Address",
        webBuilder: "Advanced Web Builder",
        ssl: "Free SSL Certificate",
        support: "Unlimited support",
      },
    },
  ];

  const featureLabels = {
    websites: "Websites",
    callSpeeds: "Call Speeds",
    email: "Email",
    webBuilder: "Web Builder",
    ssl: "SSL Certificate",
    support: "Support",
  };

  return (
    <section id="plans" className="bg-black text-white">
      <div className="mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
          Choose your
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            plan
          </span>
        </h1>

        <div className="overflow-hidden rounded-2xl border border-gray-700">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-900">
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
                } ${
                  index < plans.length - 1 ? "border-r border-gray-700" : ""
                }`}
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
              className={`grid grid-cols-4 ${
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
                  {typeof plan.features[key] === "boolean" ? (
                    plan.features[key] ? (
                      <Check className="w-5 h-5 text-lime-400" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500" />
                    )
                  ) : (
                    <span className="text-gray-200">{plan.features[key]}</span>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-4 bg-gray-900 border-t border-gray-700">
            <div className="p-6 border-r border-gray-700"></div>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 flex justify-center ${
                  index < plans.length - 1 ? "border-r border-gray-700" : ""
                } ${plan.popular ? "bg-lime-400/10" : ""}`}
              >
                {/* Enhanced Button */}
                <button
                  className={`px-6 py-3 font-semibold rounded-xl text-black shadow-lg transition-transform transform hover:scale-105 ${
                    plan.popular
                      ? "bg-lime-400 hover:bg-lime-600 hover:from-lime-500 hover:to-lime-700"
                      : "bg-lime-600 hover:bg-lime-700"
                  }`}
                >
                  Choose Plan
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
