import React, { useState } from 'react'; //import React Component
import { NavLink, Link } from 'react-router-dom';

export function NavMain() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="../img/book.png" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><i className="fas fa-home"></i>Homepage</Link>
            </li>
            <li className="nav-item">
              <Link to="/Map"><i className="fas fa-map-marker-alt"></i>Map</Link>
            </li>
            <li className="nav-item">
              <Link to="/Blog"><i className="fas fa-pencil-alt"></i>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export function NavBlog(props) {

  const [noiseLevel, SetnoiseLevel] = useState("");
  const [partySize, SetpartySize] = useState("");
  const [location, Setlocation] = useState("");
  const [buildingName, SetbuildingName] = useState("");
  const [searchBuilding, SetsearchBuilding] = useState("");

  const liBuildings = props.building.map((building) => {
    return <option key={building} value={building}>{building}</option>;
  });

  const liAreas = props.area.map((area) => {
    return <option key={area} value={area}>{area}</option>;
  });


  function nlCallBack(event) {
    SetnoiseLevel(event.target.value);
  }
  function psCallBack(event) {
    SetpartySize(event.target.value);
  }
  function lCallBack(event) {
    Setlocation(event.target.value);
  }
  function bnCallBack(event) {
    SetbuildingName(event.target.value);
  }
  function sbCallBack(event) {
    SetsearchBuilding(event.target.value);
  }
  function buttonCallBack(event) {
    props.applyFilterCallback(partySize, noiseLevel, location, buildingName, searchBuilding);
  }

  function clearCallBack(event) {
    props.applyFilterCallback("", "", "", "", "");
    document.getElementById("nl").selectedIndex = 0;
    document.getElementById("ps").selectedIndex = 0;
    document.getElementById("l").selectedIndex = 0;
    document.getElementById("b").selectedIndex = 0;
    SetpartySize("");
    SetnoiseLevel("");
    Setlocation("");
    SetbuildingName("");
    SetsearchBuilding("");
    
  }

  return (
    <div className="bnav row align-items-center mb-3">
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={clearCallBack}>Clear</button>
      </div>
      <div className="col-auto">
        <select id="nl" className="form-select" value={noiseLevel} onChange={nlCallBack}>
          <option value="">Noise Level</option>
          <option key="Silent" value={"Silent"}>Silent</option>
          <option key="Whisper" value={"Whisper"}>Whisper</option>
          <option key="Table Talk" value={"Table Talk"}>Table Talk</option>
          <option key="Normal" value={"Normal"}>Normal</option>
          <option key="Presenter" value={"Presenter"}>Presenter</option>
          <option key="Outside" value={"Outside"}>Outside</option>
        </select>
      </div>
      <div className="col-auto">
        <select id="ps" className="form-select" value={partySize} onChange={psCallBack}>
          <option value="">Party Size</option>
          <option key={1} value={1}>1</option>
          <option key={2} value={2}>2</option>
          <option key={3} value={3}>3</option>
          <option key={4} value={4}>4</option>
          <option key={5} value={5}>5</option>
          <option key={6} value={6}>6+</option>
        </select>
      </div>
      <div className="col-auto">
        <select id="l" className="form-select" value={location} onChange={lCallBack}>
          <option value="">Area</option>
          {liAreas}
        </select>
      </div>

      <div className="col-auto">
        <select id="b" className="form-select" value={buildingName} onChange={bnCallBack}>
          <option value="">Building</option>
          {liBuildings}
        </select>
      </div>
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-success" onClick={buttonCallBack}>Apply Filter</button>
      </div>
    </div>
  );
}


