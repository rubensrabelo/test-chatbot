import styles from "./Login.module.css";
import { useLogin } from "./hooks/useLogin";
import { users } from "./data/users";
import { UserCard } from "./components/UserCard";

export default function Login() {
  const { chooseUser } = useLogin();

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <p className={styles.welcome}>Seja bem-vindo!</p>
        <h1 className={styles.title}>BlueChat</h1>
        <h2 className={styles.subtitle}>Selecione o Usuário</h2>

        <div className={styles.users}>
          {users.map((u) => (
            <UserCard
              key={u.id}
              id={u.id}
              name={u.name}
              avatar={u.avatar}
              onSelect={chooseUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
