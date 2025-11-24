import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { icons } from "../assets/icons";

export function useSidebar() {
  const { user, setUser } = useContext(UserContext)!;
  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  const avatar = user === "A" ? icons.userA : icons.userB;

  return {
    user,
    avatar,
    handleLogout,
    icons,
  };
}
