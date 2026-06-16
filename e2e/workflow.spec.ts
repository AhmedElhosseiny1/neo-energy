import { test, expect } from "@playwright/test";

test.describe("Neo Energy workflow", () => {
  test("catalog → cart → quote → success", async ({ page }) => {
    // Catalog
    await page.goto("/catalog");
    await expect(page.getByText("Engineering Catalog")).toBeVisible();

    await page
      .getByRole("article")
      .filter({ hasText: "JA Solar 605W" })
      .getByRole("button", { name: /add/i })
      .click();

    await page
      .getByRole("article")
      .filter({ hasText: "LPBF (24200-M)" })
      .getByRole("button", { name: /add/i })
      .click();

    // Cart
    await page.goto("/cart");
    await expect(page.getByText("Solution Basket")).toBeVisible();
    await expect(page.getByText("JA-605W")).toBeVisible();
    await expect(page.getByText("LPBF-24200-M")).toBeVisible();

    // Update quantity
    const panelRow = page.getByRole("article").filter({ hasText: "JA-605W" });
    await panelRow.getByRole("button", { name: /increase quantity/i }).click();
    await expect(panelRow.getByText("2")).toBeVisible();

    // Quote
    await page.getByRole("link", { name: /proceed to quotation request/i }).click();
    await expect(page.getByText("Request Your Solar Quotation")).toBeVisible();

    await page.locator("#fullName").fill("Alexander Vance");
    await page.locator("#companyName").fill("Global Infra Logistics S.A.");
    await page.locator("#email").fill("alex.vance@example.com");
    await page.locator("#projectSummary").fill(
      "We need a 2.5 MW solar solution with panels, inverters, and battery storage for our facility in Egypt."
    );

    await page.getByRole("button", { name: /submit quotation request/i }).click();

    // Success
    await expect(
      page.getByRole("heading", { name: /download your quotation request/i })
    ).toBeVisible();
  });

  test("cart state persists after refresh", async ({ page }) => {
    await page.goto("/catalog");
    await page
      .getByRole("article")
      .first()
      .getByRole("button", { name: /add/i })
      .click();

    await page.reload();
    await page.goto("/cart");
    await expect(page.getByText("Solution Basket")).toBeVisible();
  });
});
