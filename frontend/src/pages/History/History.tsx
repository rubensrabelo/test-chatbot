import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

import styles from "./History.module.css";

export default function History() {
  const { user } = useContext(UserContext)!;
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/messages/${user}/`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [user]);

  return (
    <div className={styles.container}>
      <h1>Histórico — Usuário {user}</h1>

      {messages.map((m) => (
        <div key={m.id} className={styles.item}>
          <p><strong>Você:</strong> {m.content}</p>
          <p><strong>Bot:</strong> {m.response}</p>
        </div>
      ))}
    </div>
  );
}
