"use client";

import React from "react";

const Button = ({ label, href, onClick }) => {
  return (
    <button
      onClick={() => {
        if (href) {
          window.open(href, "_blank");
        } else if (onClick) {
          onClick();
        } else {
          console.log("No action");
        }
      }}
      className="nx-border nx-border-white/50 nx-min-w-32 nx-w-fit nx-min-h-8 nx-px-4 nx-py-1 nx-bg-blue-600 nx-rounded-md nx-font-medium"
    >
      {label}
    </button>
  );
};

export default Button;
