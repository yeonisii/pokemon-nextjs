import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "포켓몬의 세계를 탐험하세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="w-full h-[60px] bg-[#FFD0D0] text-center pt-[1rem]">
          <h2 className="font-bold text-slate-800	">포켓몬 도감</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
