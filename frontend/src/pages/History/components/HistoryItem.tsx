import type { Message } from "../../../types/message";
import styles from "../History.module.css";

interface Props {
  message: Message;
}

export function HistoryItem({ message }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.userMessage}>
        <strong>Você:</strong>
        <p>{message.content}</p>
      </div>

      <div className={styles.botMessage}>
        <strong>Bot:</strong>
        <p>{message.answer}</p>
      </div>
    </div>
  );
}
