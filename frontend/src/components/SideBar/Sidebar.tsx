import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import styles from "./Sidebar.module.css";
import personA from "../../assets/icon-user-a.png";
import personB from "../../assets/icon-user-b.png";
import chatIcon from "../../assets/icon-chat.png";
import historyIcon from "../../assets/icon-history.png";
import logoutIcon from "../../assets/icon-logout.png";

export default function Sidebar() {
  const { user, setUser } = useContext(UserContext)!;
  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  const avatarUrl = user === "A" ? personA : personB;

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>BlueChat</h2>

        <div className={styles.userInfo}>
          <img src={avatarUrl} alt={`Avatar ${user}`} className={styles.avatar} />
          <p>Usuário ativo:</p>
          <strong>{user}</strong>
        </div>

        <nav className={styles.menu}>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <img src={chatIcon} alt="Chat" className={styles.icon} />
            <span>Chat</span>
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <img src={historyIcon} alt="Histórico" className={styles.icon} />
            <span>Histórico</span>
          </NavLink>
        </nav>
      </div>

      <button className={styles.logout} onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout" className={styles.icon} />
        <span>Logout</span>
      </button>
    </div>
  );
}
