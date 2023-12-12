import React from 'react';
import { Link } from 'react-router-dom';
import { Popup } from 'react-leaflet';

export function MapPopup({ building }) {
  const liStars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`fa fa-star ${i < building.rating ? 'checked' : ''}`}></span>
  ));
  var liHumans = [];
  for (let i = 0; i < building.maxpartySize; i++) {
    liHumans.push(<span key={i} className='fas fa-user-alt'></span>);
  }

  return (
    <Popup>
      <div className="card">
        <img className="card-img-top" src={building.img} alt={building.name} />
        <div className="card-body">
          <h5 className="card-title">
            <b>{building.name}</b> <span style={{ color: "#484848" }}> ({building.location})</span>
          </h5>
          <div className="row">
            <div className="col-md-6">
              {liStars}
            </div>
            <div className="col-md-6">
              <div className='humans'>
                {liHumans}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="b">
              <Link to={`/BlogForum/${building.name}`} className="btn btn-dark">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}