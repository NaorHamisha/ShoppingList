import './ShoppingItem.css'
import shoppingList from '../data/shoppingList.json'
import { useParams } from 'react-router-dom';



function ItemPage () {
    const {id} = useParams();
    const item = shoppingList.find( item => item.id == id);

    return (
        <div className='item'>
            <div>
                <div className="shopping-item-title">{item.storeName}</div>
                <div className="shopping-item-title">{item.descretpion}</div>
            </div>
            <img src={item.anotherImage} className="shopping-item-image" />
        </div>
    );
}

export default ItemPage;