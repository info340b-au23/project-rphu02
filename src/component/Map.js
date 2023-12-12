import React, { useEffect, useState } from 'react';
import * as L from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapPopup } from './MapPopup';
import { ref, child, get, getDatabase } from 'firebase/database';
import MarkerClusterGroup from 'react-leaflet-cluster';

export function Map({ selectedFilters }) {
    const center = [47.655, -122.307513];
    const [mapHeight, setMapHeight] = useState('100vh');
    const [data, setData] = useState([]);
    const dbRef = ref(getDatabase());
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const [popupHovered, setPopupHovered] = useState(false);

    // marker handler
    const handleMarkerMouseOver = (event, marker) => {
        setHoveredMarker(marker);
        marker.openPopup();
    };

    // popup handlers
    const handlePopupMouseOver = () => {
        setPopupHovered(true);
    };

    const handlePopupMouseLeave = () => {
        setPopupHovered(false);
        if (!popupHovered) {
            hoveredMarker.closePopup();
        }
    };

    useEffect(() => {
        // Firebase data
        get(child(dbRef, 'buildings/'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const arrayOfObj = Object.entries(snapshot.val()).map((e) => e[1]);
                    setData(arrayOfObj);
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });

        // Map window handling
        const handleResize = () => {
            setMapHeight(`${window.innerHeight}px`);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dbRef, selectedFilters]);

    // Filter data based on filters, or show everything if nothing selected
    let filteredData = [];
    if (data) {
        filteredData = data.filter((building) => {
            return (
                (selectedFilters.rating === '' || building.rating.toString() === selectedFilters.rating) &&
                (selectedFilters.area === '' || building.area === selectedFilters.area) &&
                (selectedFilters.partySize === '' || building.maxpartySize.toString() === selectedFilters.partySize) &&
                (selectedFilters.noiseSelector === '' || building.noiseLevel === selectedFilters.noiseSelector)
            );
        });
    }

    // Icons for map
    const mapIcons = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/4467/4467108.png',
        iconSize: [50, 50]
    });

    return (
        <div className="col-sm-12 order-last m-0 p-0">
            <L.MapContainer center={center} zoom={17} style={{ height: mapHeight }}>
                <L.TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                <MarkerClusterGroup
                    chunkedLoading
                    spiderfyOnMaxZoom={false}
                    showCoverageOnHover={true}
                    disableClusteringAtZoom={15}
                >
                    {filteredData.map((building, index) => (
                        <L.Marker
                            key={index}
                            position={[building.lat, building.long]}
                            icon={mapIcons}
                            eventHandlers={{
                                mouseover: (event) => handleMarkerMouseOver(event, event.target)
                            }}
                        >
                            <L.Popup
                                onMouseOver={handlePopupMouseOver}
                                onMouseOut={handlePopupMouseLeave}
                            >
                                <MapPopup building={building} />
                            </L.Popup>
                        </L.Marker>
                    ))}
                </MarkerClusterGroup>
            </L.MapContainer>
        </div>
    );
}