import React from "react";

export default function ReviewForm() {
    return (
        <section>
            <form>
                <header>
                    <h5>Your Rating:</h5>
                </header>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <div>
                    <label htmlFor="comment_field">Thoughts?</label>
                    <textarea className="form-control" id="comment_field" name="comment"></textarea>
                </div>
                <a className="btn btn-dark test" href="#">Submit</a>
            </form>
        </section>
    )
}