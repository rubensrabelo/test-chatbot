import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Chat from "../pages/Chat/Chat";
import History from "../pages/History/History";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
