import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PredictDisease from "./pages/PredictDisease";
import Appointments from "./pages/Appointment";
import Profile from "./pages/Profile";
import Callback from "./pages/Callback";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

function PublicRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );

  return isAuthenticated ? <Navigate to="/" replace /> : children;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />

        {/* Auth0 callback */}
        <Route path="/callback" element={<Callback />} />

        {/* Protected */}
        <Route
          path="/predict"
          element={
            <ProtectedRoute>
              <PredictDisease />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
