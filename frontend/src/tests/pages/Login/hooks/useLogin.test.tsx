import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useLogin } from "../../../../pages/Login/hooks/useLogin";
import { UserContext } from "../../../../context/UserContext";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  MemoryRouter: ({ children }: any) => <div>{children}</div>,
  useNavigate: () => mockNavigate,
}));

describe("useLogin", () => {
  it("chama setUser e redireciona para /chat", () => {
    const mockSetUser = vi.fn();

    const wrapper = ({ children }: any) => (
      <MemoryRouter>
        <UserContext.Provider value={{ user: null, setUser: mockSetUser }}>
          {children}
        </UserContext.Provider>
      </MemoryRouter>
    );

    const { result } = renderHook(() => useLogin(), { wrapper });

    result.current.chooseUser("A");

    expect(mockSetUser).toHaveBeenCalledWith("A");
    expect(mockNavigate).toHaveBeenCalledWith("/chat");
  });
});
