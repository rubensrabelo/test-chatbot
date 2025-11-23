import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>ChatBot</h2>

      <nav className={styles.menu}>
        <NavLink to="/" className={styles.link}>
          Login
        </NavLink>

        <NavLink to="/chat" className={styles.link}>
          Chat
        </NavLink>

        <NavLink to="/history" className={styles.link}>
          Histórico
        </NavLink>
      </nav>
    </div>
  );
}
