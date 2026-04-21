import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ilyasolovyov.ru"),
  title: {
    default: "Илья Соловьёв — Разработка сайтов на заказ",
    template: "%s | Илья Соловьёв",
  },
  description:
    "Разработка лендингов и корпоративных сайтов на заказ. Готовый сайт от 5 дней, фиксированная цена в договоре, гарантия 12 месяцев. WordPress, Tilda, OpenCart.",
  keywords: [
    "разработка сайтов на заказ",
    "создание лендинга",
    "корпоративный сайт на заказ",
    "веб-разработчик фрилансер",
    "создание сайта для бизнеса",
    "лендинг под ключ",
    "заказать сайт",
    "сайт под ключ",
    "WordPress разработчик",
    "Tilda разработчик",
    "разработка сайтов под ключ",
    "разработка сайта цена",
    "сайт для малого бизнеса",
    "Илья Соловьёв веб-разработчик",
  ],
  authors: [{ name: "Илья Соловьёв", url: "https://ilyasolovyov.ru" }],
  creator: "Илья Соловьёв",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://ilyasolovyov.ru",
    title: "Илья Соловьёв — Разработка сайтов на заказ",
    description:
      "Лендинги и корпоративные сайты под ключ. От 5 дней. Фиксированная цена, гарантия 12 месяцев.",
    siteName: "Илья Соловьёв — Веб-разработчик",
    images: [
      {
        url: "/media/portrait.png",
        width: 1200,
        height: 630,
        alt: "Илья Соловьёв — Разработка сайтов на заказ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Илья Соловьёв — Разработка сайтов на заказ",
    description:
      "Лендинги и корпоративные сайты под ключ. От 5 дней. Фиксированная цена, гарантия 12 месяцев.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ilyasolovyov.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
