import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Imperial Cleaning - Professional Commercial Cleaning Services",
  description: "A highly-trained, professional commercial cleaning company serving businesses nationwide with luxury commercial and residential cleaning services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        

        
        {/* Floating Chat Widget */}
        <Script 
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67e166d44a3e9647844a3b19"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
