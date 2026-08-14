import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import s from './SearchMap.module.scss'
import {useEffect} from "react";

type SearchMapProps = {
    mass: { latitude: number; longitude: number, name: string }[]
}

type ChangeViewProps = {
    center: [number, number]
}

const ChangeView = ({center}: ChangeViewProps) => {
    const map = useMap()

    useEffect(() => {
        map.setView(center, map.getZoom())
    }, [center, map])

    return null
}

export const SearchMap = ({mass}: SearchMapProps) => {

    if (!mass.length) return null

    const center: [number, number] = [mass[0].latitude, mass[0].longitude]

    return (
        <div className={s.mapWrapper}>
            <MapContainer
                center={center}
                zoom={6}
                scrollWheelZoom={true}
                className={s.map}
            >
                <ChangeView center={center}/>
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    mass.map((item, index: number) => <Marker key={index} position={[item.latitude, item.longitude]}>
                        <Popup>{item.name}</Popup>
                    </Marker>)
                }
            </MapContainer>
        </div>
    )
}

