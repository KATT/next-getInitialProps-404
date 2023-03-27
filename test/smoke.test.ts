import { expect, test } from "@playwright/test";

test("404 should 404", async ({ page }) => {
  const res = await page.goto("/i-do-not-exist");
  expect(res?.status()).toBe(404);
});

test("404 should display 404 text", async ({ page }) => {
  const res = await page.goto("/i-do-not-exist");

  const text = await res?.text();
  expect(text).toContain("404");
  expect(text).toContain("This page could not be found");
});
