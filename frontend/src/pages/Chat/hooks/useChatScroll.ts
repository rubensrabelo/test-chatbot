  import { useEffect, useRef } from "react";
  import type { Message } from "../../../types/message";

  export function useChatScroll(chat: Message[]) {
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat]);

    return { chatEndRef };
  }
