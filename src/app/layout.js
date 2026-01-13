import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${
    process.env.NEXT_PUBLIC_BUSINESS_NAME || "Pizza Outlet"
  } - Fresh Pizza Delivered`,
  description:
    "Australia's favourite pizza! Hot, fresh pizza made with premium ingredients and delivered to your door. Order online now for delivery or pickup.",
  keywords:
    "pizza, pizza delivery, pizza near me, Australian pizza, online ordering, food delivery",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: `${
      process.env.NEXT_PUBLIC_BUSINESS_NAME || "Pizza Outlet"
    } - Fresh Pizza Delivered`,
    description: "Australia's favourite pizza delivered to your door",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Tracking Pixel Script */}
        {/* <Script
          id="tracking-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://tracking-phi-nine.vercel.app/track/pixel.js?code=TRK-9J8J2FAN1C';
                script.async = true;
                document.head.appendChild(script);
              })();
            `,
          }}
        /> */}
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#fff",
              color: "#171717",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            },
            success: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
