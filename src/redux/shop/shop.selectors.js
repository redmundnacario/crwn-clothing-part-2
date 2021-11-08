import { createSelector } from 'reselect';
import memoize from 'lodash.memoize'

// input selector

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = memoize((collectionParamUrl) => createSelector(
    [selectCollections],
    collections => collections[collectionParamUrl]
))

//Convert objects to array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );