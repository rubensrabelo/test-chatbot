import { render, screen } from "@testing-library/react";
import { ChatMessage } from "../../../../pages/Chat/components/ChatMessage";

describe("ChatMessage", () => {
  it("renderiza a mensagem do usuário e do bot", () => {
    const content = "Olá";
    const answer = "Oi, tudo bem?";

    render(<ChatMessage content={content} answer={answer} />);

    expect(screen.getByText("Você")).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByText("Bot")).toBeInTheDocument();
    expect(screen.getByText(answer)).toBeInTheDocument();
  });
});
