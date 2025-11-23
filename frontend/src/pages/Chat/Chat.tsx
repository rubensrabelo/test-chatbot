import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

import styles from "./Chat.module.css";

interface Message {
  id?: number;
  user: string;
  content: string;
  answer: string;
}

export default function Chat() {
  const { user } = useContext(UserContext)!;

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  async function sendMessage() {
    if (!user || !message.trim()) return;

    try {
      const res = await fetch("http://127.0.0.1:8000/api/messages/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, content: message }),
      });

      if (!res.ok) {
        console.error("Erro ao enviar mensagem:", res.statusText);
        return;
      }

      const data: Message = await res.json();

      setChat((prev) => [
        ...prev,
        `Você: ${message}`,
        `Bot: ${data.answer}`
      ]);

      setMessage("");
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Chat - Usuário {user || "Nenhum"}</h1>

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
        <button onClick={sendMessage} disabled={!user || !message.trim()}>
          Enviar
        </button>
      </div>
    </div>
  );
}
