import { render, screen } from "@testing-library/react";
import History from "../../../pages/History/History";
import { useHistory } from "../../../pages/History/hooks/useHistory";
import type { Message } from "../../../types/message";

vi.mock("../../../pages/History/hooks/useHistory");

describe("History Page (unit)", () => {
  it("renderiza título e mensagem vazia quando não há histórico", () => {
    const mockUseHistory = vi.mocked(useHistory);
    mockUseHistory.mockReturnValue({ messages: [] });

    render(<History />);

    expect(screen.getByText("Histórico:")).toBeInTheDocument();
    expect(screen.getByText("Nenhuma mensagem encontrada.")).toBeInTheDocument();
  });

  it("renderiza mensagens do histórico", () => {
    const mockUseHistory = vi.mocked(useHistory);
    const mockMessages: Message[] = [
      { id: 1, user: "A", content: "Oi", answer: "Olá!" },
      { id: 2, user: "A", content: "Tudo bem?", answer: "Tudo sim!" },
    ];
    mockUseHistory.mockReturnValue({ messages: mockMessages });

    render(<History />);

    expect(screen.getByText("Oi")).toBeInTheDocument();
    expect(screen.getByText("Olá!")).toBeInTheDocument();
    expect(screen.getByText("Tudo bem?")).toBeInTheDocument();
    expect(screen.getByText("Tudo sim!")).toBeInTheDocument();
  });
});
