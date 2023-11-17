import React, { useState } from 'react'; //import React Component
export function NavBlog(props) {
  const liCards = props.building.map((building) => {
    const element = <li key={building}><a className="dropdown-item" href="filter_custom.html" onChange={() => location = building.location}>{building.location}</a></li>
    return element;
  });

  const [partySize,SetpartySize] = useState(null);
  const [noiseLevel,SetnoiseLevel] = useState(null);
  const [location,Setlocation] = useState(null);
  const [searchBuilding,SetsearchBuilding] = useState("");
  function psCallBack(event) {
    SetpartySize(event.target.value);
  }
  function nlCallBack(event) {
   SetnoiseLevel(event.target.value);
  }
  function lCallBack(event) {
    Setlocation(event.target.value);
  }
  function sbCallBack(event) {
    SetsearchBuilding(event.target.value);
  }
  function buttonCallBack(event) {
    props.applyFilterCallback(partySize,noiseLevel,location,searchBuilding);
  }
  return (
    <nav className="filter navbar navbar-expand-lg">
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
    </nav>
  );
}
