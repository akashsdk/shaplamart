"use client";

import React, { useState } from "react";
import { CloseOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Image from "next/image";
import Img1 from "@/Data/Shopping-Data/baby-dress_1.webp";
import Img2 from "@/Data/Shopping-Data/earring_2_600x.webp";
import Img3 from "@/Data/Shopping-Data/blueshoe_2_600x.webp";
import Link from "next/link";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Aa. Baby Coat", price: 4800, quantity: 1, image: Img1 },
    {
      id: 2,
      name: "Ring SW-521",
      price: 800,
      quantity: 1,
      image: Img2,
    },
    {
      id: 3,
      name: "B. Pair of Blue Shoes",
      price: 9800,
      quantity: 1,
      image: Img3,
    },
  ]);

  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmRemove) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const clearCart = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the cart?"
    );
    if (confirmClear) {
      setCartItems([]);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full">
      <div className="w-full h-[60px] bg-slate-200 flex justify-center items-center">
        <p className="text-2xl">Your Shopping Cart</p>
      </div>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                />
                <div className="ml-4">
                  <p className="font-bold">{item.name}</p>
                  <p>TK {item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="border p-2"
                >
                  <MinusOutlined />
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="border p-2"
                >
                  <PlusOutlined />
                </button>
              </div>

              <p>TK {(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                <CloseOutlined />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Link
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Continue Shopping
          </Link>

          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Clear Cart
          </button>
        </div>

        <div className="mt-8">
          <label className="block mb-2">Special instructions for seller</label>
          <textarea
            className="w-full p-4 border rounded-md outline-none"
            rows={4}
          />
        </div>

        <div className="mt-8 tablet:flex justify-between">
          <div className="w-1/2">
            <h2 className="text-xl font-bold">Cart Totals</h2>
            <div className="mt-4">
              <p className="flex justify-between">
                <span>Subtotal</span> <span>TK {totalPrice.toFixed(2)}</span>
              </p>
              <p className="flex justify-between mt-2 font-semibold">
                <span>Total</span> <span>TK {totalPrice.toFixed(2)}</span>
              </p>
            </div>
          </div>
          <Link href='/checkouts' className="bg-blue-600 mt-5 tablet:mt-0 h-[40px] tablet:h-[50px] text-white px-3 text-center rounded-md border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 tablet:text-xl flex  justify-center items-center">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
