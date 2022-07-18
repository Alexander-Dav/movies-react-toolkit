import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
  const responce = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);

  return responce.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
  const responce = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
  return responce.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const responce = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return responce.data;
  },
);
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlise = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched Successfylly');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('regectted');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fetched Successfylly');
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('fetched Successfylly');
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlise.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlise.reducer;
