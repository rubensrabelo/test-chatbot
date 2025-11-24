import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import type { Message } from "../../../../types/message";
import { UserContext } from "../../../../context/UserContext";
import { useHistory } from "../../../../pages/History/hooks/useHistory";

const mockMessages: Message[] = [
    { id: 1, user: "A", content: "Oi", answer: "Olá!" },
    { id: 2, user: "A", content: "Tudo bem?", answer: "Tudo sim!" },
];

describe("useHistory hook", () => {
    beforeEach(() => {
        vi.stubGlobal("fetch", vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockMessages),
            })
        ));
    });

    it("retorna histórico de mensagens do usuário", async () => {
        const wrapper = ({ children }: any) => (
            <UserContext.Provider value={{ user: "A", setUser: vi.fn() }}>
                {children}
            </UserContext.Provider>
        );

        const { result } = renderHook(() => useHistory(), { wrapper });

        await waitFor(() => {
            expect(result.current.messages.length).toBe(2);
        });

        expect(result.current.messages).toEqual(mockMessages);
    });

    it("retorna array vazio quando não há usuário", async () => {
        const wrapper = ({ children }: any) => (
            <UserContext.Provider value={{ user: null, setUser: vi.fn() }}>
                {children}
            </UserContext.Provider>
        );

        const { result } = renderHook(() => useHistory(), { wrapper });

        expect(result.current.messages).toEqual([]);
    });
});
