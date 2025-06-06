import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hex",
  description: "Early-stage investing in startups and tokens",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}
