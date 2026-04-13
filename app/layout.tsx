import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Risshi | Backend Developer & 3D Artist",
  description: "Portfolio of Risshi, a Backend Developer and 3D Artist specializing in Rust, Python, and scalable architectures.",
  keywords: ["Backend Developer", "3D Artist", "Rust", "Python", "Portfolio", "Risshi"],
  authors: [{ name: "Risshi" }],
  openGraph: {
    title: "Risshi | Backend Developer & 3D Artist",
    description: "Backend engineer who renders worlds in 3D and reads manga with a dictionary open. Building things that scale.",
    url: "https://risshi-portfolio.com",
    siteName: "Risshi Portfolio",
    images: [
      {
        url: "https://risshi-portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Risshi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risshi | Backend Developer & 3D Artist",
    description: "Backend engineer who renders worlds in 3D and building things that scale.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
