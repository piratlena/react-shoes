import './counter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { minusItem, plusItem } from '../../redux/redusers/cartReducer';

const Counter = (id) => {
const {itemInCart} = useSelector((state)=> state.cart)
const counter = useSelector(state=> state.cart.itemInCart.quantity)
console.log(`this is ${itemInCart}`)
const dispatch = useDispatch()

const onIncrease = () => {
    dispatch(plusItem(id))
}

const onDecrease = () => {
    dispatch(minusItem(id))
}
    return (
    <div className="counter">
        <button onClick={onDecrease} className='counter__decrement'></button>
        <label className="counter__wrapper">
            <input type="text" inputMode="numeric" value={counter}/>
        </label>
        <button onClick={onIncrease} className='counter__increment'></button>
    </div>
    )
}
export default Counter;