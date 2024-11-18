import type { Metadata } from "next";
import "./globals.css";
import { Chivo } from 'next/font/google';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const chivo = Chivo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfolio julii",
  description: "All best works in one place",
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en" className={chivo.className}>
      <body className="font-normal text-base p-0 m-0 text-dark bg-light">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
