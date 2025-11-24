import { ChatMessage } from "./components/ChatMessage";
import { useChat } from "./hooks/useChat";

import styles from "./Chat.module.css";

export default function Chat() {
  const {
    user,
    message,
    chat,
    chatEndRef,
    setMessage,
    sendMessage,
    handleKeyDown,
  } = useChat();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Chat</h1>
        <p className={styles.subtitle}>Qual a sua dúvida?</p>
      </div>

      <div className={styles.box}>
        {chat.map((c, i) => (
          <ChatMessage key={i} content={c.content} answer={c.answer} />
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
