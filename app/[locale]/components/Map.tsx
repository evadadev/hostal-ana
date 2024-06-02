import React from "react";
import GoogleMapReact from 'google-map-react';
import credentials from "../credentials";


export const Map: React.FC = () => {

    const renderMarkers = (map: unknown, maps: { Marker: new (arg0: { position: { lat: number; lng: number; }; map: unknown; title: string; }) => unknown; }) => {
        return new maps.Marker({
            position: { lat: 36.74829409688721, lng: -3.8785030009883337 },
            map,
            title: 'Hostal Ana'
        });
    };

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: credentials.mapsKey }}
                defaultCenter={{
                    lat: 36.74829409688721,
                    lng: -3.8785030009883337
                }}
                defaultZoom={18}
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            />
        </div>    )
}