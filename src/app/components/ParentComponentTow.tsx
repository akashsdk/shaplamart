// ParentComponent.tsx
"use client";
import React from "react";
import HeaderTow from "./HeaderTow";

const ParentComponentTow = () => {
  return (
    <div className="h-auto shadow-md">
      {/* Other content */}
      <HeaderTow />
    </div>
  );
};

export default ParentComponentTow;
