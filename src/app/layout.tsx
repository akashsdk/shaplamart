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

  // Detect scroll position and toggle ParentComponentTow
  useEffect(() => {
    const handleScroll = () => {
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
          {/* Show ParentComponent unless it's a no-layout page */}
          {!isNoLayoutPage && <ParentComponent />}

          {/* Conditionally render ParentComponentTow when scrolled */}
          {!isNoLayoutPage && showParentComponentTow && (
            <div className="fixed top-0 left-0 w-full z-50">
              <ParentComponentTow />
            </div>
          )}

          {children}

          {/* Show Footer unless it's a no-layout page */}
          {!isNoLayoutPage && <Footer />}

          {/* Conditionally show FloatButtonClient unless it's a no-layout page */}
          {!isNoLayoutPage && <FloatButtonClient />}
        </div>
      </body>
    </html>
  );
}
