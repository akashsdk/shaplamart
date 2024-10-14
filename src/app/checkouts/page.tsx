"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
const Checkouts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [countdown, setCountdown] = useState(3); 
  const router = useRouter(); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); 
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitting && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      router.push("/result");
    }

    return () => clearTimeout(timer); 
  }, [isSubmitting, countdown, router]);

  return (
    <div className="w-full min-h-screen border-t flex justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

        {isSubmitting ? (
          <div className="text-center">
            <p className="text-xl">Processing your order...</p>
            <p className="text-2xl font-bold mt-4">{countdown}s</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">
                  Phone No<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">
                Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block mb-2">
                  City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">
                  Country<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">
                  Postal Code<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link href="/cart" className="text-blue-600">
                Back to Cart
              </Link>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Place Order
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkouts;
