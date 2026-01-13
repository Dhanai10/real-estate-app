import React from "react";

const FloatingContact = () => {
  // You can replace the href with WhatsApp, phone, or contact page
  const handleClick = () => {
    window.open("https://wa.me/918072535369", "_blank");
  };

  return React.createElement(
    "div",
    {
      className: "floating-contact",
      onClick: handleClick,
      title: "Contact Us"
    },
    React.createElement("span", null, "📞")
  );
};

export default FloatingContact;
