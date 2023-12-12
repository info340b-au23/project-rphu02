import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingInfo from './SummaryInfo';
import ratings from '../data/ratings.json'
import ReviewForm from './Review';
import RatingTable from './RatingTable';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';

export default function BlogForum(props) {
  const [buildings, Setdata] = useState([]);
  const [ratings, setRatings] = useState([]);
  const dbRef = ref(getDatabase());
  const name = useParams().buildingName;


  useEffect(() => {
    const buildingsRef = child(dbRef, '/buildings/buildings');
    const ratingsRef = child(dbRef, '/ratings/ratings/' + name);
    
    //returns a function that will "unregister" (turn off) the listener
    const unregisterBuildings = onValue(buildingsRef, (snapshot) => {
      const buildingsSnapshot = snapshot;
        if (buildingsSnapshot.exists()) {
          const arrayOfObj = Object.entries(buildingsSnapshot.val()).map((e) => e[1]);
          Setdata(arrayOfObj);
        } else {
          console.log("No data available for buildings");
        }
    })


    const unregisterRatings = onValue(ratingsRef, (snapshot) => {
      const ratingsSnapshot = snapshot;
        if (ratingsSnapshot.exists()) {
          const arrayOfObj = Object.entries(ratingsSnapshot.val()).map((e) => e[1]);
          setRatings(arrayOfObj);
        } else {
          console.log("No data available for ratings");
        }
    })

    //cleanup function for when component is removed
    function cleanup() {
      unregisterBuildings(); //call the unregister function
      unregisterRatings();
    }
    return cleanup; //effect hook callback returns the cleanup function
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const buildingsSnapshot = await get(child(dbRef, '/buildings/buildings'));
  //       if (buildingsSnapshot.exists()) {
  //         const arrayOfObj = Object.entries(buildingsSnapshot.val()).map((e) => e[1]);
  //         Setdata(arrayOfObj);
  //       } else {
  //         console.log("No data available for buildings");
  //       }

  //       const ratingsSnapshot = await get(child(dbRef, '/ratings/ratings/' + name));
  //       if (ratingsSnapshot.exists()) {
  //         const arrayOfObj = Object.entries(ratingsSnapshot.val()).map((e) => e[1]);
  //         setRatings(arrayOfObj);
  //       } else {
  //         console.log("No data available for ratings");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData(); // Call the function to fetch data when the component mounts
  // }, [/* Add dependencies if needed */]);

  const filteredBuilding = buildings.filter((building) => name === building.name)


  if (ratings.length < 1 || filteredBuilding.length < 1) {
    return <p>Loading...</p>
  } else {
    if (ratings.length < 2) {
      ratings.push([]);
    }
    return (
      <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
        <div className="container">
          {<div className="row">
            <div className="col col-sm-12 col-md-6 col-xl-4 d-flex">
              <div className="card mb-4">
                <div className="card-body">
                  <RatingInfo building={filteredBuilding[0]} ratings={ratings[1]} />
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Leave a Review</h2>
                  <ReviewForm name={name} ratings={ratings[1]}/>
                </div>
              </div>
              <RatingTable reviews={ratings[1]} />
            </div>
          </div>}
        </div>
      </>);
  }
}