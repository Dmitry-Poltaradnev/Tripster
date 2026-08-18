import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.route("**https://countries.dev/region/**", async (route) => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify([
                {
                    name: "Japan",
                    alpha3Code: "JPN",
                    region: "Asia",
                    population: 125800000,
                    flags: {svg: "https://example.com/japan.svg"},
                },
                {
                    name: "Jordan",
                    alpha3Code: "JOR",
                    region: "Asia",
                    population: 11200000,
                    flags: {svg: "https://example.com/jordan.svg"},
                },
                {
                    name: "Germany",
                    alpha3Code: "DEU",
                    region: "Europe",
                    population: 83200000,
                    flags: {svg: "https://example.com/germany.svg"},
                },
            ]),
        });
    });

    await page.route("**https://geocoding-api.open-meteo.com/v1/search?**", async (route) => {
        const url = route.request().url();

        if (url.includes("name=Japan")) {
            await route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify({
                    results: [{name: "Japan", latitude: 35.6, longitude: 139.6}],
                }),
            });
            return;
        }

        if (url.includes("name=Jordan")) {
            await route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify({
                    results: [{name: "Jordan", latitude: 31.0, longitude: 36.0}],
                }),
            });
            return;
        }

        if (url.includes("name=Germany")) {
            await route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify({
                    results: [{name: "Germany", latitude: 52.5, longitude: 13.4}],
                }),
            });
            return;
        }

        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({results: []}),
        });
    });
});

test("explore shows suggestions and navigates by mouse", async ({ page }) => {
    await page.goto("/explore");
    await page.waitForLoadState("domcontentloaded");

    const input = page.getByPlaceholder("Search countries...");
    await expect(input).toBeVisible();

    await input.fill("jo");

    await expect(page.getByRole("listbox")).toBeVisible();
    await expect(page.getByRole("option", { name: "Jordan" })).toBeVisible();

    await page.getByRole("option", { name: "Jordan" }).dispatchEvent("mousedown");

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
