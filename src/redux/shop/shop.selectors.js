import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// input selector

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollection = memoize((collectionParamUrl) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionParamUrl] : null
    )
);

//Convert objects to array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) =>
        collections
            ? Object.keys(collections).map((key) => collections[key])
            : []
);
