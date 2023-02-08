import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../rootSaga";
import repositoriesReducer from "./repoSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
