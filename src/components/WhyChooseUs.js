import React from "react";
import { FaCheckCircle, FaUserShield, FaHeadset, FaAward } from "react-icons/fa";
import "../assets/css/WhyChooseUs.css";

const features = [
  {
    icon: FaCheckCircle,
    title: "Verified Properties",
    description: "All listings are verified and legally approved.",
  },
  {
    icon: FaUserShield,
    title: "Legal Support",
    description: "We assist you with all legal formalities and documents.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Assistance",
    description: "Our consultants are available round the clock for you.",
  },
  {
    icon: FaAward,
    title: "10+ Years Experience",
    description: "Trusted by thousands of satisfied clients over the years.",
  },
];

const WhyChooseUs = () => {
  return React.createElement(
    "section",
    { className: "why-choose-us py-5 bg-light" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        { className: "text-center mb-5" },
        "Why Choose Us"
      ),
      React.createElement(
        "div",
        { className: "row" },
        features.map(function(feature, index) {
          return React.createElement(
            "div",
            { className: "col-12 col-sm-6 col-md-3 mb-4 text-center", key: index },
            React.createElement(
              "div",
              { className: "feature-icon mb-3" },
              React.createElement(feature.icon, { size: 40, color: "#007bff" })
            ),
            React.createElement("h5", null, feature.title),
            React.createElement("p", { className: "text-muted" }, feature.description)
          );
        })
      )
    )
  );
};

export default WhyChooseUs;
