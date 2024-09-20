"use client";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-10 mb-10 px-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg max-w-3xl text-center">
        Welcome to our website! We are dedicated to providing high-quality products and services to our customers. Our mission is to ensure customer satisfaction and to continually improve our offerings. 
        <br />
        <br />
        Our team is composed of talented individuals who are passionate about what they do. We strive to build a community around our brand, and we value the feedback of our customers.
        <br />
        <br />
        Thank you for choosing us! If you have any questions, feel free to contact us anytime.
      </p>
    </div>
  );
};

export default AboutUs;
