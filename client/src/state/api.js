import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customer",
    "Transactions",
    "Geography",
    "Overview",
    "Admins",
    "Performence",
    "Dashboard"
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"]
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"]
    }),
    getCustomer: build.query({
      query: () => "client/customer",
      providesTags: ["Customer"]
    }),
    getTransaction: build.query({
      query: ({ page, pagesize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pagesize, sort, search },
        providesTags: ["Transactions"]
      })
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"]
    }),
    getSales: build.query({
      query: () => "sales/overview",
      providesTags: ["Overview"]
    }),
    getAdmin: build.query({
      query: () => "management/admin",
      providesTags: ["Admins"]
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"]
    }),
    getDashboardStats: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"]
    })

  })

})

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomerQuery,
  useGetTransactionQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminQuery,
  useGetUserPerformanceQuery,
  useGetDashboardStatsQuery
} = api;