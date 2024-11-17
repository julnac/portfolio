import type { Metadata } from "next";
import "./globals.css";
import { Chivo } from 'next/font/google';

const chivo = Chivo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfolio julii",
  description: "All best works in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={chivo.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
