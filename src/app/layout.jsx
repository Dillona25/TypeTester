import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TypeTester",
  description: "A website that allows you to test your typing abilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
