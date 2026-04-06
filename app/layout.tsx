import type { Metadata } from "next";
import { Geist, Geist_Mono, Old_Standard_TT } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oldStandardTT = Old_Standard_TT({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Adi Abergel | Project Manager",
  description: "Project Manager specializing in automation tools and AI utilization.",
  openGraph: {
    title: "Adi Abergel | Project Manager",
    description: "Project Manager specializing in automation tools and AI utilization.",
    url: "https://adi-abergel.com",
    siteName: "Adi Abergel",
    type: "website",
    images: [
      {
        url: "https://adi-abergel.com/logo.png",
        width: 1042,
        height: 625,
        alt: "Adi Abergel | Project Manager",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oldStandardTT.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global subtle diagonal hatching — right side */}
        <div aria-hidden="true" style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999,
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(190,173,137,0.055) 0px 1px, transparent 1px 22px)',
          WebkitMaskImage: 'linear-gradient(270deg, black 0%, black 10%, transparent 22%)',
          maskImage: 'linear-gradient(270deg, black 0%, black 10%, transparent 22%)',
        }} />
        {children}
      </body>
    </html>
  );
}
