import type { Metadata } from "next";
import "./globals.css";
import { Chivo, Geist_Mono } from 'next/font/google';
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Julia Pozorska",
  description: "All best works in one place",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${geistMono.variable} font-sans`}>
        <Navigation />
        <main className="grid grid-cols-1 pt-14 mx-6 min-h-dvh font-chivo">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
