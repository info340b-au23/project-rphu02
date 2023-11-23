import React from "react";

export default function ReviewForm() {
    return (
        <section>
            <form>
                <header>
                    <h5>Your Rating:</h5>
                </header>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <div>
                    <label for="comment_field">Thoughts?</label>
                    <textarea class="form-control" id="comment_field" name="comment"></textarea>
                </div>
                <a class="btn btn-dark test" href="#">Submit</a>
            </form>
        </section>
    )
}