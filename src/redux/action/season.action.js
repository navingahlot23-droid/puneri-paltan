import api from "../../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSeason = createAsyncThunk(
    "season/fetchByCategory",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/season_list");
       
            return response.data;
          } catch (error) {
            return rejectWithValue(error.message);
          }
    }
  );

  export const fetchSeasonContent = createAsyncThunk(
    "season/fetchContent",
    async (cat_id, { rejectWithValue }) => {
      try {
        const response = await api.get(
          `/puneri_tv_list?cat_id=${cat_id}`
        );
        return response.data; // array of videos
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchSeasonGallery = createAsyncThunk(
    "season/fetchGallery",
    async (cat_id, { rejectWithValue }) => {
      try {
        const response = await api.get(
          `/gallary_list?cat_id=${cat_id}`
        );
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchSingleGallery = createAsyncThunk(
    "season/fetchSingleGalleryPhotos",
    async (id, { rejectWithValue }) => {
      try {
        const response = await api.get(
          `/single_gallary?id=${id}`
        );
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchGalleryGateways = createAsyncThunk(
    "season/fetchGalleryGateways",
    async (currentId, { rejectWithValue }) => {
      try {
        const cid = Number(currentId);
  
        // example: previous + next
        const dynamicIds = [cid - 1, cid + 1].filter(n => n > 0);
  
        const responses = await Promise.all(
          dynamicIds.map(id => api.get(`/single_gallary?id=${id}`))
        );
  
        return responses.map(r => r.data);
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  