import React from "react";
import RatingGraph from "./RatingVisual";


export default function RatingInfo(props) {
    const building = props.building;
    const ratings = props.ratings;
    var liStars = [
        <span key={1} className="fa fa-star"></span>,
        <span key={2} className="fa fa-star"></span>,
        <span key={3} className="fa fa-star"></span>,
        <span key={4} className="fa fa-star"></span>,
        <span key={5} className="fa fa-star"></span>];
    for (let i = 0; i < building.rating; i++) {
        liStars[i] = <span key={i} className="fa fa-star checked"></span>
    }

    return (
        <div class="row">
            <div class="col col-sm-auto col-xl-12">
                <img class="pb" src={`../${building.img}`} alt="cs_building" style={{ maxWidth: '100%' }} />
            </div>
            <div class="col-sm">
                <h2 class="card-title">{building.name}</h2>
                <p class="card-text">{building.description}</p>
                <div class="row">
                    <div>
                        <p>Rating: {building.rating} / 5.0 ({ratings.length} Reviews)</p>
                        {liStars}
                    </div>
                </div>
            </div>
            <RatingGraph ratings={ratings}/>
            <div class="row rating">

                <div class="col-12">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col col-sm-auto col-xl-12">
                                    <a class="btn btn-dark" href="#comment_field">Add Your
                                        Own Review!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}