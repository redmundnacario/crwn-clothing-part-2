import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const initialState = {};

const middlewares = [thunk];

// if (process.env.NODE_ENV === "development") {
//     // middlewares.push(logger);
// }

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
