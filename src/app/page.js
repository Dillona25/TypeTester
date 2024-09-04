"use client";
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

import { Welcome } from "./pages/welcome";
import { useState } from "react";

export default function Home() {
  const [activeModal, setActiveModal] = useState("");

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  return (
    <main
      className={`${poppins.variable} ${nunito.variable} relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto"`}
    >
      <div className="w-full">
        <Welcome />
      </div>
    </main>
  );
}
