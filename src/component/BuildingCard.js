import React, { useState } from 'react'; //import React Component
import { Link } from 'react-router-dom';

export function BuildingCard(props) {
  var liStars = [
    <span key={1} className="fa fa-star"></span>,
    <span key={2} className="fa fa-star"></span>,
    <span key={3} className="fa fa-star"></span>,
    <span key={4} className="fa fa-star"></span>,
    <span key={5} className="fa fa-star"></span>
  ];
  for (let i = 0; i < props.building.rating; i++) {
    liStars[i] = <span key={i} className="fa fa-star checked"></span>
  }

  var liHumans = [];
  for (let i = 0; i < props.building.maxpartySize; i++) {
    liHumans.push(<span key={i} className='fas fa-user-alt'></span>);
  }


  return (
    <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <div className="col col-md-6 col-xl-4 d-flex">
        <div className="card mb-4">
          <div className="card-body">
              <div className="ci col col-sm-auto col-xl-12">
                <img className="pb-3" src={props.building.img} alt={props.building.name} />
              </div>
              <div className="col-sm">
                <h2 className="card-title"><b>{props.building.name}</b> <span style={{ color: "#484848" }}> ({props.building.location})</span></h2>
              </div>
              <div className='col-sm cardBottom'>
                <div className="row">
                  <div className="col-md-6">
                    {liStars}
                  </div>
                  <div className="col-md-6 ">
                    <div className='humans'>
                      {liHumans}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="b">
                    <Link to={'/Map'} className="btn btn-dark">
                      Map
                    </Link>
                    <Link to={`/BlogForum/${props.building.name}`} className="btn btn-dark">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}