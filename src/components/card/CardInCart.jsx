import './cardInCart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { plusItem, minusItem, addOneToCart, removeOneFromCart } from '../../redux/redusers/cartReducer';



const CardInCart = ({name, image, price, sizes, id, quantity}) => {

const dispatch = useDispatch()

const onIncrease = () => {
    dispatch(addOneToCart({id}))
}

const onDecrease = () => {
    dispatch(minusItem(id))
}

const onClickRemove = () => {
    dispatch(removeOneFromCart(id))
}

    return (
        
        <div className="cartItem">
                <img src={image} className="cartItem__img"></img>

                <div className="cartItem__block">
                    <div className="cartItem__block-descr">
                        <p className="cartItem__block-title">{name}</p>
                        <p className="cartItem__block-size">size: {sizes}</p>
                        <span className='cartItem__block-price'>{price}</span>
                    </div>

                    <div className="cartItem__block-amount">
                    <div className="counter">
                        <button onClick={onDecrease} className='counter__decrement'></button>
                        <label className="counter__wrapper">
                            <input type="text" inputMode="numeric" value={quantity}/>
                        </label>
                        <button onClick={onIncrease} className='counter__increment'></button>
                    </div>
                    </div>

                    <img onClick={onClickRemove} className="cartItem__block-remove" src="img/remove-btn.svg" alt="remove" />
                
                </div>
                
        </div>
    )
}

export default CardInCart