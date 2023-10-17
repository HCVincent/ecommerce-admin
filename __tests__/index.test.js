import { render, screen } from "@testing-library/react";
import Home from "../app/(root)/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a button", () => {
    render(<Home />);

    const button = screen.getByRole("button", {
      name: /joanna/i,
    });

    expect(button).toBeInTheDocument();
  });
});
