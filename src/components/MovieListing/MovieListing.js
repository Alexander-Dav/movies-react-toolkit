import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick/lib/slider';
import { settings } from '../../common/settings';
 
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
    
  

    const movies = useSelector(getAllMovies);
    const swows = useSelector(getAllShows);

    console.log('List2', swows)
    let renderMovies, renderSwows = ""

    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))

        ) : (
            <div className='movie-error'>
                <h3>{movies.Error}</h3>
            </div>
        )
    renderSwows =
        movies.Response === "True" ? (
            swows.Search.map((swow, index) => (
                <MovieCard key={index} data={swow} />
            ))

        ) : (
            <div className='movie-error'>
                <h3>{movies.Error}</h3>
            </div>
        )


    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...settings}>
                        {renderMovies}
                    </Slider></div>
            </div>
            <div className="shows-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    <Slider {...settings}>
                        {renderSwows}
                    </Slider></div>
            </div>
        </div>
    );
};

export default MovieListing;