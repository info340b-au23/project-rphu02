import React, { useState } from 'react'; //import React Component
import { BuildingCardTable } from './component/BuildingCardTable';
import { NavBlog } from './component/Navigation';
import { NavMain } from './component/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import MapPage from './component/MapPage';
import Blog from './component/Blog';
import Footer from './component/Footer';
import BlogForum from './component/BlogForum';

function App(props) {
  // const [partySize, SetpartySize] = useState(undefined);
  // const [noiseLevel, SetnoiseLevel] = useState(undefined);
  // const [location, Setlocation] = useState(undefined);
  // const [buildingName, SetbuildingName] = useState(undefined);
  // const [searchBuilding, SetsearchBuilding] = useState(undefined);
  // function applyFilter(partysize, noiselevel, location, buildingName, searchbuilding) {
  //   SetpartySize(partysize);
  //   SetnoiseLevel(noiselevel);
  //   Setlocation(location);
  //   SetbuildingName(buildingName)
  //   SetsearchBuilding(searchbuilding);
  // }
  // // for the filtering in blog nav bar
  // var displayedData = props.buildingsData;
  // const filternull = [partySize, noiseLevel, location, buildingName, searchBuilding];
  // for (let i = 0; i < filternull.length; i++) {
  //   if (filternull[i] !== undefined) {
  //     if (i === 0) {
  //       displayedData = displayedData.filter((building) => ((partySize === "6+") ? parseInt(partySize[0]) <= building.maxpartySize : partySize <= building.maxpartySize));
  //     }
  //     else if (i === 1) {
  //       displayedData = displayedData.filter((building) => (noiseLevel === building.noiseLevel));
  //     }
  //     else if (i === 2) {
  //       displayedData = displayedData.filter((building) => (location === building.area));
  //     }
  //     else if (i === 3) {
  //       displayedData = displayedData.filter((building) => (buildingName === building.location));
  //     }
  //     else if (i === 4) {
  //       displayedData = displayedData.filter((building) => (searchBuilding === building.location));
  //     }
  //   }
  // }
  // //console.log(displayedData);

  // const uniqueBuildingSet = new Set(props.buildingsData.map(building => building.location));
  // const uniqueBuildingArray = [...uniqueBuildingSet];
  return (
    <Router>
      <div>
        <NavMain />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/BlogForum/:buildingName" element={<BlogForum buildingData={props.buildingsData}/>} />
            {/* <NavBlog building={uniqueBuildingArray} applyFilterCallback={applyFilter} />
            <BuildingCardTable buildingList={displayedData} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
