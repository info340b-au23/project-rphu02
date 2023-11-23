import React from "react";
import RatingCard from "./RatingCard";


export default function RatingTable(props) {
    const reviews = props.reviews;
    const ratingCards = reviews.map((review) => {
        return <RatingCard review={review} />
    })

    return (
        <div class="card mb-4">
            <div class="card-body">
                <h2 class="card-title">Student Reviews</h2>
                {ratingCards}
            </div>
        </div>
    )
}