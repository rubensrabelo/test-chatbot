import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import { useSidebar } from "../../../../components/SideBar/hooks/useSidebar";

describe("useSidebar", () => {
  it("retorna campos essenciais", () => {
    const wrapper = ({ children }: any) => (
      <MemoryRouter>
        <UserContext.Provider value={{ user: "A", setUser: vi.fn() }}>
          {children}
        </UserContext.Provider>
      </MemoryRouter>
    );

    const { result } = renderHook(() => useSidebar(), { wrapper });

    expect(result.current.user).toBe("A");
    expect(result.current).toHaveProperty("icons");
    expect(typeof result.current.handleLogout).toBe("function");
  });
});
