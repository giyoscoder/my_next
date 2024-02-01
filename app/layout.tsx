import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import I18NextProvider from "@/components/I18NextProvider";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ремонт отопительных газовых котлов, мастер по котлам, ремонт двухконтурных котлов в Ташкенте, сервис центр по котлам",
  description: "Ремонт и обслуживание двухконтурных газовых котлов в Ташкенте Профилактика настенных и напольных котлов устранение ошибок, Ремонт любой сложности, Сервисное Обслуживание котлов мастер по газовым котлам сервис центр по ремонту котлов в Ташкенте",
  icons: {
    icon: [
      {
        url: '/Assets/Images/favicon.png',
        href: '/Assets/Images/favicon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18NextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Contact />
          <Footer />
        </body>
      </html>
    </I18NextProvider>
  );
}
