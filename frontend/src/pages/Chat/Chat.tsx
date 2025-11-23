import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

import styles from "./Chat.module.css";

export default function Chat() {
  const { user } = useContext(UserContext)!;

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  async function sendMessage() {
    const res = await fetch("http://127.0.0.1:8000/api/messages/send/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, content: message }),
    });

    const data = await res.json();

    setChat((prev) => [...prev, `Você: ${message}`, `Bot: ${data.response}`]);
    setMessage("");
  }

  return (
    <div className={styles.container}>
      <h1>Chat - Usuário {user}</h1>

      <div className={styles.box}>
        {chat.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>

      <div className={styles.sendArea}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}
