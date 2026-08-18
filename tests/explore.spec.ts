import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.route("**/api/countries/**", async (route) => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify([
                {name: "Japan", alpha3Code: "JPN"},
                {name: "Jordan", alpha3Code: "JOR"},
                {name: "Germany", alpha3Code: "DEU"},
            ]),
        });
    });

    await page.route("**/api/**coordinates**", async (route) => {
        const url = route.request().url();

        if (url.includes("Japan")) {
            await route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify({
                    results: [{name: "Japan", latitude: 35.6, longitude: 139.6}],
                }),
            });
            return;
        }

        if (url.includes("Jordan")) {
            await route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify({
                    results: [{name: "Jordan", latitude: 31.0, longitude: 36.0}],
                }),
            });
            return;
        }

        if (url.includes("Germany")) {
            await route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify({
                    results: [{name: "Germany", latitude: 52.5, longitude: 13.4}],
                }),
            });
            return;
        }

        await route.continue();
    });
});

test("explore shows suggestions and navigates by mouse", async ({page}) => {
    await page.goto("/explore");

    const input = page.getByPlaceholder("Search countries...");
    await input.fill("jo");

    await expect(page.getByRole("listbox")).toBeVisible();
    await expect(page.getByText("Jordan")).toBeVisible();

    await page.getByText("Jordan").click();

    await expect(page).toHaveURL(/\/country\/Jordan$/);
});

test("explore navigates by keyboard", async ({page}) => {
    await page.goto("/explore");

    const input = page.getByPlaceholder("Search countries...");
    await input.fill("ja");

    await expect(page.getByRole("listbox")).toBeVisible();

    await input.press("ArrowDown");
    await input.press("Enter");

    await expect(page).toHaveURL(/\/country\/Japan$/);
});

test("explore closes suggestions on Escape", async ({page}) => {
    await page.goto("/explore");

    const input = page.getByPlaceholder("Search countries...");
    await input.fill("ja");

    await expect(page.getByRole("listbox")).toBeVisible();

    await input.press("Escape");

    await expect(page.getByRole("listbox")).toBeHidden();
});