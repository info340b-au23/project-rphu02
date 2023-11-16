import React, { useState } from 'react'; //import React Component
import './App.css';
import { BuildingCardTable } from './component/BuildingCardTable';
import { NavBlog } from './component/Navigation';
function App(props) {
  const [partySize,SetpartySize] = useState(null);
  const [noiseLevel,SetnoiseLevel] = useState(null);
  const [location,Setlocation] = useState("null");
  const [searchBuilding,SetsearchBuilding] = useState(null);
  function applyFilter(partysize,noiselevel,location,searchbuilding) {
    SetpartySize(partysize);
    SetnoiseLevel(noiselevel);
    Setlocation(location);
    SetsearchBuilding(searchbuilding);
  }

  // for the filtering in blog nav bar
  var displayedData = props.buildingsData;
  const filternull = [partySize,noiseLevel,location,searchBuilding];
  for (let i = 0; i < filternull.length; i++) { 
    if (filternull[i] != null) {
      if(i === 0) {
        displayedData = displayedData.filter((building) => (partySize >= building.maxpartySize));
      }
      else if(i === 1) {
        displayedData = displayedData.filter((building) => (noiseLevel === building.noiselevel));
      }
      else if(i === 2) {
        if (filternull[i] === "North" || filternull[i] === "East" || filternull[i] === "South" || filternull[i] === "West"){
          displayedData = displayedData.filter((building) => (location === building.area));
        }
        else {
          displayedData = displayedData.filter((building) => (location === building.location));}
      }
      else if(i === 3) {
        displayedData = displayedData.filter((building) => (searchBuilding === building.name));
      }
    }
  }

  console.log(displayedData);

  const uniqueBuildingSet = new Set(props.buildingsData.map(building => building.location));
  const uniqueBuildingArray = [...uniqueBuildingSet];
  return (
    <NavBlog building={uniqueBuildingArray} />
    // <BuildingCardTable buildingList={props.buildingsData} />
  );
}
//<BuildingCardTable buildingList={props.buildingsData}/>
export default App;
