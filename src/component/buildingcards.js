import React, { useState } from 'react'; //import React Component

export function buildingCard(props) {
  var liStars = [<span className="fa fa-star"></span>,
                   <span className="fa fa-star"></span>,
                   <span className="fa fa-star"></span>,
                   <span className="fa fa-star"></span>,
                   <span className="fa fa-star"></span>];
  for (let i = 0; i < props.building.rating; i++) { 
    liStars[i] = <span className="fa fa-star checked"></span>
  }
  
      
  return (
    <div className="col col-md-6 col-xl-4 d-flex">
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
                  <a className="btn btn-dark" href="../html/Map.html">Map</a>
                  <a className="btn btn-dark" href="../html/forum_popup.html">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}