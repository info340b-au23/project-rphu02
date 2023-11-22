import React from 'react';
import { Map } from './Map';
import { MapFilter } from './MapFilter';
import { Search } from './MapSearch';
export default function MapPage() {
    return (
        <main>
            <header>
                <h1>MAP</h1>
            </header>
            <div class="container-fluid">
                <div class="row no-gutters"></div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        {/* <!--Map--> */}
                        <Map />
                        {/* Search bar */}
                        <div class="col-sm-12 col-md-3 order-first order-md-last m-0 p-0">
                            <div class="card rounded-0 border-0 m-0 p-0">
                                <div class="col-sections container-fluid m-0 p-0">
                                    <Search />
                                    {/*Map Filters*/}
                                    <MapFilter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}