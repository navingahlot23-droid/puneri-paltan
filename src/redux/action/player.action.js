import api from "../../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlayers = createAsyncThunk(
    "players/fetchByCategory",
    async (cat_id, { rejectWithValue }) => {
      try {
        const response = await api.get(`player_list?cat_id=${cat_id}`);
  
        return {
          cat_id,
          players: response.data   // <-- THIS MUST MATCH your API
        };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchAllPlayers = createAsyncThunk(
    "players/fetchAll",
    async (_, { rejectWithValue }) => {
      try {
        // Fetch per-category
        const [cat1, cat2, cat3] = await Promise.all([
          api.get("player_list?cat_id=1"),
          api.get("player_list?cat_id=2"),
          api.get("player_list?cat_id=3"),
        ]);
  
        // Merge them into one array
        return [
          ...cat1.data,
          ...cat2.data,
          ...cat3.data,
        ];
  
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
