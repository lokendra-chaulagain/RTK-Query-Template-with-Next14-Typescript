import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const committeeApi = createApi({
  reducerPath: "committee",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  endpoints: (builder) => ({
    getAllCommittee: builder.query({
      query: () => "/committees",
    }),

    getCommitteeById: builder.query({
      query: (id) => `/committees/${id}`,
    }),

    addNewCommittee: builder.mutation({
      query: (newCommittee) => ({
        url: `/committees`,
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: newCommittee,
      }),
    }),

    updateCommittee: builder.mutation({
      query: ({ id, updatedCommittee }) => ({
        url: `/committees/${id}`,
        method: "PATCH",
        // headers: { "Content-Type": "application/json" },
        body: updatedCommittee,
      }),
    }),

    deleteCommittee: builder.mutation({
      query: (id) => ({
        url: `/committees/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllCommitteeQuery, useGetCommitteeByIdQuery, useAddNewCommitteeMutation, useUpdateCommitteeMutation, useDeleteCommitteeMutation } = committeeApi;
