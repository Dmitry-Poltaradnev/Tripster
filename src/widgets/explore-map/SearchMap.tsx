import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import s from "./SearchMap.module.scss";
import {useEffect} from "react";
import {latLngBounds} from "leaflet";

type SearchMapProps = {
    mass: { latitude: number; longitude: number; name: string }[];
};

type FitBoundsProps = {
    points: [number, number][];
};

const FitBounds = ({points}: FitBoundsProps) => {
    const map = useMap();

    useEffect(() => {
        if (!points.length) return;

        const bounds = latLngBounds(points);
        map.fitBounds(bounds, {padding: [40, 40]});
    }, [points, map]);

    return null;
};

export const SearchMap = ({mass}: SearchMapProps) => {
    if (!mass.length) return null;

    const points: [number, number][] = mass.map((item) => [
        item.latitude,
        item.longitude,
    ]);

    return (
        <div className={s.mapWrapper}>
            <MapContainer
                center={points[0]}
                zoom={2}
                scrollWheelZoom={true}
                className={s.map}
            >
                <FitBounds points={points}/>
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mass.map((item, index) => (
                    <Marker key={index} position={[item.latitude, item.longitude]}>
                        <Popup>{item.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};