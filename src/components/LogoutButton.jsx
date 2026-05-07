import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../routes/auth.js";

export default function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    clearSession();
    navigate("/", { replace: true });
  }

  return (
    <button className="ghost-button" type="button" onClick={handleLogout}>
      <LogOut className="h-4 w-4" />
      Exit
    </button>
  );
}
