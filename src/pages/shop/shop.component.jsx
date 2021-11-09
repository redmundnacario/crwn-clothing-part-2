import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

// import {
//     firestore,
//     convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { getCollections } from "../../redux/shop/shop.actions";

const ShopPage = ({ match }) => {
    const dispatch = useDispatch();
    const collections = useSelector(selectCollectionsForPreview);

    useEffect(() => {
        dispatch(getCollections());
    }, [dispatch]);

    console.log(collections);
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />

            <Route
                exact
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};
// <Route exact path={`${match.path}`} component={CollectionsOverview}/>
export default ShopPage;
