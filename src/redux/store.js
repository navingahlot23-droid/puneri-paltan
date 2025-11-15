import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player.slice";

const store = configureStore({
    reducer: {
        players: playerReducer,
    },
});

export default store;