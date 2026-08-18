import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {beforeEach, describe, expect, it, vi} from "vitest";
import {HomePage} from "./HomePage";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

vi.mock("@/widgets/recent-trips/ui/RecentTrips.tsx", () => ({
    RecentTrips: () => <div>Recent trips stub</div>,
}));

vi.mock("@/widgets/popular-destinations/ui/PopularDestinations.tsx", () => ({
    PopularDestinations: () => <div>Popular destinations stub</div>,
}));

describe("HomePage", () => {
    beforeEach(() => {
        navigateMock.mockClear();
    });

    it("renders page content", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );

        expect(screen.getByText("Good morning")).toBeInTheDocument();
        expect(screen.getByText("Where to next?")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Search countries...")).toBeInTheDocument();
    });

    it("updates input value on typing", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...") as HTMLInputElement;

        fireEvent.change(input, {target: {value: "Japan"}});

        expect(input).toHaveValue("Japan");
    });

    it("navigates to country page on Enter", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "Japan"}});
        fireEvent.keyDown(input, {key: "Enter"});

        expect(navigateMock).toHaveBeenCalledWith("/country/japan");
    });

    it("navigates on search button click", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");
        const button = screen.getByRole("button");

        fireEvent.change(input, {target: {value: "Japan"}});
        fireEvent.click(button);

        expect(navigateMock).toHaveBeenCalledWith("/country/japan");
    });

    it("trims spaces before navigation", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "   Japan   "}});
        fireEvent.keyDown(input, {key: "Enter"});

        expect(navigateMock).toHaveBeenCalledWith("/country/japan");
    });

    it("does not navigate on empty input", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "   "}});
        fireEvent.keyDown(input, {key: "Enter"});

        expect(navigateMock).not.toHaveBeenCalled();
    });
});