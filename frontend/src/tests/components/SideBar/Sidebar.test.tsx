import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Sidebar from "../../../components/SideBar/Sidebar";

// Criamos o mock fora dos testes para manter consistência
const mockHandleLogout = vi.fn();

vi.mock("../../../components/SideBar/hooks/useSidebar", () => ({
  useSidebar: () => ({
    user: "A",
    avatar: "/avatar.png",
    icons: {
      chat: "/chat.png",
      history: "/history.png",
      logout: "/logout.png",
    },
    handleLogout: mockHandleLogout,
  }),
}));

describe("Sidebar", () => {
  it("renders user info and title", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText("BlueChat")).toBeInTheDocument();
    expect(screen.getByText("Usuário ativo:")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText("Chat")).toBeInTheDocument();
    expect(screen.getByText("Histórico")).toBeInTheDocument();
  });

  it("calls logout handler", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Logout"));

    expect(mockHandleLogout).toHaveBeenCalled();
  });
});
