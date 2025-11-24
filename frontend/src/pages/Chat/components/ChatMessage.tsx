import styles from "../Chat.module.css";

interface Props {
  content: string;
  answer: string;
}

export function ChatMessage({ content, answer }: Props) {
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.userMessageBox}>
        <span className={styles.userLabel}>Você</span>
        <p className={styles.userMessage}>{content}</p>
      </div>

      <div className={styles.botMessageBox}>
        <span className={styles.botLabel}>Bot</span>
        <p className={styles.botMessage}>{answer}</p>
      </div>
    </div>
  );
}
