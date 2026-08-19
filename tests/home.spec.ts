import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.route("**https://countries.dev/random", async (route) => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
                name: "Japan",
                alpha3Code: "JPN",
                region: "Asia",
                population: 125800000,
                flags: {svg: "https://example.com/japan.svg"},
            }),
        });
    });

    await page.route("**https://countries.dev/name/**", async (route) => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify([
                {
                    name: "japan",
                    alpha3Code: "JPN",
                    region: "Asia",
                    population: 125800000,
                    flags: {svg: "https://example.com/japan.svg"},
                    capital: "Tokyo",
                    currencies: ["JPY"],
                    languages: ["Japanese"],
                    borders: [],
                },
            ]),
        });
    });

    await page.route("**https://api.pexels.com/v1/search?**", async (route) => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
                photos: [
                    {
                        src: {
                            medium: "https://example.com/japan.jpg",
                        },
                    },
                ],
            }),
        });
    });
});

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

    await page.getByRole("button", {name: "Search"}).click();

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