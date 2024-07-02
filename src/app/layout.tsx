import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "$MANIFEST",
  description: "Greatest coin ever",
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
