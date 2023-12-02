import React, { useState } from 'react'; //import React Component
import { BuildingCardTable } from './BuildingCardTable';
import { NavBlog } from './Navigation';
import { NavMain } from './Navigation';
import buildings from "../data/buildings.json"

export default function Blog(props) {
    const [includeps, Setincludeps] = useState(false);
    const [partySize, SetpartySize] = useState("");
    const [rating, Setrating] = useState("");
    const [noiseLevel, SetnoiseLevel] = useState("");
    const [area, Setarea] = useState("");
    const [buildingName, SetbuildingName] = useState("");
    function applyFilter(includeps, partysize, rating, noiselevel, buildingName, area) {
        Setincludeps(includeps);
        SetpartySize(partysize);
        Setrating(rating);
        SetnoiseLevel(noiselevel);
        Setarea(area);
        SetbuildingName(buildingName);
      }
      // for the filtering in blog nav bar
      var displayedData = buildings;
      const filternull = [partySize, rating, noiseLevel, buildingName, area];
      for (let i = 0; i < filternull.length; i++) {
        if (filternull[i] !== "") {
          if (i === 0) {
            displayedData = displayedData.filter((building) => ((includeps) ? partySize <= building.maxpartySize : partySize == building.maxpartySize));
          }
          else if (i === 1) {
            displayedData = displayedData.filter((building) => (rating == building.rating));
          }
          else if (i === 2) {
            displayedData = displayedData.filter((building) => (noiseLevel === building.noiseLevel));
          }
          else if (i === 3) {
            displayedData = displayedData.filter((building) => (buildingName === building.location));
          }
          else if (i === 4) {
            displayedData = displayedData.filter((building) => (area === building.area));
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
                <BuildingCardTable buildingList={displayedData} building={uniqueBuildingArray} area={uniqueAreaArray}/>
            </main></>
    );
}