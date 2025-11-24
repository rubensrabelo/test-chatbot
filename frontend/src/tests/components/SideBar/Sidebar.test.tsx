import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Sidebar from "../../../components/SideBar/Sidebar";

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
  it("renderiza informações do usuário e título.", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText("BlueChat")).toBeInTheDocument();
    expect(screen.getByText("Usuário ativo:")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renderiza links de navegação", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText("Chat")).toBeInTheDocument();
    expect(screen.getByText("Histórico")).toBeInTheDocument();
  });

  it("realiza o logout", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Logout"));

    expect(mockHandleLogout).toHaveBeenCalled();
  });
});
