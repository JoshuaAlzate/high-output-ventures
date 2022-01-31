import { Business } from "../../model/business.model";


export function updateBusinessSearchResult(businessSearchResult: Business[]) {
    return {
        type: 'UPDATE_BUSINESS_SEARCH_RESULT',
        value: businessSearchResult
    }
}