import { useState } from "react";

export function useChatInput(onSend: () => void) {
  const [message, setMessage] = useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") onSend();
  }

  return {
    message,
    setMessage,
    handleKeyDown,
  };
}
