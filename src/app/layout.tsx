import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Destiny",
  description: "Everything is related to destiny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`w-full h-screen overflow-auto scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
