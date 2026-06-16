import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CatalogPage from "@/app/catalog/page";

describe("CatalogPage", () => {
  it("renders the catalog title and filters", () => {
    render(<CatalogPage />);
    expect(screen.getByText("Engineering Catalog")).toBeInTheDocument();
    expect(screen.getByText("Industry Focus")).toBeInTheDocument();
  });

  it("filters products by industry", () => {
    render(<CatalogPage />);

    // By default Industrial Manufacturing is checked, so matching products render
    expect(screen.getByText("JA Solar 605W")).toBeInTheDocument();

    // Uncheck Industrial Manufacturing
    const checkbox = screen.getByLabelText("Industrial Manufacturing");
    fireEvent.click(checkbox);

    // Catalog should still render the products because no filters selected shows all
    expect(screen.getByText("JA Solar 605W")).toBeInTheDocument();
  });
});
