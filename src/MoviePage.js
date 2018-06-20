import React, { Fragment } from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import Placeholder from './Placeholder';
import Spinner from './Spinner';
import { fetchMovieDetails, fetchMovieReviews } from './api';

export const cache = createCache();
const movieDetailsResource = createResource(fetchMovieDetails);
const movieReviewsResource = createResource(fetchMovieReviews);

function MovieDetails(props) {
    const movie = movieDetailsResource.read(cache, props.id);
    return (
        <Fragment>
            <div className="MovieDetails">
                <MoviePoster src={movie.poster} />
                <h1>{movie.title}</h1>
                <MovieMetrics {...movie} />
            </div>
        </Fragment>
    );
}

function MoviePoster(props) {
    return (
        <img
            className="MoviePoster"
            alt="poster"
            src={props.src}
            width="200"
            height="300"
        />
    );
}

function MovieMetrics(props) {
    return (
        <Fragment>
            <div className="MovieMetrics-tomato">
                <h4>Tomatometer</h4>
                <p>
                    {props.fresh ? '🍅' : '🤢'} {props.rating}
                </p>
            </div>
            <div className="MovieMetrics-audience">
                <h4>Audience</h4>
                <p>
                    {'🍿'} {props.audience}
                </p>
            </div>
            <div className="MovieMetrics-consensus">
                <h4>Critics Consensus</h4>
                <p>{props.consensus}</p>
            </div>
        </Fragment>
    );
}

function MovieReviews(props) {
    const reviews = movieReviewsResource.read(cache, props.id);
    return (
        <div className="MovieReviews">
            {reviews.map(review => <MovieReview key={review.id} {...review} />)}
        </div>
    );
}

function MovieReview(props) {
    return (
        <blockquote className="MovieReview">
            <figure>{props.fresh ? '🍅' : '🤢'}</figure>
            <p>{props.text}</p>
            <footer>
                {props.author.name}, {props.author.publication}
            </footer>
        </blockquote>
    );
}

export default function MoviePage(props) {
    return (
        <Fragment>
            <MovieDetails id={props.id} />
            <Placeholder delayMs={1000} fallback={<Spinner size="medium" />}>
                <MovieReviews id={props.id} />
            </Placeholder>
        </Fragment>
    )
}
