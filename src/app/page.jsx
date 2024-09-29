"use client";

import { WelcomePage } from "./pages/welcome";
import { useState } from "react";
import { Poppins, Nunito } from "next/font/google";
import { LoginModal } from "./components/login-modal";
import { SignupModal } from "./components/signup-modal";

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

export default function Home() {
  const [activeModal, setActiveModal] = useState("");

  const handleLoginModal = () => {
    console.log("clicked");
    setActiveModal("Login");
  };

  const handleSignupModal = () => {
    setActiveModal("Signup");
  };

  const closeModal = () => {
    console.log("clicked");
    setActiveModal("");
  };

  return (
    <main
      className={`${poppins.variable} ${nunito.variable} relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto`}
    >
      <div className="w-full">
        <WelcomePage
          handleLoginModal={handleLoginModal}
          handleSignupModal={handleSignupModal}
        />
        <Home />

        {/* Modals */}
        {activeModal === "Login" && <LoginModal closeModal={closeModal} />}
        {activeModal === "Signup" && <SignupModal closeModal={closeModal} />}
      </div>
    </main>
  );
}
