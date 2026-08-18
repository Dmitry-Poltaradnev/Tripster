import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {beforeEach, describe, expect, it, vi} from "vitest";
import {ExplorePage} from "./ExplorePage";
import {useEffect} from "react";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

vi.mock("@/widgets/explore-map/SearchMap.tsx", () => ({
    SearchMap: () => <div>Map stub</div>,
}));

vi.mock("@/shared/ui/filter-tabs", () => ({
    Filter: ({valueMass, onChangeValue}: { valueMass: string[]; onChangeValue: (v: string) => void }) => (
        <button onClick={() => onChangeValue(valueMass[1])}>Change region</button>
    ),
}));

vi.mock("@/widgets/explore-countries/CountriesList.tsx", () => ({
    CountriesList: ({
                        region,
                        setMass,
                    }: {
        region: string;
        setMass: (value: Array<{ name: string; latitude: number; longitude: number }>) => void;
    }) => {
        useEffect(() => {
            setMass([
                {name: "Japan", latitude: 35.6, longitude: 139.6},
                {name: "Jordan", latitude: 31.0, longitude: 36.0},
                {name: "Germany", latitude: 52.5, longitude: 13.4},
            ]);
        }, [setMass, region]);

        return <div>Countries list stub: {region}</div>;
    },
}));

describe("ExplorePage", () => {
    beforeEach(() => {
        navigateMock.mockClear();
    });

    it("shows suggestions when user types", async () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "jo"}});

        expect(await screen.findByRole("listbox")).toBeInTheDocument();
        expect(screen.getByText("Jordan")).toBeInTheDocument();
    });

    it("does not show suggestions for empty query", () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    it("navigates by mouse click on suggestion", async () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "jo"}});

        const suggestion = await screen.findByText("Jordan");
        fireEvent.mouseDown(suggestion);

        expect(navigateMock).toHaveBeenCalledWith("/country/Jordan");
    });

    it("navigates by keyboard when suggestion is active", () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "ja"}});
        fireEvent.keyDown(input, {key: "ArrowDown"});
        fireEvent.keyDown(input, {key: "Enter"});

        expect(navigateMock).toHaveBeenCalledWith("/country/Japan");
    });

    it("does not move above first suggestion on ArrowUp", async () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "ja"}});
        await screen.findByRole("listbox");

        fireEvent.keyDown(input, {key: "ArrowDown"});
        fireEvent.keyDown(input, {key: "ArrowUp"});
        fireEvent.keyDown(input, {key: "ArrowUp"});

        const options = screen.getAllByRole("option");
        expect(options[0]).toHaveAttribute("aria-selected", "true");
    });

    it("does not move below last suggestion on ArrowDown", async () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "j"}});
        await screen.findByRole("listbox");

        fireEvent.keyDown(input, {key: "ArrowDown"});
        fireEvent.keyDown(input, {key: "ArrowDown"});
        fireEvent.keyDown(input, {key: "ArrowDown"});
        fireEvent.keyDown(input, {key: "ArrowDown"});
        fireEvent.keyDown(input, {key: "ArrowDown"});

        const options = screen.getAllByRole("option");
        expect(options[options.length - 1]).toHaveAttribute("aria-selected", "true");
    });

    it("closes suggestions on Escape", async () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText("Search countries...");

        fireEvent.change(input, {target: {value: "ja"}});
        expect(await screen.findByRole("listbox")).toBeInTheDocument();

        fireEvent.keyDown(input, {key: "Escape"});

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    it("renders combobox aria attributes", () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        const input = screen.getByRole("combobox");

        expect(input).toHaveAttribute("aria-autocomplete", "list");
        expect(input).toHaveAttribute("aria-controls", "countries-suggestions");
        expect(input).toHaveAttribute("aria-expanded", "false");
    });

    it("changes region through filter", () => {
        render(
            <MemoryRouter>
                <ExplorePage/>
            </MemoryRouter>
        );

        expect(screen.getByText("Countries list stub: Africa")).toBeInTheDocument();

        fireEvent.click(screen.getByText("Change region"));

        expect(screen.getByText("Countries list stub: Americas")).toBeInTheDocument();
    });
});