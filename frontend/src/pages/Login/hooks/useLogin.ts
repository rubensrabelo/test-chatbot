import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { setUser } = useContext(UserContext)!;
  const navigate = useNavigate();

  function chooseUser(userId: string) {
    setUser(userId);
    navigate("/chat");
  }

  return { chooseUser };
}
