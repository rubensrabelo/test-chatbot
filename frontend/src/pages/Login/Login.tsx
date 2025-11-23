import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import personA from "../../assets/icon-user-a.png"
import personB from "../../assets/icon-user-b.png"

const users = [
  { id: "A", name: "Usuário A", avatar: personA },
  { id: "B", name: "Usuário B", avatar: personB },
];

export default function Login() {
  const { setUser } = useContext(UserContext)!;
  const navigate = useNavigate();

  function chooseUser(u: string) {
    setUser(u);
    navigate("/chat");
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1 className={styles.title}>BlueChat</h1>
        <h2 className={styles.subtitle}>Selecione o Usuário</h2>

        <div className={styles.users}>
          {users.map((u) => (
            <div
              key={u.id}
              className={styles.userCard}
              onClick={() => chooseUser(u.id)}
            >
              <img src={u.avatar} alt={u.name} className={styles.avatar} />
              <p className={styles.username}>{u.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
