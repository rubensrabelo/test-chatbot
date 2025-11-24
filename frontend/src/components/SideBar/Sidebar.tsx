import SidebarLink from "./components/SidebarLink";
import { useSidebar } from "./hooks/useSidebar";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { user, avatar, icons, handleLogout } = useSidebar();

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>BlueChat</h2>

        <div className={styles.userInfo}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
          <p>Usuário ativo:</p>
          <strong>{user}</strong>
        </div>

        <nav className={styles.menu}>
          <SidebarLink to="/chat" icon={icons.chat} label="Chat" />
          <SidebarLink to="/history" icon={icons.history} label="Histórico" />
        </nav>
      </div>

      <button className={styles.logout} onClick={handleLogout}>
        <img src={icons.logout} alt="Logout" className={styles.icon} />
        <span>Logout</span>
      </button>
    </div>
  );
}
