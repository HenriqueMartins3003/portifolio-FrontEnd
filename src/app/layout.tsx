import type { Metadata } from "next";
import { Epilogue, Gamja_Flower } from "next/font/google";
import "./globals.css";
import Hearder from "@/components/hearder";
import Footer from "@/components/footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const gamjaFlower = Gamja_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Protifolio de DEV Henrique Martins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${epilogue.className} bg-primaryGray`}>
        <Hearder />
        {children}
        <Footer />
      </body>
    </html>
  );
}
