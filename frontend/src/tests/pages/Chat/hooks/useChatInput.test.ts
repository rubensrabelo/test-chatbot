import { renderHook, act } from "@testing-library/react";
import { useChatInput } from "../../../../pages/Chat/hooks/useChatInput";

describe("useChatInput", () => {
  it("chama onSend ao pressionar Enter", () => {
    const mockSend = vi.fn();

    const { result } = renderHook(() => useChatInput(mockSend));

    act(() => {
      result.current.handleKeyDown({
        key: "Enter",
      } as any);
    });

    expect(mockSend).toHaveBeenCalled();
  });

  it("NÃO chama onSend se não for Enter", () => {
    const mockSend = vi.fn();

    const { result } = renderHook(() => useChatInput(mockSend));

    act(() => {
      result.current.handleKeyDown({
        key: "Space",
      } as any);
    });

    expect(mockSend).not.toHaveBeenCalled();
  });

  it("atualiza message corretamente", () => {
    const { result } = renderHook(() => useChatInput(() => {}));

    act(() => {
      result.current.setMessage("hello");
    });

    expect(result.current.message).toBe("hello");
  });
});
