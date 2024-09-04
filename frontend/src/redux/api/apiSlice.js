import {createApi,fakeBaseQuery, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery(),
    endpoints :()=>({})
})