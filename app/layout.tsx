import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vijaya Kumar Bathini - Staff Engineer",
  description: "Staff Engineer with extensive experience in cloud architecture, security, and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href={process.env.NODE_ENV === 'production' ? '/my-resume/globals.css' : '/globals.css'} 
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
