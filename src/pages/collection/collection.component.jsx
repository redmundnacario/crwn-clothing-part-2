import { useSelector } from "react-redux";
import { useParams } from "react-router";
// Components
import CollectionItem from "../../components/collection-item/collection-item.component";
// Selectors
import { selectCollection } from "../../redux/shop/shop.selectors";
// SCSS
import "./collection.component.scss";

const CollectionPage = ({ match }) => {
    // console.log(match);
    const { collectionId } = useParams();
    const { title, items } = useSelector(selectCollection(collectionId));
    // console.log(items);
    return (
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPage;
