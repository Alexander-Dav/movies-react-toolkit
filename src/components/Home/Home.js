import React, { useEffect } from 'react'; 
import MovieListing from '../MovieListing/MovieListing'; 
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
 


const Home = () => {
    const movieText = "Harry"
    const showsText = "Friends"

    const dispatch = useDispatch()
    useEffect(() => {       
       dispatch(fetchAsyncMovies(movieText))
       dispatch(fetchAsyncShows(showsText))
    }, []);
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
};

export default Home;