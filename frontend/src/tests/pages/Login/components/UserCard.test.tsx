import { render, screen, fireEvent } from "@testing-library/react";
import { UserCard } from "../../../../pages/Login/components/UserCard";

describe("UserCard", () => {
  it("renders user data", () => {
    render(
      <UserCard
        id="A"
        name="Usuário A"
        avatar="/avatar.png"
        onSelect={() => {}}
      />
    );

    expect(screen.getByText("Usuário A")).toBeInTheDocument();
    const avatar = screen.getByRole("img") as HTMLImageElement;
    expect(avatar.src).toContain("avatar.png");
  });

  it("calls onSelect when clicked", () => {
    const mockOnSelect = vi.fn();

    render(
      <UserCard
        id="A"
        name="Usuário A"
        avatar="/avatar.png"
        onSelect={mockOnSelect}
      />
    );

    fireEvent.click(screen.getByText("Usuário A"));
    expect(mockOnSelect).toHaveBeenCalledWith("A");
  });
});
