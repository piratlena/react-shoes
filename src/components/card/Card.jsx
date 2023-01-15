import  './card.module.scss';
import React, { useState } from 'react';
import Bookmark from '../../assets/img/bookmark.svg';
import { useDispatch, useSelector } from 'react-redux';
import {addOneToCart} from '../../redux/redusers/cartReducer';


const Card = ({id, image, description, price, name, size}) => {
const [dropDown, setDropDown] = useState(false)
const dispatch = useDispatch()
const cartItem = useSelector(state => state.cart.itemInCart.find(item => item.id === id))

const addedQuantity = cartItem ? cartItem.addedQuantity : 0;

    const onClickAdd = () => {
        const item = {
            id,
            name, 
            price,
            image,
            size
        };
        dispatch(addOneToCart(item))
    }

    const showDropDown = () => {
        setDropDown(false)
    }
    
 return (
    <div className="card">
        <div className="card__bookmark">
            <img src={Bookmark} alt="bookmark"/>
        </div>
        <img width={133} height={112} src={image}alt="Sneakers" />
        <h5>{description}</h5>
        <div className="card__bottom">
                <div className="card__price">
                <span>Цена</span>
                <b>{price}</b>
                </div>
                <div className="card__plus" onClick={() => setDropDown(!dropDown)}></div>
                {dropDown && (<div className='card__popup'>
                <ul className='card__size'>
                    {size.map((item, i) => (
                        <li
                        key={i}
                        >{item}</li>
                    ))}
                    
                    </ul>
                    <button className='btn__add' onClick={onClickAdd}>Add</button>
                    </div>)}
                
        </div>
</div>
    )

}
export default Card;