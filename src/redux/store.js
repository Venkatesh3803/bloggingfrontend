import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice"
import { postApi } from './postApi'
import postReducer from "./postSlice"

const store = configureStore({
    reducer: {
        user: authReducer,
        post: postReducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})

export default store