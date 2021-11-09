import { shopActionsTypes } from "./shop.types";
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const getCollections = () => async (dispatch) => {
    const collectionRef = firestore.collection("collections");
    const snapshot = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    console.log(collectionsMap);
    dispatch({
        type: shopActionsTypes.GET_COLLECTIONS,
        payload: collectionsMap,
    });
};
