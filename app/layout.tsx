import type { Metadata } from "next";
import "./globals.css";
import FluidFieldBackground from "@/components/ui/fluid-field";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "My Journey",
  description: "An interactive timeline of my journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-white">
        <div className="fixed inset-0 z-0">
          <FluidFieldBackground className="w-full h-full" />
        </div>
        <Nav />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
