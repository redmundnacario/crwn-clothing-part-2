import { useDispatch } from "react-redux";

import "./collection-item.component.scss";
import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.actions";

import PropTypes from "prop-types";

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItem(item))} inverted>
                Add to Cart
            </CustomButton>
        </div>
    );
};

CollectionItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CollectionItem;
