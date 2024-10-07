import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import WelcomePage from "./pages/Welcome";
import { LoginModal } from "./components/modals/login-modal";
import { SignupModal } from "./components/modals/signup-modal";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const closeModal = () => {
    setActiveModal("");
  };

  const handleLoginModal = () => {
    setActiveModal("Login");
  };

  const handleSignupModal = () => {
    setActiveModal("Signup");
  };

  return (
    <Router>
      <main
        className={`relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto max-w-[1400px]`}
      >
        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage
                handleLoginModal={handleLoginModal}
                handleSignupModal={handleSignupModal}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Modals */}
        {activeModal === "Login" && <LoginModal closeModal={closeModal} />}
        {activeModal === "Signup" && <SignupModal closeModal={closeModal} />}
      </main>
    </Router>
  );
}

export default App;
