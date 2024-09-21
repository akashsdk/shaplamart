"use client";
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <strong>ShaplaMart</strong>. By accessing or using our website, you agree to be bound by the terms and
        conditions outlined in this document. These terms apply to all users of the site, including customers, vendors,
        merchants, and contributors of content. If you do not agree with any of these terms, please refrain from using
        our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. General Conditions</h2>
      <p className="mb-4">
        We reserve the right to refuse service to anyone for any reason at any time. Your use of the website is at your
        sole risk, and we reserve the right to modify or discontinue our service without notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Accuracy of Information</h2>
      <p className="mb-4">
        While we strive to provide accurate, complete, and current information, errors may occur. We are not responsible
        if information on this site is inaccurate, incomplete, or outdated. Any reliance on the material on this site is
        at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Products and Services</h2>
      <p className="mb-4">
        All products and services available on ShaplaMart are subject to change and may be discontinued without notice.
        We reserve the right to limit the quantities of any product or service we offer. Descriptions and pricing of
        products are subject to change at our sole discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Links</h2>
      <p className="mb-4">
        Certain content, products, or services available through our service may include materials from third parties.
        We are not responsible for examining or evaluating the content or accuracy of third-party websites and do not
        warrant and will not have any liability for third-party materials or websites.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Comments and Feedback</h2>
      <p className="mb-4">
        We may allow you to submit comments, feedback, or suggestions regarding our products or services. By submitting
        such content, you agree that we may, at any time, edit, copy, publish, distribute, and use it in any medium. You
        are solely responsible for the accuracy of any information or materials submitted.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Personal Information</h2>
      <p className="mb-4">
        Your submission of personal information through the store is governed by our Privacy Policy. Please review our
        <a href="/privacypolicy" className="text-blue-600 hover:underline"> Privacy Policy</a> for details.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Prohibited Uses</h2>
      <p className="mb-4">
        In addition to other prohibitions, you are prohibited from using the site or its content: (a) for any unlawful
        purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international,
        federal, or local regulations; (d) to infringe upon the intellectual property rights of others; or (e) to submit
        false or misleading information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
      <p className="mb-4">
        ShaplaMart shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the
        use or inability to use our services. This limitation of liability applies to any claims arising under contract,
        tort, strict liability, or any other legal theory.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service and any separate agreements whereby we provide you services shall be governed by and
        construed in accordance with the laws of Bangladesh.
      </p>

      <p className="text-center text-gray-500 mt-10">© {new Date().getFullYear()} ShaplaMart. All rights reserved.</p>
    </div>
  );
};

export default TermsOfService;
