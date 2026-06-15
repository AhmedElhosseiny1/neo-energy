import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCartStore } from "@/store/useCartStore";

describe("useCartStore", () => {
  beforeEach(() => {
    localStorage.clear();
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.clearItems();
      result.current.clearConfiguration();
      result.current.clearQuote();
    });
  });

  it("adds items and updates quantity", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem("inv-x400", 1);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(1);

    act(() => {
      result.current.updateQuantity("inv-x400", 3);
    });

    expect(result.current.items[0].quantity).toBe(3);
  });

  it("removes items", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem("inv-x400");
      result.current.removeItem("inv-x400");
    });

    expect(result.current.items).toHaveLength(0);
  });

  it("persists configuration", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.setConfiguration({
        industryType: "Industrial Manufacturing",
        projectSize: "2.5 MW",
      });
    });

    expect(result.current.configuration.industryType).toBe(
      "Industrial Manufacturing"
    );
  });
});
