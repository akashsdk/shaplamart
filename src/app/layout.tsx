"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import ParentComponent from "./components/ParentComponent";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import FloatButtonClient from "./components/FloatButtonClient";
import ParentComponentTow from "./components/ParentComponentTow";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noLayoutPages = ["/login", "/signup", "/forget-password"];
  const isNoLayoutPage = noLayoutPages.includes(pathname);

  const [showParentComponentTow, setShowParentComponentTow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Detect scroll position and toggle ParentComponentTow
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > window.innerHeight) {
        setShowParentComponentTow(true);
      } else {
        setShowParentComponentTow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "#fff", color: "#000" }}
        className={inter.className}
      >
        <div>
          {!isNoLayoutPage && <ParentComponent />}

          {/* Conditionally show ParentComponentTow when scrolled */}
          {!isNoLayoutPage && (
            <div
              className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${
                showParentComponentTow ? "opacity-100" : "opacity-0"
              }`}
            >
              <ParentComponentTow />
            </div>
          )}

          {children}

          {!isNoLayoutPage && <Footer />}
        </div>
        <FloatButtonClient />
      </body>
    </html>
  );
}
