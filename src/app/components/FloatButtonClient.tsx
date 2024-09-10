"use client";

import React from "react";
import { FloatButton } from "antd";

const FloatButtonClient = () => {
  return (
    <FloatButton.Group shape="square" type="primary" style={{ right: 14 }} className="bg-transparent">
      <FloatButton.BackTop className="animatedFloatButton" visibilityHeight={0} />
    </FloatButton.Group>
  );
};

export default FloatButtonClient;
