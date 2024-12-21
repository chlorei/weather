import { configureStore, combineReducers } from "@reduxjs/toolkit/react";
import { cardReducer } from "./cardReducer";
import { locationReducer } from "./locationReducer";


const rootReducer = combineReducers({
    card: cardReducer,
    location: locationReducer,
})


export const store = configureStore({
    reducer: rootReducer,
});