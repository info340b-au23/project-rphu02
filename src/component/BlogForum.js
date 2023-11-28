import React from 'react';
import { useParams } from 'react-router-dom';
import RatingInfo from './SummaryInfo';
import ratings from '../data/ratings.json'
import ReviewForm from './Review';
import RatingTable from './RatingTable';

export default function BlogForum(props) {
  const buildingData = props.buildingData;
  const name = useParams();
  const selectedBuilding = props.buildingData.find(building => building.name === name.buildingName);
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