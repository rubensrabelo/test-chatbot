import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Chat from "../../../pages/Chat/Chat";
import { UserContext } from "../../../context/UserContext";

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

beforeEach(() => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ answer: "Olá!" }),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Chat Integration", () => {
  it("envia mensagem e exibe no chat", async () => {
    const setUser = vi.fn();
    const user = "A";

    render(
      <UserContext.Provider value={{ user, setUser }}>
        <Chat />
      </UserContext.Provider>
    );

    const input = screen.getByPlaceholderText("Digite sua mensagem...");
    fireEvent.change(input, { target: { value: "Oi" } });

    const button = screen.getByRole("button", { name: /Enviar/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Oi")).toBeInTheDocument();
      expect(screen.getByText("Olá!")).toBeInTheDocument();
    });

    expect((input as HTMLInputElement).value).toBe("");

    expect(globalThis.fetch).toHaveBeenCalledWith(
      "http://127.0.0.1:8000/api/messages/",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, content: "Oi" }),
      })
    );
  });
});
