
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
    reducerPath: 'postapi',
    tagTypes: ["post"],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => `post`,
            providesTags: ['post']
        }),


        uploadPost: builder.mutation({
            query: (body) => ({
                url: "post/create",
                method: "post",
                headers: {
                    "Content-Type": " application/json"
                },
                body: JSON.stringify(body)
            }),
            invalidatesTags: ['post']

        })
    }),
})


export const { useGetAllPostQuery,useUploadPostMutation } = postApi