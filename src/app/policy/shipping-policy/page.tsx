"use client";
import React from "react";

const ShippingPolicy: React.FC = () => {
  return (
    <div className="w-full border-t">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Shipping Policy</h1>

        <p className="mb-4">
          At <strong>ShaplaMart</strong>, we strive to provide a smooth and
          reliable delivery experience for all our customers. Please take a
          moment to review our shipping policies to understand how we process
          and deliver your orders.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Shipping Locations
        </h2>
        <p className="mb-4">
          We currently offer shipping across Bangladesh. Please ensure that the
          delivery address provided is accurate and accessible for timely
          delivery. Unfortunately, at this time, we do not ship internationally.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Shipping Charges
        </h2>
        <p className="mb-4">
          We offer free shipping on orders that meet our specified criteria,
          typically based on order value or promotional offers. For orders that
          do not qualify for free shipping, a standard shipping fee will be
          applied during checkout. The shipping charges vary based on the
          location and size of the package.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Delivery Time</h2>
        <p className="mb-4">
          We aim to process and ship all orders within 2-3 business days of
          receiving payment confirmation. Depending on your location, delivery
          typically takes between 3-7 business days. During peak seasons or
          public holidays, there may be delays beyond our control, but we will
          notify you if your shipment is delayed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Order Tracking</h2>
        <p className="mb-4">
          Once your order is dispatched, we will provide you with a tracking
          number via email or SMS. You can use this number to monitor the status
          and estimated delivery time of your order. If you experience any
          issues with tracking, feel free to contact our support team for
          assistance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Packaging</h2>
        <p className="mb-4">
          All items are securely packaged to ensure they reach you in perfect
          condition. We take great care in protecting fragile items and will use
          appropriate materials such as bubble wrap, sturdy boxes, or protective
          pouches as needed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Delivery Issues</h2>
        <p className="mb-4">
          If your order is delayed beyond the estimated delivery window, please
          contact our support team. We will do our best to resolve the issue
          promptly. If the package is lost or damaged in transit, we will work
          with the courier service to offer a solution, which may include
          reshipping the items or issuing a refund.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Delivery Conditions
        </h2>
        <p className="mb-4">
          Free delivery offers are subject to certain conditions, such as a
          minimum purchase value or location. Please refer to our promotional
          banners or terms on the checkout page for the latest delivery offers
          and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions regarding our shipping policy or need
          further assistance, feel free to reach out to us at our{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact
          </a>{" "}
          page. We’re here to help you 24/7.
        </p>

        <p className="text-center text-gray-500 mt-10">
          © {new Date().getFullYear()} ShaplaMart. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
