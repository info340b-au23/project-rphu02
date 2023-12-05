import React, { useState } from 'react'; //import React Component
import { Link } from 'react-router-dom';

export function NavMain() {
  return (
    <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link><nav className="navbar navbar-expand-lg bg-body-tertiary">
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
    </nav></>
  )
}

export function NavBlog(props) {

  const [includeps, Setincludeps] = useState(false);
  const [partySize, SetpartySize] = useState("");
  const [rating, Setrating] = useState("");
  const [noiseLevel, SetnoiseLevel] = useState("");
  const [area, Setarea] = useState("");
  const [buildingName, SetbuildingName] = useState("");

  const liBuildings = props.building.map((building) => {
    return <option key={building} value={building}>{building}</option>;
  });

  const liAreas = props.area.map((area) => {
    return <option key={area} value={area}>{area}</option>;
  });

  function psioCallBack(event) {
    Setincludeps(event.target.checked);
  }
  function psCallBack(event) {
    SetpartySize(event.target.value);
  }
  function rCallBack(event) {
    Setrating(event.target.value);
  }
  function nlCallBack(event) {
    SetnoiseLevel(event.target.value);
  }
  function lCallBack(event) {
    Setarea(event.target.value);
  }
  function bnCallBack(event) {
    SetbuildingName(event.target.value);
  }
  function buttonCallBack(event) {
    props.applyFilterCallback(includeps, partySize, rating, noiseLevel, buildingName, area);
  }

  function clearCallBack(event) {
    props.applyFilterCallback(false, "", "", "", "", "");
    document.getElementById("nl").selectedIndex = 0;
    document.getElementById("r").selectedIndex = 0;
    document.getElementById("ps").selectedIndex = 0;
    document.getElementById("l").selectedIndex = 0;
    document.getElementById("b").selectedIndex = 0;
    Setincludeps(false);
    SetpartySize("");
    Setrating("");
    SetnoiseLevel("");
    Setarea("");
    SetbuildingName("");
  }

  return (
    <div className="bnav row align-items-center mb-3">
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={clearCallBack}>Clear</button>
      </div>

      <div className="col-auto">
        <select id="ps" className="form-select" value={partySize} onChange={psCallBack}>
          <option value="">Party Size</option>
          <option key={1} value={1}>1</option>
          <option key={2} value={2}>2</option>
          <option key={3} value={3}>3</option>
          <option key={4} value={4}>4</option>
          <option key={5} value={5}>5</option>
          <option key={6} value={6}>6</option>
        </select>
      </div>

      <div className="col-auto">
        <div className="qm">
          <i className="fa fa-question-circle"></i>
        </div>
        <div className="hovertext">
          This is just a recommended max party size or the max number of people that could be seated at this study spot,
          by selecting for example 3 that means that this spot can be seat up to a party size of 3,
          this means that this spot allows up to a party size of 3 but a party size of 2 and 1 is also allowed.
        </div>
      </div>

      <div className="col-auto">
        <div className="form-check">
          <input id="runnerupCheckbox" type="checkbox" className="form-check-input" value="" checked={includeps} onChange={psioCallBack} />
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include Other</label>
        </div>
      </div>

      <div className="col-auto">
        <div className="qm">
          <i className="fa fa-question-circle"></i>
        </div>
        <div className="hovertext">
          By checking this box, it means that we are allowing other places to be displayed that can hold up atleast recommended party size
          that was selected, Example: selecting 4 and and checking this box will display spots where the recommended party size is 4, 5 and 6
        </div>
      </div>

      <div className="col-auto">
        <select id="r" className="form-select" value={rating} onChange={rCallBack}>
          <option value="">Rating</option>
          <option key={0o0} value={1}>0</option>
          <option key={0o1} value={1}>1</option>
          <option key={0o2} value={2}>2</option>
          <option key={0o3} value={3}>3</option>
          <option key={0o4} value={4}>4</option>
          <option key={0o5} value={5}>5</option>
        </select>
      </div>

      <div className="col-auto">
        <div className="qm">
          <i className="fa fa-question-circle"></i>
        </div>
        <div className="hovertext">
          This is just an overall rating of your study spot from a scale of 1-5
          where 1 where this spot is not very good and 5 mean it is the best spot you ever been too.
          it is important to note that is this the overall rating of your study spot not overall rating of the building.
        </div>
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
        <div className="qm">
          <i className="fa fa-question-circle"></i>
        </div>
        <div className="hovertext">
          This is just an overall noise level of your spot, different spots and area of the building have
          different noise level so it is important to note that this is noise level for the spot itself
          and not the building itself.
        </div>
      </div>

      <div className="col-auto" >
        <select id="b" className="form-select" style={{ width: 200 }} value={buildingName} onChange={bnCallBack}>
          <option value="">Building</option>
          {liBuildings}
        </select>
      </div>

      <div className="col-auto">
        <div className="qm">
          <i className="fa fa-question-circle"></i>
        </div>
        <div className="hovertext">
          This is just the name of the Building that your spot is located, this is different from the name of your spot
          instead of focusing on the different areas located inside of the specific building, we are focusing on the building
          itself that contains all of these spots.
          examples includes: Ave, Suzzalo, Odegaard, Bill and Melinda Gates Center and etc..
        </div>
      </div>

      <div className="col-auto">
        <select id="l" className="form-select" value={area} onChange={lCallBack}>
          <option value="">Area</option>
          {liAreas}
        </select>
      </div>

      <div className="col-auto">
        <div className="qm">
          <i className="fa fa-question-circle"></i>
        </div>
        <div className="hovertext">
          This is just the general area that your spot is located,
          this can be a little confusing but this differs from the building name but in some cases it can be the same,
          throughout the campus, different buildings that are relatively close to eachother
          can generally be grouped into the same general area
          an good example is that Suzzalo, Odegaard and Kane Hall can all be grouped in the general area of Red Square
        </div>
      </div>

      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-success" onClick={buttonCallBack}>Apply Filter</button>
      </div>

    </div>
  );
}


