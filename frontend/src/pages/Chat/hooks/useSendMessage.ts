import type { Message } from "../types/message";

export function useSendMessage(
  user: string | null,
  message: string,
  setChat: React.Dispatch<React.SetStateAction<Message[]>>,
  setMessage: (m: string) => void
) {
  async function send() {
    if (!user || !message.trim()) return;

    try {
      const res = await fetch("http://127.0.0.1:8000/api/messages/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, content: message }),
      });

      if (!res.ok) return console.error("Erro ao enviar mensagem:", res.status);

      const data: Message = await res.json();

      setChat((prev) => [
        ...prev,
        { user, content: message, answer: data.answer },
      ]);

      setMessage("");
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  }

  return { send };
}
