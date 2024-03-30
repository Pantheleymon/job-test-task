import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IPost } from '../types/types';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getPosts: builder.query<Array<IPost>, {}>({
            query: () => `posts`,
        }),
        getPostById: builder.query<IPost, number | string | undefined>({
            query: (id = 1) => `posts/${id}`,
        })
    })
});

export const {useGetPostsQuery, useGetPostByIdQuery} = postsApi;