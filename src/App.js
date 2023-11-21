import React, { useState } from 'react'; //import React Component
import { BuildingCardTable } from './component/BuildingCardTable';
import { NavBlog } from './component/Navigation';
function App(props) {
  const [partySize, SetpartySize] = useState(undefined);
  const [noiseLevel, SetnoiseLevel] = useState(undefined);
  const [location, Setlocation] = useState(undefined);
  const [buildingName, SetbuildingName] = useState(undefined);
  const [searchBuilding, SetsearchBuilding] = useState(undefined);
  function applyFilter(partysize, noiselevel, location, buildingName, searchbuilding) {
    SetpartySize(partysize);
    SetnoiseLevel(noiselevel);
    Setlocation(location);
    SetbuildingName(buildingName)
    SetsearchBuilding(searchbuilding);
  }

  // for the filtering in blog nav bar
  var displayedData = props.buildingsData;
  const filternull = [partySize, noiseLevel, location, buildingName, searchBuilding];
  for (let i = 0; i < filternull.length; i++) {
    if (filternull[i] !== undefined) {
      if (i === 0) {
        displayedData = displayedData.filter((building) => ((partySize === "6+") ? parseInt(partySize[0]) <= building.maxpartySize : partySize <= building.maxpartySize));
      }
      else if (i === 1) {
        displayedData = displayedData.filter((building) => (noiseLevel === building.noiseLevel));
      }
      else if (i === 2) {
        displayedData = displayedData.filter((building) => (location === building.area));
      }
      else if (i === 3) {
        displayedData = displayedData.filter((building) => (buildingName === building.location));
      }
      else if (i === 4) {
        displayedData = displayedData.filter((building) => (searchBuilding === building.location));
      }
    }
  }

  //console.log(displayedData);

  const uniqueBuildingSet = new Set(props.buildingsData.map(building => building.location));
  const uniqueBuildingArray = [...uniqueBuildingSet];
  return (
    <div>
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
                <a className="nav-link active" aria-current="page" href=""><i className="fas fa-home"></i>Homepage</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href=""><i className="fas fa-map-marker-alt"></i>Map</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href=""><i className="fas fa-pencil-alt"></i>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <h1>BLOG</h1>
      </header>
      <main>
        <NavBlog building={uniqueBuildingArray} applyFilterCallback={applyFilter} />
        <BuildingCardTable buildingList={displayedData} />
      </main>
    </div>
  );
}
export default App;
