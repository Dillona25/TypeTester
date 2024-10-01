import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins, Nunito } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const nunito = Nunito({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "TypeTester",
  description: "A great way to track and improve your typing abilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} antialiased`}>
        <main
          className={`relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
