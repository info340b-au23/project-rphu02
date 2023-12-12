import React from "react";
import RatingCard from "./RatingCard";


export default function RatingTable(props) {
    const reviews = props.reviews;
    if (reviews.length === 0) {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">Student Reviews</h2>
                    <p>Be the first to leave a review!</p>
                </div>
            </div>)
    } else {
        const ratingCards = reviews.map((review) => {
            return <RatingCard review={review} />
        })

        return (
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">Student Reviews</h2>
                    {ratingCards}
                </div>
            </div>
        )
    }
}