import { renderHook } from "@testing-library/react";
import { useChatScroll } from "../../../../pages/Chat/hooks/useChatScroll";
import type { Message } from "../../../../types/message";

describe("useChatScroll", () => {
  it("scrollIntoView é chamado quando o chat muda", () => {
    const mockScroll = vi.fn();
    const div = { scrollIntoView: mockScroll };

    const { result, rerender } = renderHook(
      (props: { chat: Message[] }) => useChatScroll(props.chat),
      {
        initialProps: { chat: [] as Message[] },
      }
    );

    result.current.chatEndRef.current = div as any;

    rerender({
      chat: [
        {
          user: "A",
          content: "Oi",
          answer: "Olá!",
        },
      ],
    });

    expect(mockScroll).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
