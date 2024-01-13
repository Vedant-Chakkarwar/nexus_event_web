// import reducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import InfoCardSlice from "../reducers/InfoCardSlice";

const store = configureStore({
    reducer: InfoCardSlice
});

export default store;
