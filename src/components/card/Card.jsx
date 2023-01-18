import  './card.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Bookmark from '../../assets/img/bookmark.svg';
import NotBookmarked from '../../assets/img/not-bookmarked.svg'
import { useDispatch, useSelector } from 'react-redux';
import {addOneToCart} from '../../redux/redusers/cartReducer';
import { addOneToWishList } from '../../redux/redusers/wishlistReducer';


const Card = ({id, image, description, price, name, size}) => {
const [dropDown, setDropDown] = useState(false)
const [activeSize, setActiveSize] = React.useState();
const [isWishlist, setIsWishlist] = useState(false)
const dispatch = useDispatch()
const cartItem = useSelector(state => state.cart.itemInCart.find(item => item.id === id))
const sizeRef = useRef()
console.log(sizeRef)

const onClickAdd = () => {
    if (!activeSize) {
        setDropDown(true)
    } else {
        const item = {
            id,
            name, 
            price,
            image,
            size: size[activeSize]
        };
        dispatch(addOneToCart(item))
        setDropDown(false)
        setActiveSize()
    }
  
    }

    
    useEffect(() => {
        const handleClickOutside = (event) => {
          console.log(event.composedPath());
          let path = event.composedPath().includes(sizeRef.current);
          if (!path) setDropDown(false);
        };
    
        document.body.addEventListener('click', handleClickOutside);
    
        return () => document.body.removeEventListener('click', handleClickOutside);
      }, []);

    
 return (
    <div className="card"  ref={sizeRef}>
        <div className="card__wishlist">
            <img src={NotBookmarked} alt="bookmark"/>
        </div>
        <img width={133} height={112} src={image}alt="Sneakers" />
        <h5>{description}</h5>
        <div className="card__bottom">
                <div className="card__price">
                <span>Цена</span>
                <b>{price}</b>
                </div>
                <div className="card__plus" onClick={() => setDropDown(!dropDown)}></div>
                {dropDown && (<div  className='card__popup'>
                    <p className='card__popup-title'>Выберите размер</p>
                <ul className='card__size'>
                    {size.map((item, i) => (
                        <li
                        key={i}
                        onClick={() => setActiveSize(i)}
                        className={activeSize===i ? 'active' : ''}
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