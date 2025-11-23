import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

export default function Login() {
  const { setUser } = useContext(UserContext)!;
  const navigate = useNavigate();

  function chooseUser(u: string) {
    setUser(u);
    navigate("/chat");
  }

  return (
    <div className={styles.container}>
      <h1>Selecione o Usuário</h1>

      <div className={styles.buttons}>
        <button onClick={() => chooseUser("A")}>Usuário A</button>
        <button onClick={() => chooseUser("B")}>Usuário B</button>
      </div>
    </div>
  );
}
