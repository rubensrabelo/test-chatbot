import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SidebarLink from "../../../../components/SideBar/components/SidebarLink";

describe("SidebarLink", () => {
  it("renderiza o rótulo e o ícone corretamente.", () => {
    render(
      <MemoryRouter>
        <SidebarLink to="/chat" icon="/test.png" label="Chat" />
      </MemoryRouter>
    );

    expect(screen.getByText("Chat")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/test.png");
  });
});
