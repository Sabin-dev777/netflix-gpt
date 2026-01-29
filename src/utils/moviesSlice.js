import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    watchlist: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addToWatchlist: (state, action) => {
      // Avoid duplicates
      if (!state.watchlist.some((m) => m.id === action.payload.id)) {
        state.watchlist.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.id !== action.payload,
      );
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addToWatchlist,
  removeFromWatchlist,
} = moviesSlice.actions;
export default moviesSlice.reducer;
