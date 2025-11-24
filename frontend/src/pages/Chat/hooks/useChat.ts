import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import type { Message } from "../types/message";

import { useChatScroll } from "./useChatScroll";
import { useChatInput } from "./useChatInput";
import { useSendMessage } from "./useSendMessage";

export function useChat() {
  const { user } = useContext(UserContext)!;
  const [chat, setChat] = useState<Message[]>([]);

  const [message, setMessage] = useState("");

  const { send: sendMessage } = useSendMessage(
    user,
    message,
    setChat,
    setMessage
  );

  const { handleKeyDown } = useChatInput(sendMessage);

  const { chatEndRef } = useChatScroll(chat);

  return {
    user,
    chat,
    message,
    setMessage,
    sendMessage,
    handleKeyDown,
    chatEndRef,
  };
}
