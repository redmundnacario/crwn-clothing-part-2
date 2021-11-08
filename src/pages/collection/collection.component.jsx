import { connect } from 'react-redux';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';
// Selectors
import { selectCollection } from '../../redux/shop/shop.selectors'; 
// SCSS
import './collection.component.scss';

const CollectionPage = ({ collection }) => {
    // console.log(match);
    const {title, items} = collection;
    // console.log(items);
    return (
        <div className='collection-page'>
            <h1 className='title'>{title}</h1>
            <div className="items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
            </div>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);