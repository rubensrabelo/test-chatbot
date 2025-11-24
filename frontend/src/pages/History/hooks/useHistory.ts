import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import type { Message } from "../../../types/message";

export function useHistory() {
  const { user } = useContext(UserContext)!;
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!user) return;

    fetch(`http://127.0.0.1:8000/api/messages/${user}/`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Erro ao buscar histórico:", err));
  }, [user]);

  return { messages };
}
