import { NavLink } from "react-router-dom";
import styles from "../Sidebar.module.css";

interface SidebarLinkProps {
  to: string;
  icon: string;
  label: string;
}

export default function SidebarLink({ to, icon, label }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      <img src={icon} alt={label} className={styles.icon} />
      <span>{label}</span>
    </NavLink>
  );
}
