"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ParentComponent from "./components/ParentComponent";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation"; // Import usePathname
import FloatButtonClient from "./components/FloatButtonClient";
import ParentComponentTow from "./components/ParentComponentTow";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noLayoutPages = ["/login", "/signup", "/forget-password"]; // Add routes where you don't want the header and footer
  const isNoLayoutPage = noLayoutPages.includes(pathname);

  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "#fff", color: "#000" }}
        className={inter.className}
      >
        <div>
          {!isNoLayoutPage && <ParentComponent />}
          {children}
          {!isNoLayoutPage && <Footer />}
        </div>
        <FloatButtonClient />
      </body>
    </html>
  );
}
