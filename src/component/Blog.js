import React, { useState } from 'react'; //import React Component
import { BuildingCardTable } from './BuildingCardTable';
import { NavBlog } from './Navigation';
import { NavMain } from './Navigation';
import buildings from "../data/buildings.json"

export default function Blog(props) {
    const [partySize, SetpartySize] = useState("");
    const [noiseLevel, SetnoiseLevel] = useState("");
    const [location, Setlocation] = useState("");
    const [buildingName, SetbuildingName] = useState("");
    const [searchBuilding, SetsearchBuilding] = useState("");
    function applyFilter(partysize, noiselevel, location, buildingName, searchbuilding) {
        SetpartySize(partysize);
        SetnoiseLevel(noiselevel);
        Setlocation(location);
        SetbuildingName(buildingName);
        SetsearchBuilding(searchbuilding);
      }
      // for the filtering in blog nav bar
      var displayedData = buildings;
      const filternull = [partySize, noiseLevel, location, buildingName, searchBuilding];
      for (let i = 0; i < filternull.length; i++) {
        if (filternull[i] !== "") {
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
    
      const uniqueBuildingSet = new Set(buildings.map(building => building.location));
      const uniqueBuildingArray = [...uniqueBuildingSet];
      const uniqueAreaSet = new Set(buildings.map(building => building.area));
      const uniqueAreaArray = [...uniqueAreaSet];
    
    return (
        <><header>
            <h1>BLOG</h1>
        </header><main>
                <NavBlog building={uniqueBuildingArray} area={uniqueAreaArray} applyFilterCallback={applyFilter} />
                <BuildingCardTable buildingList={displayedData} />
            </main></>
    );
}