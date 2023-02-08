import { createSlice } from "@reduxjs/toolkit";

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      repositories: null,
      status: "loading",
    }),
    fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
      repositories,
      status: "success",
    }),
    fetchRepositoriesError: () => ({
      repositories: null,
      status: "error",
    }),
  },
});

export const {
  fetchRepositoriesSuccess,
  fetchRepositories,
  fetchRepositoriesError,
} = repositoriesSlice.actions;

const selectRepositoriesState = (state) => state.repositories;

export const selectRepositories = (state) =>
  selectRepositoriesState(state).repositories;
export const selectRepositoriesStatus = (state) =>
  selectRepositoriesState(state).status;

export default repositoriesSlice.reducer;
