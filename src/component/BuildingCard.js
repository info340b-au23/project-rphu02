import React, { useState } from 'react'; //import React Component

export function BuildingCard(props) {
  var liStars = [
    <span key={1} className="fa fa-star"></span>,
    <span key={2} className="fa fa-star"></span>,
    <span key={3} className="fa fa-star"></span>,
    <span key={4} className="fa fa-star"></span>,
    <span key={5} className="fa fa-star"></span>];
  for (let i = 0; i < props.building.rating; i++) {
    liStars[i] = <span key={i} className="fa fa-star checked"></span>
  }


  return (
      <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link><div className="col col-md-6 col-xl-4 d-flex">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="ci col col-sm-auto col-xl-12">
              <img className="pb-3" src={props.building.img} alt={props.building.name} />
            </div>
            <div className="col-sm">
              <h2 className="card-title">{props.building.name}</h2>
              {liStars}
              <div className="row">
                <div className="b">
                  <a className="btn btn-dark" href="">Map</a>
                  <a className="btn btn-dark ba" href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}