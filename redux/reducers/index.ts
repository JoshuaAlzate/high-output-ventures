import { combineReducers } from "@reduxjs/toolkit";
import businessSearchResultReducer  from './business.reducer';


const allReducers = combineReducers({
    businessSearchResult: businessSearchResultReducer
});

export default allReducers;