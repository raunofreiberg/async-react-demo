import { movieDetails, movieReviews } from './data';

export const fetchMovieDetails = id => new Promise((resolve, reject) => {
    const movie = movieDetails[id];

    if (movie) {
        setTimeout(
            () => resolve(movie),
            3000, // Adjust this on your own
        );
        return;
    }

    reject(`No movie with ID: ${id}`);
});

export const fetchMovieReviews = id => new Promise((resolve, reject) => {
    const movie = movieReviews[id];

    if (movie) {
        setTimeout(
            () => resolve(movie),
            5000, // Adjust this on your own
        );
        return;
    }

    reject(`No reviews for movie with ID: ${id}`);
});
