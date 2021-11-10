import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

// hoc
import WithSpinner from "../../components/with-spinner/withSpinner.component";
// components
import Spinner from "../../components/spinner/spinner.component";

import {
    selectCollectionsForPreview,
    selectCollectionsIsLoading,
} from "../../redux/shop/shop.selectors";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(
    lazy(() =>
        import(
            "../../components/collections-overview/collections-overview.component"
        )
    )
);
const CollectionPageWithSpinner = WithSpinner(
    lazy(() => import("../collection/collection.component"))
);

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
            <Suspense fallback={<Spinner />}>
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
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
            </Suspense>
        </div>
    );
};

export default ShopPage;
