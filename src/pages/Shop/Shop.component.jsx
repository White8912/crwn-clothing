import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

const Shop = () => {

    return (
        <div className='shop-page'>
            {
                SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default Shop;