import AppRouter from "./router/AppRouter";

import "./App.module.css";
import Sidebar from "./components/SideBar/Sidebar";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="app-content">
        <AppRouter />
      </div>
    </div>
  );
}
