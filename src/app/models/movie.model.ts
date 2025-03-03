export interface Movie {
    title: string;
    rating?: string;
    usersRating?: string;
    watchlist?: string;
    imageUrl: string;
    director?: string;
    runtime?: string;
    genres?: string[];
    description?: string;
    tagline?: string;
    cast?: { name: string; imageUrl: string; role: string }[];
    staff?: { name: string; imageUrl: string; role: string }[];
    trailerUrl?: string;
    reviews?: { text: string; reviewer: string }[];
    similarMovies?: { title: string; imageUrl: string }[];
}