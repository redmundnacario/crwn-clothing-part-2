import { shopActionsTypes } from "./shop.types";
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSucces = (data) => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: data,
});
export const fetchCollectionsFail = (error) => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_FAIL,
    payload: error,
});

export const fetchCollectionsAsync = () => (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
        .get()
        .then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSucces(collectionsMap));
        })
        .catch((error) => {
            dispatch(fetchCollectionsFail(error.message));
        });
};
