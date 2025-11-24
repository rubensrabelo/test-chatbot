import { renderHook } from "@testing-library/react";import { UserContext } from "../../../../context/UserContext";
import { useChat } from "../../../../pages/Chat/hooks/useChat";
vi.mock("../../../../src/pages/Chat/hooks/useChatScroll", () => ({
  useChatScroll: () => ({ chatEndRef: { current: null } }),
}));

vi.mock("../../../../src/pages/Chat/hooks/useChatInput", () => ({
  useChatInput: () => ({
    message: "oi",
    setMessage: vi.fn(),
    handleKeyDown: vi.fn(),
  }),
}));

vi.mock("../../../../src/pages/Chat/hooks/useSendMessage", () => ({
  useSendMessage: () => ({ send: vi.fn() }),
}));

describe("useChat", () => {
  it("retorna campos essenciais do chat", () => {
    const wrapper = ({ children }: any) => (
      <UserContext.Provider value={{ user: "A", setUser: vi.fn() }}>
        {children}
      </UserContext.Provider>
    );

    const { result } = renderHook(() => useChat(), { wrapper });

    expect(result.current.user).toBe("A");
    expect(result.current.chat).toEqual([]);
    expect(result.current.message).toBe("");

    expect(result.current.sendMessage).toBeDefined();
    expect(result.current.handleKeyDown).toBeDefined();
    expect(result.current.chatEndRef).toBeDefined();
  });
});
