import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Chat from "../pages/Chat/Chat";
import History from "../pages/History/History";
import ProtectedLayout from "../layout/ProtectedLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedLayout />}>
        <Route path="chat" element={<Chat />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
