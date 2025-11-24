import styles from "./History.module.css";
import { useHistory } from "./hooks/useHistory";
import { HistoryItem } from "./components/HistoryItem";

export default function History() {
  const { messages } = useHistory();

  return (
    <div className={styles.container}>
      <h1>Histórico:</h1>

      <div className={styles.list}>
        {messages.map((m) => (
          <HistoryItem key={m.id} message={m} />
        ))}

        {messages.length === 0 && (
          <p className={styles.empty}>Nenhuma mensagem encontrada.</p>
        )}
      </div>
    </div>
  );
}
