import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export type IRootState = ReturnType<typeof store.getState>