import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "다이린 DAIRIN | 달라도 다이린입니다.", template: "%s · 다이린 DAIRIN" },
  description: "기린과 아사히 생맥주를 즐기는 다이린. 대표 메뉴, 가까운 매장, 창업 안내를 확인하세요.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body id="top"><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
