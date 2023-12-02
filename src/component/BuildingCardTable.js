import React, { useState } from 'react'; //import React Component
import { BuildingCard } from './BuildingCard';
export function BuildingCardTable(props) {
    const liCards = props.buildingList.map((building) => {
        return <BuildingCard key={building.name} building={building} />;
    })

    const liBuildings = props.building.map((building) => {
        return <option key={building} value={building}>{building}</option>;
    });

    const liAreas = props.area.map((area) => {
        return <option key={area} value={area}>{area}</option>;
    });

    function addcardCallBack(event) {
        // add the new element into a json file
        // render website so we have a new added card
        var Text0 = prompt("Write name for your spot", "");
        var Text1 = prompt("Select Party Size", "");
        var Text2 = prompt("Select Rating", "");
        var Text3 = prompt("Select Building Name", "");
        var Text4 = prompt("If Building is not included, enter Building here", "");
        var Text3 = prompt("Select General Area", "");
        var Text4 = prompt("If Building is not included, enter General Area here", "");
    }

    // this is just a name for your spot, this is different from Building Name but could be the same,
    // in general, alot of the building have different floors and are referred to as different area.
    // these would be considered the name of your spot.
    // for example: Suzzalo has multiple floors but the 3rd floor is most famously known as the Harry Potter Library
    // he name of the spot should be Harry Potter Library while the building name should be Suzzalo.

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
                            <button className="btn btn-dark" onClick={addcardCallBack}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

    const tempadd =
        <div className="col col-md-6 col-xl-4 d-flex" >
            <div className="card mb-4">
                <div className="card-body">
                    <label htmlFor="img"> Select Image: </label>
                    <input type="file" id="img" accept="image/*" ></input>
                    <form>
                        <label htmlFor="sn">Spot Name: </label>
                        <input type="text" id="sn" name="sn" /><br></br>

                        <a>Noise Level: </a>
                        <select id="nl" className="form-select" style={{ width: 140 }}>
                            <option value="">Noise Level</option>
                            <option key="Silent" value={"Silent"}>Silent</option>
                            <option key="Whisper" value={"Whisper"}>Whisper</option>
                            <option key="Table Talk" value={"Table Talk"}>Table Talk</option>
                            <option key="Normal" value={"Normal"}>Normal</option>
                            <option key="Presenter" value={"Presenter"}>Presenter</option>
                            <option key="Outside" value={"Outside"}>Outside</option>
                        </select><br></br>

                        <a>Party Size: </a>
                        <select id="ps" className="form-select" style={{ width: 140 }}>
                            <option value="">Party Size</option>
                            <option key={1} value={1}>1</option>
                            <option key={2} value={2}>2</option>
                            <option key={3} value={3}>3</option>
                            <option key={4} value={4}>4</option>
                            <option key={5} value={5}>5</option>
                            <option key={6} value={6}>6+</option>
                        </select><br></br>

                        <a>Rating: </a>
                        <select id="r" className="form-select" style={{ width: 140 }}>
                            <option value="">Rating</option>
                            <option key={0o0} value={1}>0</option>
                            <option key={0o1} value={1}>1</option>
                            <option key={0o2} value={2}>2</option>
                            <option key={0o3} value={3}>3</option>
                            <option key={0o4} value={4}>4</option>
                            <option key={0o5} value={5}>5</option>
                        </select><br></br>

                        <a>Building </a>
                        <select id="bn" className="form-select" style={{ width: 140 }}>
                        <option value="">Building</option>
                            {liBuildings}
                        </select>

                        <label htmlFor="bo">Other: </label>
                        <input type="text" id="bo" name="bo" /><br></br>

                        <a>Area</a>
                        <select id="ga" className="form-select" style={{ width: 140 }}>
                        <option value="">Area</option>
                            {liAreas}
                        </select>

                        <label htmlFor="ao">Other: </label>
                        <input type="text" id="ao" name="ao" />
                        <br></br>
                        
                        <button type="button" className="btn btn-success">Submit</button>

                    </form>
                </div>
            </div>
        </div>;
    return (
        <main>
            <div className="card-box container">
                <div className="row">
                    {liCards}
                    {addCard}
                    {tempadd}
                </div>
            </div>
        </main>
    );
}