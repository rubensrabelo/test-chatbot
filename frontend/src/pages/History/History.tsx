import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

import styles from "./History.module.css";

interface Message {
  id?: number;
  user: string;
  content: string;
  answer: string;
}

export default function History() {
  const { user } = useContext(UserContext)!;
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!user) return;

    fetch(`http://127.0.0.1:8000/api/messages/${user}/`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Erro ao buscar histórico:", err));
  }, [user]);

  return (
    <div className={styles.container}>
      <h1>Histórico:</h1>

      <div className={styles.list}>
        {messages.map((m) => (
          <div key={m.id} className={styles.item}>
            <div className={styles.userMessage}>
              <strong>Você:</strong>
              <p>{m.content}</p>
            </div>

            <div className={styles.botMessage}>
              <strong>Bot:</strong>
              <p>{m.answer}</p>
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <p className={styles.empty}>Nenhuma mensagem encontrada.</p>
        )}
      </div>
    </div>
  );
}
