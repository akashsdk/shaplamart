"use client";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full border-t">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>ShaplaMart</strong>, we value your privacy and are
          committed to protecting your personal data. This privacy policy
          outlines how we handle, store, and use your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect personal information that you voluntarily provide to us
          when registering on the site, placing an order, or interacting with
          our services. This may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Personal identifiers such as your name, email address, and contact
            information.
          </li>
          <li>Payment details when making purchases.</li>
          <li>Shipping and billing addresses.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use your personal information to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Process and fulfill your orders.</li>
          <li>Provide customer support and communicate with you.</li>
          <li>Send you promotional offers, if you opted in.</li>
          <li>Improve our services and website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          data from unauthorized access and misuse. However, no method of
          transmission over the internet or method of electronic storage is 100%
          secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal data to
          outside parties, except when required by law or to fulfill your order
          (e.g., with shipping companies).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information at any time by contacting us. You can also opt-out of
          receiving promotional emails.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Changes to This Policy
        </h2>
        <p className="mb-4">
          We reserve the right to update our privacy policy from time to time.
          Any changes will be posted on this page, with the date of the last
          update indicated at the top of the policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding our privacy practices,
          please contact us at{" "}
          <a
            href="mailto:support@shaplamart.com"
            className="text-blue-600 hover:underline"
          >
            support@shaplamart.com
          </a>
          .
        </p>

        <p className="text-center text-gray-500 mt-10">
          © {new Date().getFullYear()} ShaplaMart. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
