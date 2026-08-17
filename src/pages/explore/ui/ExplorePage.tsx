import {Input} from "@/shared/ui/input";
import {Filter} from "@/shared/ui/filter-tabs";
import {type CoordinateItem, CountriesList} from "@/widgets/explore-countries/CountriesList.tsx";
import {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import s from "./ExplorePage.module.scss";
import {SearchMap} from "@/widgets/explore-map/SearchMap.tsx";
import {LensIcon} from "@/shared/ui/icons";
import type {KeyboardEvent} from "react";

export const partsOfTheWorld = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar",
];

export const ExplorePage = () => {
    const [countries, setCountries] = useState<CoordinateItem[]>([]);
    const [part, setPart] = useState(partsOfTheWorld[0]);

    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const navigate = useNavigate();

    const suggestions = useMemo(() => {
        const value = query.trim().toLowerCase();
        if (!value) return [];

        return countries
            .filter((country) => country.name.toLowerCase().includes(value))
            .slice(0, 5);
    }, [countries, query]);

    const searchCountry = (val: string) => {
        navigate(`/country/${encodeURIComponent(val)}`);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen && e.key === "ArrowDown" && suggestions.length > 0) {
            setIsOpen(true);
            setActiveIndex(0);
            return;
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) =>
                prev < suggestions.length - 1 ? prev + 1 : prev
            );
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }

        if (e.key === "Enter") {
            if (isOpen && activeIndex >= 0 && suggestions[activeIndex]) {
                e.preventDefault();
                searchCountry(suggestions[activeIndex].name);
                setIsOpen(false);
            }
        }

        if (e.key === "Escape") {
            setIsOpen(false);
            setActiveIndex(-1);
        }
    };

    return (
        <div className={s.contentInner}>
            <div className={s.explorePageContent}>
                <div className={s.searchBox}>
                    <Input
                        placeholder="Search countries..."
                        role="combobox"
                        aria-expanded={isOpen}
                        aria-autocomplete="list"
                        aria-controls="countries-suggestions"
                        icon={<LensIcon/>}
                        enterVal={searchCountry}
                        value={query}
                        onChangeVal={(value) => {
                            setQuery(value);
                            setIsOpen(true);
                            setActiveIndex(-1);
                        }}
                        onFocus={() => {
                            if (suggestions.length > 0) setIsOpen(true);
                        }}
                        onClose={() => {
                            setIsOpen(false);
                            setActiveIndex(-1);
                        }}
                        onKeyDown={handleKeyDown}
                    />

                    {isOpen && suggestions.length > 0 && (
                        <ul
                            id="countries-suggestions"
                            className={s.suggestions}
                            role="listbox"
                        >
                            {suggestions.map((country, index) => (
                                <li
                                    key={country.name}
                                    className={
                                        index === activeIndex ? s.activeSuggestion : s.suggestion
                                    }
                                    role="option"
                                    aria-selected={index === activeIndex}
                                    onMouseDown={() => {
                                        searchCountry(country.name);
                                        setIsOpen(false);
                                        setActiveIndex(-1);
                                    }}
                                >
                                    {country.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <Filter valueMass={partsOfTheWorld} onChangeValue={setPart}/>
                <CountriesList region={part} setMass={setCountries}/>
            </div>
            <SearchMap mass={countries}/>
        </div>
    );
};