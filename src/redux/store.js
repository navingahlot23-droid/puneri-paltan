import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player.slice";
import seasonReducer from "./slice/season.slice";

const store = configureStore({
    reducer: {
        players: playerReducer,
        season: seasonReducer
    },
});

export default store;