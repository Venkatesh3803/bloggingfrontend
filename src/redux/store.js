import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice"
import { postApi } from './postApi'

const store = configureStore({
    reducer: {
        user: authReducer,

        [postApi.reducerPath]: postApi.reducer,
    },
   
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})

export default store