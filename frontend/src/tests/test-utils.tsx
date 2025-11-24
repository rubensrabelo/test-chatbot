import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import type { ReactNode } from "react";

export function TestProviders({ children }: { children: ReactNode }) {
  return (
    <MemoryRouter>
      <UserContext.Provider value={{ user: "A", setUser: vi.fn() }}>
        {children}
      </UserContext.Provider>
    </MemoryRouter>
  );
}
