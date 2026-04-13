import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Недвижимость в Алании | Квартиры на первой линии с видом на море",
  description:
    "Станьте владельцем недвижимости у моря в Алании, Турция. Рассрочка на 30 месяцев, первый взнос 30%. Пассивный доход до $20,000 в год. От застройщика с 40-летним опытом.",
  keywords:
    "недвижимость Алания, квартиры в Турции, недвижимость у моря, квартиры в рассрочку, инвестиции в недвижимость",
  openGraph: {
    title: "Недвижимость в Алании | Квартиры на первой линии с видом на море",
    description:
      "Станьте владельцем недвижимости у моря в Алании. Рассрочка на 30 месяцев, доход до $20,000 в год.",
    type: "website",
    locale: "ru_RU",
    siteName: "Недвижимость в Алании",
  },
  twitter: {
    card: "summary_large_image",
    title: "Недвижимость в Алании | Квартиры на первой линии",
    description:
      "Станьте владельцем недвижимости у моря в Алании. Рассрочка на 30 месяцев.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${gilroy.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col m-0 p-0">{children}</body>
    </html>
  );
}
