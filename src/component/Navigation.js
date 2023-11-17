import React, { useState } from 'react'; //import React Component
export function NavBlog(props) {

  const [noiseLevel, SetnoiseLevel] = useState(undefined);
  const [partySize, SetpartySize] = useState(undefined);
  const [location, Setlocation] = useState(undefined);
  const [buildingName, SetbuildingName] = useState(undefined);
  const [searchBuilding, SetsearchBuilding] = useState(undefined);

  const liBuildings = props.building.map((building) => {
    return <option key={building} value={buildingName}>{building}</option>;
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
  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select id="noiselevel" className="form-select" value={noiseLevel} onChange={nlCallBack}>
          <option value="">Noise Level</option>
          <option key="Silent" value={noiseLevel}>Silent</option>
          <option key="Whisper" value={noiseLevel}>Whisper</option>
          <option key="Table Talk" value={noiseLevel}>Table Talk</option>
          <option key="Normal" value={noiseLevel}>Normal</option>
          <option key="Presenter" value={noiseLevel}>Presenter</option>
          <option key="Outside" value={noiseLevel}>Outside</option>
        </select>
      </div>
      <div className="col-auto">
        <select id="party-size" className="form-select" value={partySize} onChange={psCallBack}>
          <option value="">Party Size</option>
          <option key={1} value={partySize}>1</option>
          <option key={2} value={partySize}>2</option>
          <option key={3} value={partySize}>3</option>
          <option key={4} value={partySize}>4</option>
          <option key={5} value={partySize}>5</option>
          <option key={6} value={partySize}>6+</option>
        </select>
      </div>
      <div className="col-auto">
        <select id="location" className="form-select" value={location} onChange={lCallBack}>
          <option value="">Area</option>
          <option key={"North"} value={location}>North</option>
          <option key={"East"} value={location}>South</option>
          <option key={"South"} value={location}>East</option>
          <option key={"West"} value={location}>West</option>
        </select>
      </div>

      <div className="col-auto">
        <select id="building" className="form-select" value={buildingName} onChange={bnCallBack}>
          <option value="">Building</option>
          {liBuildings}
        </select>
      </div>
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={buttonCallBack}>Apply Filter</button>
      </div>
    </div>
  );
}

/* <nav className="filter navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li key={"noise-level"} className="dd nav-item dropdown">
            <a className="ddm nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Noise Level
            </a>
            <ul className="dropdown-menu">
              <li key={"Silent"}><a className="dropdown-item" href="filter_custom.html" onChange={psCallBack}>Silent</a></li>
              <li key={"Whisper"}><a className="dropdown-item" href="filter_custom.html" onChange={psCallBack}>Whisper</a></li>
              <li key={"Table Talk"}><a className="dropdown-item" href="filter_custom.html" onChange={psCallBack}>Table Talk</a></li>
              <li key={"Normal"}><a className="dropdown-item" href="filter_custom.html" onChange={psCallBack}>Normal</a></li>
              <li key={"Presenter"}><a className="dropdown-item" href="filter_custom.html" onChange={psCallBack}>Presenter</a></li>
              <li key={"Outside"}><a className="dropdown-item" href="filter_custom.html" onChange={psCallBack}>Outside</a></li>
            </ul>
          </li>
          <li key={"party-size"} className="dd nav-item dropdown">
            <a className="ddm nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Party Size
            </a>
            <ul className="dropdown-menu">
              <li key={1}><a className="dropdown-item" href="filter_custom.html" onChange={nlCallBack}>1</a></li>
              <li key={2}><a className="dropdown-item" href="filter_custom.html" onChange={nlCallBack}>2</a></li>
              <li key={3}><a className="dropdown-item" href="filter_custom.html" onChange={nlCallBack}>3</a></li>
              <li key={4}><a className="dropdown-item" href="filter_custom.html" onChange={nlCallBack}>4</a></li>
              <li key={5}><a className="dropdown-item" href="filter_custom.html" onChange={nlCallBack}>5</a></li>
              <li key={6}><a className="dropdown-item" href="filter_custom.html" onChange={nlCallBack}>6+</a></li>
            </ul>
          </li>
          <li key={"location"} className="dd nav-item dropdown">
            <a className="ddm nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Location
            </a>
            <ul className="dropdown-menu">
              <li key={"area"} style={{textAlign: 'center'}}>Area</li>
              <li key={"divider-1"}>
                <hr className="dropdown-divider" />
              </li>
              <li key={"North"}><a className="dropdown-item" href="filter_custom.html" onChange={lCallBack}>North</a></li>
              <li key={"South"}><a className="dropdown-item" href="filter_custom.html" onChange={lCallBack}>South</a></li>
              <li key={"East"}><a className="dropdown-item" href="filter_custom.html" onChange={lCallBack}>East</a></li>
              <li key={"West"}><a className="dropdown-item" href="filter_custom.html" onChange={lCallBack}>West</a></li>
              <li key={"divider-2"}>
                <hr className="dropdown-divider" />
              </li>
              <li key={"building"} style={{textAlign: 'center'}}>Building</li>
              <li key={"divider-3"}>
                <hr className="dropdown-divider" />
              </li>
              {liCards}
            </ul>
          </li>
          <form className="d-flex" role="search">
            <input className="ss form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchBuilding} onChange={sbCallBack}/>
            <button className="ss btn btn-outline-success" type="submit" onClick={buttonCallBack}>Search</button>
          </form>
          
        </ul>
      </div>
    </nav> */
