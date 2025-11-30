import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexusAI - Automate the Impossible",
  description: "Build, deploy, and scale autonomous workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>{children}</body>
    </html>
  );
}