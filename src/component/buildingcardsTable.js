import React, { useState } from 'react'; //import React Component
import { buildingCard } from './buildingcards';
export function buildingCardTable(props) {
    const liCards = props.buildingList.map((building) => {
        return <buildingCard key={building.name} building={card} />;
    })
    const addCard =
        <div class="col col-md-6 col-xl-4 d-flex">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="ci col col-sm-auto col-xl-12">
                            <img class="pb-3" src="../img/plus.png" alt="plus" />
                        </div>
                        <div class="col-sm">
                            <h2 class="card-title">Add Custom Spot</h2>
                            <p class="card-text">Have a secret study spot that you want people to know about? add it here!!!!</p>
                            <a class="btn btn-dark" href="../html/add_custom.html">Add</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    return (
        <main>
            <div class="card-box container">
                <div class="row">
                    {liCards}
                    {addCard}
                </div>
            </div>
        </main>
    );
}