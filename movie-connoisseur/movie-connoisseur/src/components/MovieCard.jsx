import "../css/MovieCard.css"
import { useState } from "react"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    const truncateOverview = (text, wordLimit = 100) => {
        if (!text) return 'No overview available.';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            {isHovered && (
                <div className="movie-overlay">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-overview">
                        {truncateOverview(movie.overview)}
                    </p>
                    <div className="movie-rating">
                        ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                    </div>
                </div>
            )}

            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>

    </div>
}

export default MovieCard