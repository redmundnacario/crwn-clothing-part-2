import { createSelector } from 'reselect';


const selectCart = state => state.cart;

// this is a memoized slector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        const accQuantityTotal = cartItems.reduce((accQuantity, cartItem) => {
            return accQuantity + cartItem.quantity;
        }, 0)

        return accQuantityTotal
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => {
        const accAmountTotal = cartItems.reduce((accAmount, cartItem) => {
            return accAmount + ( cartItem.quantity * cartItem.price);
        }, 0)

        return accAmountTotal
    }
)