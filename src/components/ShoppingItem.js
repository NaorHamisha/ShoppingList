import './ShoppingItem.css'
import {Link} from 'react-router-dom' 


function ShoppingItem ({item}) {

    return (

        <div className='shopping-item'>
            <Link to={`/item/${item.id}`}>
                <div className="shopping-item-title">{item.productName}</div>
                <div className="shopping-item-price">{item.price}$</div>
            </Link>
            <img src={item.image} className="shopping-item-image" />
        </div>

    );
}

export default ShoppingItem;