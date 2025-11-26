import { createSlice } from "@reduxjs/toolkit";
import { fetchPlayers, fetchAllPlayers, fetchSinglePlayer } from "../action/player.action";

const initialState = {
  playersByCategory: {},   // <-- IMPORTANT
  allPlayers: [],
  singlePlayer: null,
  loading: false,
  error: null
};

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.loading = false;
        const { cat_id, players } = action.payload;
        state.playersByCategory[cat_id] = players;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllPlayers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPlayers.fulfilled, (state, action) => {
        state.loading = false;
        state.allPlayers = action.payload;   // <-- SETS ALL PLAYERS
      })
      .addCase(fetchAllPlayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSinglePlayer.pending, (state) => {
        state.loading = true;
        state.singlePlayer = null;
        state.error = null;
      })
      .addCase(fetchSinglePlayer.fulfilled, (state, action) => {
        state.loading = false;
        state.singlePlayer = action.payload;
      })
      .addCase(fetchSinglePlayer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

const playerReducer = playerSlice.reducer;

export default playerReducer;
