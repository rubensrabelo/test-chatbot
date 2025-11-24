import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HistoryItem } from "../../../../pages/History/components/HistoryItem";
import type { Message } from "../../../../types/message";

describe("HistoryItem", () => {
    const mockMessage: Message = {
        id: 1,
        user: "A",
        content: "Oi",
        answer: "Olá!",
    };

    it("renderiza corretamente o conteúdo do usuário e do bot", () => {
        render(<HistoryItem message={mockMessage} />);

        expect(screen.getByText("Você:")).toBeInTheDocument();
        expect(screen.getByText("Oi")).toBeInTheDocument();

        expect(screen.getByText("Bot:")).toBeInTheDocument();
        expect(screen.getByText("Olá!")).toBeInTheDocument();
    });

    it("renderiza múltiplos tipos de mensagens corretamente", () => {
        const testMessage: Message = {
            id: 2,
            user: "B",
            content: "Tudo bem?",
            answer: "Tudo sim!",
        };

        render(<HistoryItem message={testMessage} />);

        expect(screen.getByText("Você:")).toBeInTheDocument();
        expect(screen.getByText("Tudo bem?")).toBeInTheDocument();
        expect(screen.getByText("Bot:")).toBeInTheDocument();
        expect(screen.getByText("Tudo sim!")).toBeInTheDocument();
    });
});
