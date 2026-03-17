import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASG Group | Precision Engineering & Manufacturing | Derby, UK",
  description:
    "Family-owned manufacturing & engineering company delivering quality engineering services for over 26 years. Design, fabrication, laser cutting, CNC, injection moulding & more.",
  keywords:
    "manufacturing, engineering, fabrication, laser cutting, CNC, injection moulding, Derby, UK, automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased font-sans`}>
        <div className="grain-overlay" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
