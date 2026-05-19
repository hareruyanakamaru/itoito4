import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://www.itoawase.jp";

export const metadata: Metadata = {
  verification: {
    google: "PLwPyfbhUBBitP3ry_UFkWWvdvobrtPHresAvQDlDpo",
  },
  title: {
    default: "itoito — 東京・江東区の子ども向け学び体験マッチング｜単発OK・習い事以外の体験を探す",
    template: "%s | itoito",
  },
  description:
    "習い事じゃない、単発で参加できる子ども向け学び体験マッチング。江東区・東京東部エリアで、職人・教師・クリエイターと子どもをつなぐ。料理・ものづくり・自然・探究——本物に触れる体験がここにある。",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "itoito（イトイト）",
    title: "itoito（イトイト）— 子どもの「やってみたい」をかなえる体験マッチング",
    description:
      "料理・竹細工・農業・絵本づくり——学校では出会えない大人と、教科書には載っていない体験。子どもの「なんで？」「やりたい！」に本気で向き合う体験マッチングプラットフォーム。",
    images: [
      {
        // Canva製OGP画像：/public/ogp.png を差し替えるだけで反映されます（1200×630px推奨）
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "itoito — 子どもの体験マッチングプラットフォーム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "itoito（イトイト）— 子どもの「やってみたい」をかなえる体験マッチング",
    description:
      "料理・竹細工・農業・絵本づくり——学校では出会えない大人と教科書には載っていない体験。",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-[#fdfaf6]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
