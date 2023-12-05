import React, { useState } from 'react'; //import React Component
import { BuildingCard } from './BuildingCard';
import { Link } from 'react-router-dom';

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

    const [spotName, SetspotName] = useState("");
    const [noiseLevel, SetnoiseLevel] = useState("");
    const [partySize, SetpartySize] = useState("");
    const [rating, Setrating] = useState(0);
    const [buildingName, SetbuildingName] = useState("");
    const [area, Setarea] = useState("");
    const [bdisabled, Setbdisabled] = useState(true);
    const [adisabled, Setadisabled] = useState(true);
    const [tbuildingName, SettbuildingName] = useState("");
    const [tarea, Settarea] = useState("");
    const [addSubmit, SetaddSubmit] = useState(false);

    function snCallBack(event) {
        document.getElementById("sn").classList.add("green");
        SetspotName(event.target.value);
    }
    function nlCallBack(event) {
        document.getElementById("nl").classList.add("green");
        SetnoiseLevel(event.target.value);
    }
    function psCallBack(event) {
        document.getElementById("ps").classList.add("green");
        SetpartySize(event.target.value);
    }
    function rCallBack(event) {
        document.getElementById("r").classList.add("green");
        Setrating(event.target.value);
    }
    function bnCallBack(event) {
        document.getElementById("bn").classList.add("green");
        SetbuildingName(event.target.value);
        if (event.target.value === "otherb") {
            Setbdisabled(false);
        }
        else {
            Setbdisabled(true);
        }
    }
    function aCallBack(event) {
        document.getElementById("ga").classList.add("green");
        Setarea(event.target.value);
        if (event.target.value === "othera") {
            Setadisabled(false);
        }
        else {
            Setadisabled(true);
        }
    }

    function tbnCallBack(event) {
        document.getElementById("tbn").classList.add("green");
        SettbuildingName(event.target.value);
    }

    function taCallBack(event) {
        document.getElementById("ta").classList.add("green");
        Settarea(event.target.value);
    }

    function addSubmitCallBack(event) {
        SetaddSubmit(true);
    }

    function validate() {
        var fullyFilled = false;
        if (spotName === "") {
            document.getElementById("sn").classList.add("red");
            fullyFilled = false;
        }
        else if (noiseLevel === "") {
            document.getElementById("nl").classList.add("red");
            fullyFilled = false;
        }
        else if (partySize === "") {
            document.getElementById("ps").classList.add("red");
            fullyFilled = false;
        }
        else if (rating === "") {
            document.getElementById("r").classList.add("red");
            fullyFilled = false;
        }
        else if (buildingName === "") {
            document.getElementById("bn").classList.add("red");
            fullyFilled = false;
        }
        else if (area === "") {
            document.getElementById("ga").classList.add("red");
            fullyFilled = false;
        }
        else {
            fullyFilled = true;
        }
        SetaddSubmit(fullyFilled);

    }
    var liStars = [
        <span key={1} className="fa fa-star"></span>,
        <span key={2} className="fa fa-star"></span>,
        <span key={3} className="fa fa-star"></span>,
        <span key={4} className="fa fa-star"></span>,
        <span key={5} className="fa fa-star"></span>
    ];
    for (let i = 0; i < rating; i++) {
        liStars[i] = <span key={i} className="fa fa-star checked"></span>
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
                            <div>
                                <button className="btn btn-dark add">Add</button>
                                <div className="addhovertext">
                                    <label htmlFor="img"> Select Image: </label>
                                    <input type="file" id="img" accept="image/*" ></input>
                                    <br></br>
                                    <form>
                                        <br></br>
                                        <label htmlFor="sn">Spot Name: </label>
                                        <input type="text" id="sn" name="sn" /><br></br>
                                        <br></br>

                                        <a>Noise Level: </a>
                                        <select id="nl" className="form-select" style={{ width: 140 }} value={noiseLevel} onChange={nlCallBack}>
                                            <option value="">Noise Level</option>
                                            <option key="Silent" value={"Silent"}>Silent</option>
                                            <option key="Whisper" value={"Whisper"}>Whisper</option>
                                            <option key="Table Talk" value={"Table Talk"}>Table Talk</option>
                                            <option key="Normal" value={"Normal"}>Normal</option>
                                            <option key="Presenter" value={"Presenter"}>Presenter</option>
                                            <option key="Outside" value={"Outside"}>Outside</option>
                                        </select><br></br>

                                        <a>Party Size: </a>
                                        <select id="ps" className="form-select" style={{ width: 140 }} value={partySize} onChange={psCallBack}>
                                            <option value="">Party Size</option>
                                            <option key={1} value={1}>1</option>
                                            <option key={2} value={2}>2</option>
                                            <option key={3} value={3}>3</option>
                                            <option key={4} value={4}>4</option>
                                            <option key={5} value={5}>5</option>
                                            <option key={6} value={6}>6+</option>
                                        </select><br></br>

                                        <a>Rating: </a>
                                        <select id="r" className="form-select" style={{ width: 140 }} value={rating} onChange={rCallBack}>
                                            <option value="">Rating</option>
                                            <option key={0o0} value={1}>0</option>
                                            <option key={0o1} value={1}>1</option>
                                            <option key={0o2} value={2}>2</option>
                                            <option key={0o3} value={3}>3</option>
                                            <option key={0o4} value={4}>4</option>
                                            <option key={0o5} value={5}>5</option>
                                        </select><br></br>

                                        <a>Building </a>
                                        <select id="bn" className="form-select" style={{ width: 140 }} value={buildingName} onChange={bnCallBack}>
                                            <option value="">Building: </option>
                                            {liBuildings}
                                            <option key={"otherb"} value={"otherb"}>Other</option>
                                        </select>

                                        <label htmlFor="bo">If other selected enter here: </label>
                                        <input type="text" id="bo" name="bo" disabled /><br></br>
                                        <br></br>

                                        <a>Area</a>
                                        <select id="ga" className="form-select" style={{ width: 140 }} value={area} onChange={aCallBack}>
                                            <option value="">Area</option>
                                            {liAreas}
                                            <option key={"othera"} value={"othera"}>Other</option>
                                        </select>

                                        <label htmlFor="ao">If other selected enter here: </label>
                                        <input type="text" id="ao" name="ao" disabled />
                                        <br></br>

                                        <br></br>
                                        <button type="button" className="btn btn-success">Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

    const tempCard =
        <div className="col col-md-6 col-xl-4 d-flex">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="ci col col-sm-auto col-xl-12">
                            <label htmlFor="img"> Select Image: </label>
                            <input type="file" id="img" accept="image/*" ></input>
                            <br></br>
                            <form>
                                <br></br>
                                <label htmlFor="sn">Spot Name: </label>
                                <input type="text" id="sn" name="sn" value={spotName} onChange={snCallBack} /><br></br>
                                <br></br>

                                <a>Noise Level: </a>
                                <select id="nl" className="form-select" style={{ width: 140 }} value={noiseLevel} onChange={nlCallBack}>
                                    <option value="">Noise Level</option>
                                    <option key="Silent" value={"Silent"}>Silent</option>
                                    <option key="Whisper" value={"Whisper"}>Whisper</option>
                                    <option key="Table Talk" value={"Table Talk"}>Table Talk</option>
                                    <option key="Normal" value={"Normal"}>Normal</option>
                                    <option key="Presenter" value={"Presenter"}>Presenter</option>
                                    <option key="Outside" value={"Outside"}>Outside</option>
                                </select><br></br>

                                <a>Party Size: </a>
                                <select id="ps" className="form-select" style={{ width: 140 }} value={partySize} onChange={psCallBack}>
                                    <option value="">Party Size</option>
                                    <option key={1} value={1}>1</option>
                                    <option key={2} value={2}>2</option>
                                    <option key={3} value={3}>3</option>
                                    <option key={4} value={4}>4</option>
                                    <option key={5} value={5}>5</option>
                                    <option key={6} value={6}>6+</option>
                                </select><br></br>

                                <a>Rating: </a>
                                <select id="r" className="form-select" style={{ width: 140 }} value={rating} onChange={rCallBack}>
                                    <option value="">Rating</option>
                                    <option key={0o0} value={1}>0</option>
                                    <option key={0o1} value={1}>1</option>
                                    <option key={0o2} value={2}>2</option>
                                    <option key={0o3} value={3}>3</option>
                                    <option key={0o4} value={4}>4</option>
                                    <option key={0o5} value={5}>5</option>
                                </select><br></br>

                                <a>Building </a>
                                <select id="bn" className="form-select" style={{ width: 140 }} value={buildingName} onChange={bnCallBack}>
                                    <option value="">Building: </option>
                                    {liBuildings}
                                    <option key={"otherb"} value={"otherb"}>Other</option>
                                </select>

                                <label htmlFor="bo">If other selected enter here: </label>
                                <input type="text" id="bo" name="bo" disabled={bdisabled} value={tbuildingName} onChange={tbnCallBack} /><br></br>
                                <br></br>

                                <a>Area</a>
                                <select id="ga" className="form-select" style={{ width: 140 }} value={tarea} onChange={aCallBack}>
                                    <option value="">Area</option>
                                    {liAreas}
                                    <option key={"othera"} value={"othera"}>Other</option>
                                </select>

                                <label htmlFor="ao">If other selected enter here: </label>
                                <input type="text" id="ao" name="ao" disabled={adisabled} value={area} onChange={taCallBack} />
                                <br></br>

                                <br></br>
                                <button type="button" className="btn btn-success" onClick={addSubmitCallBack}>Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    const pretendadded =
        <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
            <div className="col col-md-6 col-xl-4 d-flex">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="ci col col-sm-auto col-xl-12">
                                <img className="pb-3" src={"img/cs_building.jpg"} alt={"cs_building"} />
                            </div>
                            <div className="col-sm">
                                <h2 className="card-title"><b>{spotName}</b> <span style={{ color: "#484848" }}> ({buildingName === "otherb" ? tbuildingName : buildingName})</span></h2>
                                {liStars}
                                <div className="row">
                                    <div className="b">
                                        <Link to={'/Map'} className="btn btn-dark">
                                            Map
                                        </Link>
                                        <Link to={`/BlogForum/${props.building.name}`} className="btn btn-dark">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    return (
        <main>
            <div className="card-box container">
                <div className="row">
                    {liCards}
                    {addSubmit === true &&
                        pretendadded
                    }
                    {addCard}
                    {tempCard}
                </div>
            </div>
        </main>
    );
}