import styles from "../Login.module.css";

interface UserCardProps {
  id: string;
  name: string;
  avatar: string;
  onSelect: (id: string) => void;
}

export function UserCard({ id, name, avatar, onSelect }: UserCardProps) {
  return (
    <div className={styles.userCard} onClick={() => onSelect(id)}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <p className={styles.username}>{name}</p>
    </div>
  );
}
