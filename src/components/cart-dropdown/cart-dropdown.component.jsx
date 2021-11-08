import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.component.scss";

const CartDropdown = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push("/checkout");
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

export default CartDropdown;
