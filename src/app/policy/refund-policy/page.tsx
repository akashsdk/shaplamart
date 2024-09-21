"use client";
import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>

      <p className="mb-4">
        At <strong>ShaplaMart</strong>, we strive to ensure customer satisfaction with every purchase. However, if you
        are not entirely satisfied with your order, we are here to help with our refund and return policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Returns</h2>
      <p className="mb-4">
        You have <strong>7 days</strong> to return an item from the date you received it. To be eligible for a return,
        your item must be unused and in the same condition that you received it. It must also be in the original
        packaging.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Refund Conditions</h2>
      <p className="mb-4">
        Once we receive your returned item, we will inspect it and notify you of the status of your refund. If your
        return is approved, we will initiate a refund to your original payment method. Please note:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>The product must be unused and undamaged.</li>
        <li>Returns must include the original packaging and labels.</li>
        <li>Refunds will be processed within 7 business days after we receive the item.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Non-Refundable Items</h2>
      <p className="mb-4">
        Some items are not eligible for return or refund, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personalized or customized products.</li>
        <li>Perishable goods like skincare products, if opened.</li>
        <li>Items on clearance or sale.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Shipping Costs</h2>
      <p className="mb-4">
        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are
        non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund (if
        applicable).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. How to Request a Return</h2>
      <p className="mb-4">
        To request a return, contact us at{" "}
        <a href="mailto:support@shaplamart.com" className="text-blue-600 hover:underline">support@shaplamart.com</a>
        with your order number and reason for the return. We will provide instructions on how to proceed.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Late or Missing Refunds</h2>
      <p className="mb-4">
        If you haven&quot;t received a refund yet, first check your bank account or credit card provider. It may take some
        time before your refund is officially posted. If you&quot;ve done this and you still have not received your refund,
        please contact us at{" "}
        <a href="mailto:support@shaplamart.com" className="text-blue-600 hover:underline">support@shaplamart.com</a>.
      </p>

      <p className="text-center text-gray-500 mt-10">© {new Date().getFullYear()} ShaplaMart. All rights reserved.</p>
    </div>
  );
};

export default RefundPolicy;
