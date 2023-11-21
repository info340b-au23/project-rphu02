import React, { useState } from 'react'; //import React Component
export function NavBlog(props) {

  const [noiseLevel, SetnoiseLevel] = useState(undefined);
  const [partySize, SetpartySize] = useState(undefined);
  const [location, Setlocation] = useState(undefined);
  const [buildingName, SetbuildingName] = useState(undefined);
  const [searchBuilding, SetsearchBuilding] = useState(undefined);

  const liBuildings = props.building.map((building) => {
    return <option key={building} value={building}>{building}</option>;
  });

  const liAreas = props.area.map((area) => {
    return <option key={area} value={area}>{area}</option>;
  });

  function nlCallBack(event) {
    console.log(event.target.value);
    SetnoiseLevel(event.target.value);
  }
  function psCallBack(event) {
    console.log(event.target.value);
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
    props.applyFilterCallback(undefined, undefined, undefined, undefined, undefined);
  }
  return (
    <div className="bnav row align-items-center mb-3">
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={clearCallBack}>Clear</button>
      </div>
      <div className="col-auto">
        <select id="noiselevel" className="form-select" value={noiseLevel} onChange={nlCallBack}>
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
        <select id="party-size" className="form-select" value={partySize} onChange={psCallBack}>
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
        <select id="location" className="form-select" value={location} onChange={lCallBack}>
          <option value="">Area</option>
          {liAreas}
        </select>
      </div>

      <div className="col-auto">
        <select id="building" className="form-select" value={buildingName} onChange={bnCallBack}>
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


