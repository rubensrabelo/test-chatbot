import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SidebarLink from "../../../../components/SideBar/components/SidebarLink";

describe("SidebarLink", () => {
  it("renders label and icon correctly", () => {
    render(
      <MemoryRouter>
        <SidebarLink to="/chat" icon="/test.png" label="Chat" />
      </MemoryRouter>
    );

    expect(screen.getByText("Chat")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/test.png");
  });
});
