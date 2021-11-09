// import SHOP_DATA from "./shop.data";
import { shopActionsTypes } from "./shop.types";
// const INITIAL_STATE = {
//     collections: {},
// };

const shopReducer = (state = { collections: {} }, action) => {
    switch (action.type) {
        case shopActionsTypes.GET_COLLECTIONS:
            return {
                ...state,
                collections: { ...action.payload },
            };
        default:
            return state;
    }
};

export default shopReducer;
