import { Navigate } from "react-router-dom";
import { getSession } from "./auth.js";

export default function ProtectedRoute({ allow, children }) {
  const session = getSession();

  if (!session) {
    return (
      <Navigate
        to="/"
        replace
        state={{ notice: "กรุณาเปิด Gateway ก่อนเข้าสู่พื้นที่นี้" }}
      />
    );
  }

  if (!allow.includes(session.access)) {
    return <Navigate to={session.landing || "/"} replace />;
  }

  return children;
}
