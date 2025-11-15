import { createSlice } from "@reduxjs/toolkit";
import { fetchPlayers, fetchAllPlayers } from "../action/player.action";

const initialState = {
  playersByCategory: {},   // <-- IMPORTANT
  allPlayers: [],
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
      });
  }
});

export default playerSlice.reducer;
