"use client";

import React, { useState } from "react";
import { CloseOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Image from "next/image";


const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 50,
      quantity: 1,
      image: "@/Data/Shopping-Data/baby-and-kid-shoe_1.webp",
    },
    {
      id: 2,
      name: "Product 2",
      price: 75,
      quantity: 2,
      image: "@/Data/Shopping-Data/blueshoe_1.webp",
    },
  ]);

  const incrementQuantity = (id: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decrementQuantity = (id: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="p-2 border rounded-full"
                  onClick={() => decrementQuantity(item.id)}
                >
                  <MinusOutlined />
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="p-2 border rounded-full"
                  onClick={() => incrementQuantity(item.id)}
                >
                  <PlusOutlined />
                </button>
              </div>
              <button
                className="p-2 border rounded-full text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <CloseOutlined />
              </button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">
              Total: $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
