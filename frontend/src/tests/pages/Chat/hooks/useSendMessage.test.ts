import { renderHook, act } from "@testing-library/react";
import { useSendMessage } from "../../../../pages/Chat/hooks/useSendMessage";

describe("useSendMessage", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  it("NÃO envia mensagem se user for null", async () => {
    const setChat = vi.fn();
    const setMessage = vi.fn();

    const { result } = renderHook(() =>
      useSendMessage(null, "hello", setChat, setMessage)
    );

    await act(async () => {
      await result.current.send();
    });

    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  it("NÃO envia mensagem vazia", async () => {
    const setChat = vi.fn();
    const setMessage = vi.fn();

    const { result } = renderHook(() =>
      useSendMessage("A", "   ", setChat, setMessage)
    );

    await act(async () => {
      await result.current.send();
    });

    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  it("envia mensagem e atualiza chat + limpa message", async () => {
    const setChat = vi.fn(fn => {
      fn([{ user: "A", content: "Oi", answer: "Olá!" }]);
    });

    const setMessage = vi.fn();

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          answer: "Olá!",
        }),
    });

    const { result } = renderHook(() =>
      useSendMessage("A", "Oi", setChat, setMessage)
    );

    await act(async () => {
      await result.current.send();
    });

    expect(globalThis.fetch).toHaveBeenCalled();
    expect(setChat).toHaveBeenCalled();
    expect(setMessage).toHaveBeenCalledWith("");
  });
});
