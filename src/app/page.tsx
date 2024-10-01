"use client";

import { useState } from "react";
import { WelcomePage } from "./pages/welcome";
import { LoginModal } from "./components/login-modal";
import { SignupModal } from "./components/signup-modal";

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
      className={`relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto`}
    >
      <div className="w-full">
        <WelcomePage
          handleLoginModal={handleLoginModal}
          handleSignupModal={handleSignupModal}
        />

        {/* Modals */}
        {activeModal === "Login" && <LoginModal closeModal={closeModal} />}
        {activeModal === "Signup" && <SignupModal closeModal={closeModal} />}
      </div>
    </main>
  );
}
