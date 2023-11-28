import React from "react";


export default function RatingCard(props){
    const review = props.review;
    var liStars = [
        <span key={1} className="fa fa-star"></span>,
        <span key={2} className="fa fa-star"></span>,
        <span key={3} className="fa fa-star"></span>,
        <span key={4} className="fa fa-star"></span>,
        <span key={5} className="fa fa-star"></span>];
      for (let i = 0; i < review.rating; i++) {
        liStars[i] = <span key={i} className="fa fa-star checked"></span>
      }

    return (
        <div className="card mb-4">
                <div className="card-body">
                  <h6 className="card-title">{review.user}</h6>
                  {liStars}
                  <p>{review.description}</p>
                </div>
        </div>
    )
}