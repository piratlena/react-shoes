import  './card.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Bookmark from '../../assets/img/bookmark.svg';
import { useDispatch, useSelector } from 'react-redux';
import {addOneToCart} from '../../redux/redusers/cartReducer';


const Card = ({id, image, description, price, name, size}) => {
const [dropDown, setDropDown] = useState(false)
const [activeSize, setActiveSize] = React.useState(0);
const dispatch = useDispatch()
const cartItem = useSelector(state => state.cart.itemInCart.find(item => item.id === id))
const sizeRef = useRef()

const addedQuantity = cartItem ? cartItem.addedQuantity : 0;

    const onClickAdd = () => {
        const item = {
            id,
            name, 
            price,
            image,
            sizes: size[activeSize]
        };
        dispatch(addOneToCart(item))
        setDropDown(false)
        setActiveSize()
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
         if (!event.path.includes(sizeRef.current)) {
              setDropDown(false)
              setActiveSize()
            }
        }
        document.body.addEventListener('click', handleClickOutside)
    
        return () => {
          document.body.removeEventListener('click', handleClickOutside)
        }
      }, [])

    const showDropDown = () => {
        setDropDown(false)
    }
    
 return (
    <div className="card" ref={sizeRef}>
        <div className="card__wishlist">
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