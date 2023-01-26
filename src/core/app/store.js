import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import personalHomepageReducer from "../../features/app/Portfolio/Repositories/personalHomepageSlice"
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;