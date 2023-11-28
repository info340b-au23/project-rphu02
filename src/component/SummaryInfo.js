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
        <div className="row">
            <div className="col col-sm-auto col-xl-12">
                <img className="pb" src={`../${building.img}`} alt="cs_building" style={{ maxWidth: '100%' }} />
            </div>
            <div className="col-sm">
                <h2 className="card-title">{building.name}</h2>
                <p className="card-text">{building.description}</p>
                <div className="row">
                    <div>
                        <p>Rating: {building.rating} / 5.0 ({ratings.length} Reviews)</p>
                        {liStars}
                    </div>
                </div>
            </div>
            <RatingGraph ratings={ratings}/>
            <div className="row rating">

                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col col-sm-auto col-xl-12">
                                    <a className="btn btn-dark" href="#comment_field">Add Your
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