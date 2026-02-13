import './Movie.css'

function Movie({ title, director, year, rating, poster }) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={poster} alt={`${title} poster`} loading="lazy" />
            </div>
            <div className="movie-body">
                <h3 className="movie-title">{title}</h3>
                <p className="movie-director">Director: {director}</p>
                <p className="movie-year">Year: {year}</p>
                <p className="movie-rating">Rating: {rating} stars</p>
            </div>
        </div>
    )
}

export default Movie;