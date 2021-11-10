// import SHOP_DATA from "./shop.data";
import { shopActionsTypes } from "./shop.types";
const INITIAL_STATE = {
    collections: null,
    loading: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionsTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                loading: true,
            };
        case shopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                loading: false,
            };
        case shopActionsTypes.FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default shopReducer;
