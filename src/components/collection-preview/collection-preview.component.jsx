import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.component.scss";

import PropTypes from "prop-types";

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

CollectionPreview.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

export default CollectionPreview;
