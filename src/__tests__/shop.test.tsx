import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ShopPage } from "@/components/ShopPage";

describe("ShopPage", () => {
  it("renders the shop title and filter panel", () => {
    render(<ShopPage />);
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Power / Capacity")).toBeInTheDocument();
  });

  it("filters products by category", () => {
    render(<ShopPage />);

    const batteriesCheckbox = screen.getByLabelText("Batteries");
    fireEvent.click(batteriesCheckbox);

    expect(screen.getByText("LPBF (24200-M)")).toBeInTheDocument();
    expect(screen.queryByText("JA Solar 605W")).not.toBeInTheDocument();
  });

  it("filters products by brand", () => {
    render(<ShopPage />);

    const felicityCheckbox = screen.getByLabelText("Felicity Solar");
    fireEvent.click(felicityCheckbox);

    expect(screen.getByText("LPBF (24200-M)")).toBeInTheDocument();
    expect(screen.queryByText("JA Solar 605W")).not.toBeInTheDocument();
  });

  it("search filters products by name", () => {
    render(<ShopPage />);

    const searchInput = screen.getByPlaceholderText(
      "Search products, brands, SKUs..."
    );
    fireEvent.change(searchInput, { target: { value: "JA Solar" } });

    expect(screen.getByText("JA Solar 605W")).toBeInTheDocument();
    expect(screen.queryByText("Longi 605W")).not.toBeInTheDocument();
  });

  it("clear filters resets the product list", () => {
    render(<ShopPage />);

    const batteriesCheckbox = screen.getByLabelText("Batteries");
    fireEvent.click(batteriesCheckbox);

    expect(screen.queryByText("JA Solar 605W")).not.toBeInTheDocument();

    const clearButton = screen.getByText(/Clear/i);
    fireEvent.click(clearButton);

    expect(screen.getByText("JA Solar 605W")).toBeInTheDocument();
  });
});
