import { Business } from "../../model/business.model";

const businessSearchResultReducer = (state: Business[] = [], action) => {
    switch (action.type) {
        case 'UPDATE_BUSINESS_SEARCH_RESULT':
            state = action.value;
            return state;
        default:
            return [];
    }
}

export default businessSearchResultReducer;