import {test, expect} from "@playwright/test";

test("home search navigates to country page on Enter", async ({page}) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Search countries...");
    await input.fill("Japan");
    await input.press("Enter");

    await expect(page).toHaveURL(/\/country\/japan$/);
});

test("home search navigates on search button click", async ({page}) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Search countries...");
    await input.fill("Japan");

    await page.getByRole("button", { name: "Search" }).click();

    await expect(page).toHaveURL(/\/country\/japan$/);
});

test("home search trims spaces before navigation", async ({page}) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Search countries...");
    await input.fill("   Japan   ");
    await input.press("Enter");

    await expect(page).toHaveURL(/\/country\/japan$/);
});

test("home search does not navigate on empty input", async ({page}) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Search countries...");
    await input.fill("   ");
    await input.press("Enter");

    await expect(page).toHaveURL("http://127.0.0.1:4173/");
});