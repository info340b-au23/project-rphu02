import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingInfo from './SummaryInfo';
import ratings from '../data/ratings.json'
import ReviewForm from './Review';
import RatingTable from './RatingTable';
import { child, get, getDatabase, ref } from 'firebase/database';

export default function BlogForum(props) {
  const [buildingData, setBuildingData] = useState([]);
  const [ratingsData, setRatingsData] = useState([]);
  const db = getDatabase();

  const name = useParams();
  const buildingName = name.buildingName;

  const dbRef = ref(getDatabase());
  get(child(dbRef, 'buildings/buildings/')).then((snapshot) => {
      if (snapshot.exists()) {
          const arrayOfObj = Object.entries(snapshot.val()).map((e) => ( e[1] ));
          setBuildingData(arrayOfObj);
      } else {
          console.log("No data available");
      }
  }).catch((error) => {
      console.error(error);
  });

  get(child(dbRef, 'ratings/ratings/' + buildingName)).then((snapshot) => {
      if (snapshot.exists()) {
          const arrayOfObj = Object.entries(snapshot.val()).map((e) => ( e[1] ));
          setRatingsData(arrayOfObj);
      } else {
          console.log("No data available");
      }
  }).catch((error) => {
      console.error(error);
  });

  console.log(buildingData)

  const selectedBuilding = buildingData.find(building => building.name === name.buildingName);
  const selectedRatings = ratings.filter((rating) =>{
    if (rating.name === selectedBuilding.name){
      return rating;
    }
  })

  console.log(selectedBuilding);
  return (
    <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-6 col-xl-4 d-flex">
          <div className="card mb-4">
            <div className="card-body">
              <RatingInfo building={selectedBuilding} ratings={selectedRatings}/>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Leave a Review</h2>
              <ReviewForm/>
            </div>
          </div>
         <RatingTable reviews={selectedRatings}/>
        </div>
      </div>
    </div>
    </>);
}