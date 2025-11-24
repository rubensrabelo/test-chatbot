import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import Login from "../../../pages/Login/Login";

describe("Login Integration", () => {
  it("seleciona Usuário A e chama setUser", () => {
    const setUser = vi.fn();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <UserContext.Provider value={{ user: null, setUser }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<div>Chat Page</div>} />
          </Routes>
        </UserContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Usuário A"));
    expect(setUser).toHaveBeenCalledWith("A");
  });

  it("seleciona Usuário B e chama setUser", () => {
    const setUser = vi.fn();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <UserContext.Provider value={{ user: null, setUser }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<div>Chat Page</div>} />
          </Routes>
        </UserContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Usuário B"));
    expect(setUser).toHaveBeenCalledWith("B");
  });
});
