import { test, expect } from "@playwright/test";

test.describe("Neo Energy workflow", () => {
  test("catalog → cart → configuration → quote → success", async ({ page }) => {
    // Catalog
    await page.goto("/catalog");
    await expect(page.getByText("Engineering Catalog")).toBeVisible();

    await page
      .getByRole("article")
      .filter({ hasText: "Industrial Inverters" })
      .getByRole("button", { name: /add/i })
      .click();

    await page
      .getByRole("article")
      .filter({ hasText: "LFP Battery Systems" })
      .getByRole("button", { name: /add/i })
      .click();

    // Cart
    await page.goto("/cart");
    await expect(page.getByText("Solution Basket")).toBeVisible();
    await expect(page.getByText("NE-INV-X400")).toBeVisible();
    await expect(page.getByText("NE-LFP-M50")).toBeVisible();

    // Update quantity
    const inverterRow = page.getByRole("article").filter({ hasText: "NE-INV-X400" });
    await inverterRow.getByRole("button", { name: /increase quantity/i }).click();
    await expect(inverterRow.getByText("2")).toBeVisible();

    // Configuration
    await page.getByRole("link", { name: /proceed to configuration/i }).click();
    await expect(page.getByText("Define Your Industrial")).toBeVisible({ timeout: 10000 });

    await page.getByLabel("Industry Type").selectOption("Industrial Manufacturing");
    await page.getByLabel("Project Size (MW/kW)").fill("2.5 MW");
    await page.getByLabel("Power Requirements").fill("Max Peak Load");
    await page.getByLabel("Installation Location").fill("Berlin, Germany");
    await page.getByRole("button", { name: "FY 2025" }).click();

    await page
      .getByRole("button", { name: /continue to quotation request/i })
      .click();

    // Quote
    await expect(page.getByText("Request Your Engineering Quotation")).toBeVisible();

    await page.getByLabel("Full Name").fill("Alexander Vance");
    await page.getByLabel("Company").fill("Global Infra Logistics S.A.");
    await page.getByLabel("Professional Email").fill("alex.vance@example.com");
    await page.getByLabel("Project Summary").fill(
      "We need a 2.5 MW industrial BESS solution for peak shaving and grid stabilization."
    );

    await page.getByRole("button", { name: /submit quotation request/i }).click();

    // Success
    await expect(page.getByText("Request Successfully Submitted")).toBeVisible();
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
