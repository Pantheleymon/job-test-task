import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
});

export type IRootState = ReturnType<typeof store.getState>