import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${gilroy.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col m-0 p-0">
        
        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '728688463665547');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Fallback для no-js */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=728688463665547&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
