import React, { useState } from 'react';
import { Map } from './Map';
import { MapFilter } from './MapFilter';

export default function MapPage() {
    // Starting value for filters
    const initialFilters = {
        rating: '',
        area: '',
        partySize: '',
        noiseSelector: '',
    };

    // state filters
    const [selectedFilters, setSelectedFilters] = useState(initialFilters);

    // change filters
    const handleFilterChange = (filterKey, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterKey]: value,
        }));
    };

    return (
        <main>
            <header>
                <h1>MAP</h1>
            </header>
            <div className="container-fluid">
                <div className="row no-gutters"></div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        {/* <!--Map--> */}
                        <Map selectedFilters={selectedFilters} />
                        <div className="col order-first m-0 p-0">
                            <div className="card rounded-0 border-0 m-0 p-0">
                                <div className="col-sections container-fluid m-0 p-0">
                                    {/*Map Filters*/}
                                    <MapFilter onFilterChange={handleFilterChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}