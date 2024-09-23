"use client";
import React, { useState } from "react";
import HeaderCart from "../card/HeaderCart";

const faqData = [
  {
    question: "What is ShaplaMart?",
    answer:
      "ShaplaMart is one of the top online and offline fashion shops in Bangladesh, offering a variety of products including women’s wear, men’s clothing, baby products, and fashion accessories.",
  },
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse our product categories, add your desired items to the cart, and proceed to checkout. You can either create an account or shop as a guest.",
  },
  {
    question: "Do you offer free delivery?",
    answer:
      "Yes, we offer free delivery on select orders. The eligibility for free delivery will be mentioned on the product page or during checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy with conditions. Products must be unused, in their original packaging, and include the receipt or proof of purchase.",
  },
  {
    question: "Which payment methods are available?",
    answer:
      "We accept multiple payment methods including credit/debit cards, bKash, Nagad, Rocket, and cash on delivery for eligible locations.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, you can track your order by logging into your account and navigating to the 'Order History' section. You will also receive tracking updates via email or SMS.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our 24/7 customer support team via live chat on our website, or by emailing us at support@shaplamart.com. We’re always here to help!",
  },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <HeaderCart pageName="FAQ" />

      <div className="w-full mt-5 tablet:mt-10">
        <div className="max-w-screen-lg mx-auto p-6">
          <h1 className="text-2xl tablet:text-3xl font-medium font-serif text-blue-600 mb-10">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="w-full text-left text-lg font-semibold flex justify-between items-center py-3"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mt-3 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
