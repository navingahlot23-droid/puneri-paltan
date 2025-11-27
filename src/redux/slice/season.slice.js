import { createSlice } from "@reduxjs/toolkit";
import { fetchSeason, fetchSeasonContent, fetchSeasonGallery, fetchSingleGallery, fetchGalleryGateways } from "../action/season.action";

const initialState = {
    allSeason: [],
    seasonContent: [],
    gallery:[],
    singleGallery:null,
    galleryGateways: [],
    loading: false,
    error: null
}

const seasonSlice = createSlice({
  name: "season",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeason.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSeason.fulfilled, (state, action) => {
        state.loading = false;
        state.allSeason = action.payload; 
      })
      .addCase(fetchSeason.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSeasonContent.pending, (state) => {
        state.loading = true;
        state.seasonContent = [];
      })
      .addCase(fetchSeasonContent.fulfilled, (state, action) => {
        state.loading = false;
        state.seasonContent = action.payload;
      })
      .addCase(fetchSeasonContent.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchSeasonGallery.pending, (state) => {
        state.loading = true;
        state.gallery = [];
      })
      .addCase(fetchSeasonGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = action.payload;
      })
      .addCase(fetchSeasonGallery.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchSingleGallery.pending, (state) => {
        state.loading = true;
        state.singleGallery = null;
      })
      .addCase(fetchSingleGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.singleGallery = action.payload;
      })
      .addCase(fetchSingleGallery.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchGalleryGateways.fulfilled, (state, action) => {
        state.galleryGateways = action.payload;
      });

  }
});

const seasonReducer = seasonSlice.reducer;

export default seasonReducer;
