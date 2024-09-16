// ParentComponent.tsx
"use client";
import React from "react";
import Header from "./Header";
import HeaderTow from "./HeaderTow";

const ParentComponent = () => {
  return (
    <div>
      {/* Other content */}
      <Header />
      <HeaderTow />
    </div>
  );
};

export default ParentComponent;
