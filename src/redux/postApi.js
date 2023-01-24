import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
    reducerPath: 'postApi',
    tagTypes: ["post"],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        getUsersPost: builder.mutation({
            query: ({ id, username }) => ({
                url: `/user/users/${id}`,
                username,
            }),
            invalidatesTags: ["post"]
        }),

        getPost: builder.query({
            query: () => `/post`,
            providesTags: ["post"]
        }),
    })
})

export const { useGetUsersPostMutation, useGetPostQuery } = postApi