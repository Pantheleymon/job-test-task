import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface IPost {
    id: string;
    title: string;
    body: string;
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getPosts: builder.query<Array<IPost>, {}>({
            query: () => `posts`,
        }),
        getPostById: builder.query<IPost, number | string | undefined>({
            query: (id) => `posts/${id}`,
        })
    })
});

export const {useGetPostsQuery, useGetPostByIdQuery} = postsApi;