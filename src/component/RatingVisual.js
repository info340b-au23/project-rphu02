import React from "react";


export default function RatingGraph(props) {
    const ratings = props.ratings;
    const oneStar = [
        <span key={1} className="fa fa-star checked"></span>,
        <span key={2} className="fa fa-star"></span>,
        <span key={3} className="fa fa-star"></span>,
        <span key={4} className="fa fa-star"></span>,
        <span key={5} className="fa fa-star"></span>];
    const twoStar = [
        <span key={1} className="fa fa-star checked"></span>,
        <span key={2} className="fa fa-star checked"></span>,
        <span key={3} className="fa fa-star"></span>,
        <span key={4} className="fa fa-star"></span>,
        <span key={5} className="fa fa-star"></span>];
    const threeStar = [
        <span key={1} className="fa fa-star checked"></span>,
        <span key={2} className="fa fa-star checked"></span>,
        <span key={3} className="fa fa-star checked"></span>,
        <span key={4} className="fa fa-star"></span>,
        <span key={5} className="fa fa-star"></span>];
    const fourStar = [
        <span key={1} className="fa fa-star checked"></span>,
        <span key={2} className="fa fa-star checked"></span>,
        <span key={3} className="fa fa-star checked"></span>,
        <span key={4} className="fa fa-star checked"></span>,
        <span key={5} className="fa fa-star"></span>];
    const fiveStar = [
        <span key={1} className="fa fa-star checked"></span>,
        <span key={2} className="fa fa-star checked"></span>,
        <span key={3} className="fa fa-star checked"></span>,
        <span key={4} className="fa fa-star checked"></span>,
        <span key={5} className="fa fa-star checked"></span>];

    console.log(ratings);
    let bucket = [0, 0, 0, 0, 0]
    for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        bucket[rating.rating - 1]++;
    }
    return (
        <div className="row">
            <div className="side">
                <div>5 stars:</div>
                <div>{fiveStar}</div>
            </div>
            <div className="middle">
                <div className="bar-container">
                    <div className="bar-5" style={{ width: `${bucket[4] * 100 / ratings.length}%` }}></div>
                </div>
                <div>{bucket[4]}</div>
            </div>

            <div className="side">
                <div>4 stars:</div>
                <div>{fourStar}</div>
            </div>
            <div className="middle">
                <div className="bar-container">
                    <div className="bar-5" style={{ width: `${bucket[3] * 100 / ratings.length}%` }}></div>
                </div>
                <div>{bucket[3]}</div>
            </div>

            <div className="side">
                <div>3 stars:</div>
                <div>{threeStar}</div>
            </div>
            <div className="middle">
                <div className="bar-container">
                    <div className="bar-5" style={{ width: `${bucket[2] * 100 / ratings.length}%` }}></div>
                </div>
                <div>{bucket[2]}</div>
            </div>

            <div className="side">
                <div>2 stars:</div>
                <div>{twoStar}</div>
            </div>
            <div className="middle">
                <div className="bar-container">
                    <div className="bar-5" style={{ width: `${bucket[1] * 100 / ratings.length}%` }}></div>
                </div>
                <div>{bucket[1]}</div>
            </div>

            <div className="side">
                <div>1 star:</div>
                <div>{oneStar}</div>
            </div>
            <div className="middle">
                <div className="bar-container">
                    <div className="bar-5" style={{ width: `${bucket[0] * 100 / ratings.length}%` }}></div>
                </div>
                <div>{bucket[0]}</div>
            </div>
        </div>
    )
}