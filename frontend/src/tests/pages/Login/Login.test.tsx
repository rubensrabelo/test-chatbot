import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../../../pages/Login/Login";

const mockChooseUser = vi.fn();

vi.mock("../../../pages/Login/hooks/useLogin", () => ({
  useLogin: () => ({
    chooseUser: mockChooseUser,
  }),
}));

vi.mock("../../../pages/Login/data/users", () => ({
  users: [
    { id: "A", name: "Usuário A", avatar: "/a.png" },
    { id: "B", name: "Usuário B", avatar: "/b.png" },
  ],
}));

describe("Login", () => {
  it("renders title and user cards", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText("BlueChat")).toBeInTheDocument();
    expect(screen.getByText("Selecione o Usuário")).toBeInTheDocument();

    expect(screen.getByText("Usuário A")).toBeInTheDocument();
    expect(screen.getByText("Usuário B")).toBeInTheDocument();
  });

  it("calls chooseUser when a user card is clicked", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Usuário A"));
    expect(mockChooseUser).toHaveBeenCalledWith("A");
  });
});
