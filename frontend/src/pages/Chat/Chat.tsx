import { useContext, useState, useRef, useEffect } from "react";
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
  const [chat, setChat] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

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

      setChat((prev) => [...prev, { user, content: message, answer: data.answer }]);
      setMessage("");
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") sendMessage();
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>ChatBlue</h1>
        <p className={styles.subtitle}>Qual a sua dúvida?</p>
      </div>
      
      <div className={styles.box}>
        {chat.map((c, i) => (
          <div key={i} className={styles.messageWrapper}>
            <div className={styles.userMessageBox}>
              <span className={styles.userLabel}>Você</span>
              <p className={styles.userMessage}>{c.content}</p>
            </div>

            <div className={styles.botMessageBox}>
              <span className={styles.botLabel}>Bot</span>
              <p className={styles.botMessage}>{c.answer}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className={styles.sendArea}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={sendMessage} disabled={!user || !message.trim()}>
          Enviar
        </button>
      </div>
    </div>
  );
}
