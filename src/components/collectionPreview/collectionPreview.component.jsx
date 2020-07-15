import React from 'react';

import CollectionItem from '../collectionItem/collectionItem.component';
import './collectionPreview.css'
const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.filter((item, index) => index < 4).map(({ id, ...otherProperties }) => <CollectionItem key={id} {...otherProperties} />)}
            </div>

        </div>
    );
}

export default CollectionPreview;