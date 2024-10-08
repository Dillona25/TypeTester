import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import WelcomePage from "./pages/Welcome";
import { LoginModal } from "./components/modals/login-modal";
import { SignupModal } from "./components/modals/signup-modal";
import { useState } from "react";
import useEscapeKey from "./hooks/useEscapeKey";
import { AuthProvider, useAuth } from "./contexts/auth-context";
import ProtectedRoute from "./components/protected-route/protected-route";
import { SideMenu } from "./components/side-menu/side-menu";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const closeModal = () => {
    setActiveModal("");
  };

  useEscapeKey(closeModal);

  const handleLoginModal = () => {
    setActiveModal("Login");
  };

  const handleSignupModal = () => {
    setActiveModal("Signup");
  };

  const handleMenu = () => {
    setActiveModal("Menu");
  };

  return (
    <Router>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto max-w-[1400px]">
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard handleMenu={handleMenu} />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Modals */}
        {activeModal === "Login" && <LoginModal closeModal={closeModal} />}
        {activeModal === "Signup" && <SignupModal closeModal={closeModal} />}
        {activeModal === "Menu" && <SideMenu closeModal={closeModal} />}
      </main>
    </Router>
  );
}

export default App;
