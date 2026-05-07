import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Family from "./pages/Family.jsx";
import Gateway from "./pages/Gateway.jsx";
import Partner from "./pages/Partner.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/family"
          element={
            <ProtectedRoute allow={["family", "admin"]}>
              <Family />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partner"
          element={
            <ProtectedRoute allow={["partner", "admin"]}>
              <Partner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gateway"
          element={
            <ProtectedRoute allow={["admin"]}>
              <Gateway />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
