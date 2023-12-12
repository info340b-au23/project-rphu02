import { render } from "@testing-library/react";
import { getDatabase, ref, set as firebaseSet, push as firebasePush} from "firebase/database";
import React, { useState } from "react";

export default function ReviewForm(props) {
    const name = props.name;
    const reviews = props.ratings;
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleStarClick = (clickedRating) => {
        setRating(clickedRating);
    };

    const renderStars = () => {
        const maxStars = 5;
        const starArray = [];
    
        for (let i = 1; i <= maxStars; i++) {
          const starClass = i <= rating ? "fa fa-star checked" : "fa fa-star";
          starArray.push(
            <span
              key={i}
              className={starClass}
              onClick={() => handleStarClick(i)}
            ></span>
          );
        }
    
        return starArray;
    };
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        const db = getDatabase();
        const reviewRef = ref(db, "ratings/ratings/" + name + "/ratings");

        const newReviews = [...reviews];
        newReviews.push({description: review, name: name, rating: rating, user: "Guest"})

        firebaseSet(reviewRef, newReviews)
            .then(() => console.log('success!'))
            .catch(err => console.log(err));
    }

    const handleReviewChange = (evt) => {
        setReview(evt.target.value)
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <header>
                    <h5>Your Rating:</h5>
                    {renderStars()}
                </header>
                <div>
                    <label htmlFor="comment_field">Thoughts?</label>
                    <textarea className="form-control" id="comment_field" name="comment" value={review} onChange={handleReviewChange}></textarea>
                </div>
                <button type="submit" className="btn btn-dark test">Submit</button>
            </form>
        </section>
    )
}