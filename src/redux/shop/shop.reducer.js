// import SHOP_DATA from "./shop.data";
import { shopActionsTypes } from "./shop.types";
const INITIAL_STATE = {
    collections: null,
    loading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionsTypes.GET_COLLECTIONS:
            return {
                ...state,
                collections: { ...action.payload },
                loading: false,
            };
        default:
            return state;
    }
};

export default shopReducer;
