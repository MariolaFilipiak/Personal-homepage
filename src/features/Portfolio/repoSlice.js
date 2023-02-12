import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: null,
    status: "initial",
  },
  reducers: {
    fetchRepos: () => ({
      repos: null,
      status: "loading",
    }),
    fetchReposSuccess: (_, { payload: repos }) => ({
      repos,
      status: "success",
    }),
    fetchReposError: () => ({
      repos: null,
      status: "error",
    }),
  },
});

export const { fetchReposSuccess, fetchRepos, fetchReposError } =
  reposSlice.actions;

const selectReposState = (state) => state.repos;

export const selectRepos = (state) => selectReposState(state).repos;
export const selectReposStatus = (state) => selectReposState(state).status;

export default reposSlice.reducer;
