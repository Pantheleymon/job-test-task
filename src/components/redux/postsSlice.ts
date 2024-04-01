import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../types/types";

interface IInitialState {
    posts: Array<IPost>;
    postsStatus: 'idle' | 'loading' | 'error' | 'fetched';
}

const initialState:IInitialState = {
    posts: [],
    postsStatus: 'idle',
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.postsStatus = 'loading';
            state.posts.push({
                id: action.payload.id,
                title:  action.payload.title,
                body:  action.payload.body,
                reaction: '',
                likes: Math.floor(Math.random() * (50 - 0) + 0),
                dislikes: Math.floor(Math.random() * (50 - 0) + 0),
            });
            state.postsStatus = 'fetched';
        },
        updatePost(state, action) {
            state.posts.filter((item) => item.id == action.payload.id)[0].reaction = action.payload.userReaction;
        }
    },
});

export const {addPost, updatePost} = postsSlice.actions;

export default postsSlice.reducer;