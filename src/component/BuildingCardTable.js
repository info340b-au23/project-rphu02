import React, { useState } from 'react'; //import React Component
import { BuildingCard } from './BuildingCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { ref, child, get, getDatabase, push as firebasePush } from 'firebase/database'

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

    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [imageLink, SetimageLink] = useState("");
    const [spotName, SetspotName] = useState("");
    const [noiseLevel, SetnoiseLevel] = useState("");
    const [partySize, SetpartySize] = useState("");
    const [rating, Setrating] = useState("");
    const [buildingName, SetbuildingName] = useState("");
    const [area, Setarea] = useState("");
    const [bdisabled, Setbdisabled] = useState(true);
    const [adisabled, Setadisabled] = useState(true);
    const [tbuildingName, SettbuildingName] = useState("");
    const [tarea, Settarea] = useState("");
    const [addSubmit, SetaddSubmit] = useState(false);

    function ilCallBack(event) {
        SetimageLink(event.target.value);
    }
    function snCallBack(event) {
        SetspotName(event.target.value);
    }
    function nlCallBack(event) {
        SetnoiseLevel(event.target.value);
    }
    function psCallBack(event) {
        SetpartySize(event.target.value);
    }
    function rCallBack(event) {
        Setrating(event.target.value);
    }
    function bnCallBack(event) {
        SetbuildingName(event.target.value);
        if (event.target.value === "otherb") {
            Setbdisabled(false);
        }
        else {
            Setbdisabled(true);
        }
    }


    function aCallBack(event) {
        Setarea(event.target.value);
        if (event.target.value === "othera") {
            Setadisabled(false);
        }
        else {
            Setadisabled(true);
        }
    }

    function tbnCallBack(event) {
        SettbuildingName(event.target.value);
    }

    function taCallBack(event) {
        Settarea(event.target.value);
    }

    function addSubmitCallBack(e) {
        e.preventDefault();
        const validationErrors = {};
        if (!spotName.trim()) {
            validationErrors.spotName = 'Spot Name is required';
        }
        if (!noiseLevel.trim()) {
            validationErrors.noiseLevel = 'Noise Level is required';
        }
        if (!partySize.trim()) {
            validationErrors.partySize = 'Party Size is required';
        }
        if (!rating.trim()) {
            validationErrors.rating = 'Rating is required';
        }
        if (!buildingName.trim()) {
            validationErrors.buildingName = 'Building Name is required';
        }
        else {
            if (buildingName === "otherb") {
                if (!tbuildingName.trim()) {
                    validationErrors.tbuildingName = 'Building Name is required';
                }
            }
        }
        if (!area.trim()) {
            validationErrors.area = 'General Area is required';
        }
        else {
            if (area === "othera") {
                if (!tarea.trim()) {
                    validationErrors.tarea = 'General Area is required';
                }
            }
        }
        if (Object.keys(validationErrors).length === 0) {
            SetaddSubmit(true);
            alert("Thank you for submitting a new spot!");
            // if the user has no errors in their form
            // get a reference to our database
            const db = getDatabase();

            // get a reference to the 'users' node in our database
            const buildingsRef = ref(db, "buildings/buildings/");
            // add the formdata to a new unique child under 'users' node
            const bn = bdisabled ? buildingName : tbuildingName;
            const a = adisabled ? area : tarea;
            const formData = {
                "name": spotName,
                "img": imageLink,
                "maxpartySize": partySize,
                "rating": rating,
                "noiseLevel": noiseLevel,
                "location": bn,
                "area": a
            };
            firebasePush(buildingsRef, formData)
                .then(() => {
                    // you can clear the form or you can do something to show a successful submission
                    // reset the form if needed
                    SetspotName("");
                    SetimageLink("");
                    SetpartySize("");
                    Setrating("");
                    SetnoiseLevel("");
                    SetbuildingName("");
                    Setarea("");
                    Setbdisabled(true);
                    Setadisabled(true);
                    SettbuildingName("");
                    Settarea("");
                    
                })
                .catch((error) => {
                    // handle errors here, such as submitting a message to the console or user
                    console.error("Eror writing to database", error);
                })
            setShow(false);

        }
        else {
            alert("Not all fields are filled out");
        }

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
                                <Button variant="dark" onClick={handleShow}>
                                    add
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Custom Spot</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form>
                                            <label htmlFor="il">URL to image: </label>
                                            <input type="text" id="il" name="il" value={imageLink} onChange={ilCallBack} /><br></br>
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

                                            <a>Building:</a>
                                            <select id="bn" className="form-select" style={{ width: 140 }} value={buildingName} onChange={bnCallBack}>
                                                <option value="">Building: </option>
                                                {liBuildings}
                                                <option key={"otherb"} value={"otherb"}>Other</option>
                                            </select>

                                            <label htmlFor="tbn">If other selected enter here: </label>
                                            <input type="text" id="bo" name="bo" disabled={bdisabled} value={tbuildingName} onChange={tbnCallBack} /><br></br>
                                            <br></br>


                                            <a>Area:</a>
                                            <select id="ga" className="form-select" style={{ width: 140 }} value={area} onChange={aCallBack}>
                                                <option value="">Area</option>
                                                {liAreas}
                                                <option key={"othera"} value={"othera"}>Other</option>
                                            </select>

                                            <label htmlFor="tga">If other selected enter here: </label>
                                            <input type="text" id="tga" name="tga" disabled={adisabled} value={tarea} onChange={taCallBack} />
                                            <br></br><br></br>

                                        </form></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="success" onClick={addSubmitCallBack}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                               
                            </div>
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