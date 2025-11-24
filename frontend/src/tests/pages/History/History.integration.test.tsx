import { render, screen, waitFor } from "@testing-library/react";
import History from "../../../pages/History/History";
import { UserContext } from "../../../context/UserContext";
import type { Message } from "../../../types/message";

beforeEach(() => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 1, user: "A", content: "Oi", answer: "Olá!" } as Message,
      { id: 2, user: "A", content: "Tudo bem?", answer: "Tudo sim!" } as Message,
    ],
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("History Integration", () => {
  it("busca histórico e renderiza mensagens", async () => {
    const setUser = vi.fn();
    const user = "A";

    render(
      <UserContext.Provider value={{ user, setUser }}>
        <History />
      </UserContext.Provider>
    );

    expect(screen.getByText("Histórico:")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Oi")).toBeInTheDocument();
      expect(screen.getByText("Olá!")).toBeInTheDocument();
      expect(screen.getByText("Tudo bem?")).toBeInTheDocument();
      expect(screen.getByText("Tudo sim!")).toBeInTheDocument();
    });

    expect(globalThis.fetch).toHaveBeenCalledWith(
      `http://127.0.0.1:8000/api/messages/${user}/`
    );
  });
});
