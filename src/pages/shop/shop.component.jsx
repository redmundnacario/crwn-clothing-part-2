import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

// hoc
import WithSpinner from "../../components/common/spinner/spinner.component";

// components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {
    selectCollectionsForPreview,
    selectCollectionsIsLoading,
} from "../../redux/shop/shop.selectors";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
    const dispatch = useDispatch();
    const collections = useSelector(selectCollectionsForPreview);
    const loading = useSelector(selectCollectionsIsLoading);

    useEffect(() => {
        dispatch(fetchCollectionsAsync());
    }, [dispatch]);

    console.log(collections);
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                render={(props) => (
                    <CollectionsOverviewWithSpinner
                        isLoading={loading}
                        {...props}
                    />
                )}
            />

            <Route
                exact
                path={`${match.path}/:collectionId`}
                render={(props) => (
                    <CollectionPageWithSpinner isLoading={loading} {...props} />
                )}
            />
        </div>
    );
};

export default ShopPage;
