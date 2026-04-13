import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollTop from "@/components/ScrollTop";

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
      <body className={inter.className}>
        <ScrollTop />
        <div className="bg-graphics">
          {/* Topographic contours */}
          <svg className="topo" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ top: '-10%', left: '-10%', transform: 'scale(1.5)', strokeWidth: '1.5' }}>
            <path fill="none" d="M0,200 Q150,150 300,250 T600,200 T900,250 T1200,100" />
            <path fill="none" d="M0,230 Q160,180 320,280 T640,230 T960,280 T1200,130" />
            <path fill="none" d="M0,260 Q170,210 340,310 T680,260 T1020,310 T1200,160" />
            <path fill="none" d="M0,290 Q180,240 360,340 T720,290 T1080,340 T1200,190" />
            <path fill="none" d="M0,320 Q190,270 380,370 T760,320 T1140,370 T1200,220" />
          </svg>
          {/* Tech dot grid / isometric */}
          <svg className="grid-bg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
