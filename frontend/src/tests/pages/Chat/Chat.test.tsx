import { render, screen, fireEvent } from "@testing-library/react";
import Chat from "../../../pages/Chat/Chat";
import { useChat } from "../../../pages/Chat/hooks/useChat";
import type { Message } from "../../../pages/Chat/types/message";

vi.mock("../../../pages/Chat/hooks/useChat");

describe("Chat Page", () => {
  it("renderiza título e subtítulo", () => {
    const mockUseChat = vi.mocked(useChat);

    mockUseChat.mockReturnValue({
      user: "A",
      message: "",
      chat: [],
      chatEndRef: { current: null },
      setMessage: vi.fn(),
      sendMessage: vi.fn(),
      handleKeyDown: vi.fn(),
    });

    render(<Chat />);

    expect(screen.getByText("Chat")).toBeInTheDocument();
    expect(screen.getByText("Qual a sua dúvida?")).toBeInTheDocument();
  });

  it("renderiza mensagens do chat", () => {
    const mockUseChat = vi.mocked(useChat);

    mockUseChat.mockReturnValue({
      user: "A",
      message: "",
      chat: [
        { content: "Oi", answer: "Olá!" } as Message,
        { content: "Tudo bem?", answer: "Tudo sim!" } as Message,
      ],
      chatEndRef: { current: null },
      setMessage: vi.fn(),
      sendMessage: vi.fn(),
      handleKeyDown: vi.fn(),
    });

    render(<Chat />);

    expect(screen.getByText("Oi")).toBeInTheDocument();
    expect(screen.getByText("Olá!")).toBeInTheDocument();
    expect(screen.getByText("Tudo bem?")).toBeInTheDocument();
    expect(screen.getByText("Tudo sim!")).toBeInTheDocument();
  });

  it("chama sendMessage ao clicar no botão", () => {
    const setMessage = vi.fn();
    const sendMessage = vi.fn();

    const mockUseChat = vi.mocked(useChat);
    mockUseChat.mockReturnValue({
      user: "A",
      message: "Oi",
      chat: [],
      chatEndRef: { current: null },
      setMessage,
      sendMessage,
      handleKeyDown: vi.fn(),
    });

    render(<Chat />);

    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));
    expect(sendMessage).toHaveBeenCalled();
  });

  it("desabilita botão quando não há usuário", () => {
    const mockUseChat = vi.mocked(useChat);
    mockUseChat.mockReturnValue({
      user: null,
      message: "Oi",
      chat: [],
      chatEndRef: { current: null },
      setMessage: vi.fn(),
      sendMessage: vi.fn(),
      handleKeyDown: vi.fn(),
    });

    render(<Chat />);

    expect(screen.getByRole("button", { name: /Enviar/i })).toBeDisabled();
  });
});
