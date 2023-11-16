import React, { useState } from 'react'; //import React Component
import { BuildingCard } from './BuildingCard';
export function BuildingCardTable(props) {
    const liCards = props.buildingList.map((building) => {
        return <BuildingCard key={building.name} building={building} />;
    })
    function addcardCallBack(event) {
        // add the new element into a json file
        // render website so we have a new added card
    }
    const addCard =
        <div className="col col-md-6 col-xl-4 d-flex" >
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="ci col col-sm-auto col-xl-12">
                            <img className="pb-3" src="../img/plus.png" alt="plus" />
                        </div>
                        <div className="col-sm">
                            <h2 className="card-title">Add Custom Spot</h2>
                            <p className="card-text">Have a secret study spot that you want people to know about? add it here!!!!</p>
                            <a className="btn btn-dark" href="../html/add_custom.html">Add</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    return (
        <main>
            <div className="card-box container">
                <div className="row">
                    {liCards}
                    {addCard}
                </div>
            </div>
        </main>
    );
}