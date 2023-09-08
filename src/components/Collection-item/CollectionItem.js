

import "./CollectionItem.scss"
import { useNavigate } from 'react-router';

const CollectionItem = ({imageUrl,name,price,linkUrl}) =>{

    const navigate = useNavigate();
    return (
        <div className='collectionItem'>
             <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      />
            <div className='collectionFooter'>
                <span className='name'>{name}</span>
                <span className='price'>$10</span>
            </div>
        </div>
    )
}

export default CollectionItem;