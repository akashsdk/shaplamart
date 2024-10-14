"use client";
import React from "react";
import { Button, Result, message } from 'antd';
import Link from "next/link";

const Results: React.FC = () => {
  const orderNumber = "2017182818828182881"; // Mock order number

  // Function to copy the order number
  const handleCopyOrderNumber = () => {
    navigator.clipboard.writeText(orderNumber).then(() => {
      message.success("Order number copied to clipboard!");
    }).catch(() => {
      message.error("Failed to copy the order number.");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen border-t">
      <Result
        status="success"
        title="Successfully Purchased Your Order!"
        subTitle={`Order number: ${orderNumber}. Cloud server configuration takes 1-5 minutes.`}
        extra={[
          <Link href='/' key="console" className="bg-blue-600 p-2 text-white rounded-md">
            Go to Home
          </Link>,
          <Button key="copy" onClick={handleCopyOrderNumber}>
            Copy Order Number
          </Button>,
        ]}
      />
    </div>
  );
};

export default Results;
