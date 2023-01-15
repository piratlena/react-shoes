import './navbar.module.scss';
import Cart from '../../assets/img/icons-navbar/cart.svg'
import Bookmark from '../../assets/img/icons-navbar/bookmark.svg'
import User from '../../assets/img/icons-navbar/user.svg'
import { NavLink } from 'react-router-dom';
import { CART_ROUTE } from '../../utils/consts';
import { useSelector } from 'react-redux';


const NavBar =() => {

  const { itemInCart, orderTotal } = useSelector(state => state.cart)
  const addedItems = itemInCart.length
    return(
        <nav className="nav">
          <ul className="nav__list">
            <NavLink to={CART_ROUTE}><li className='cart'><img src={Cart} alt="cart"/>{addedItems > 0 ? <div className='cart__quantity'>{itemInCart.length}</div> : ''}</li></NavLink>
            
            <li><span>{orderTotal}</span></li>
            
            <li><img src={Bookmark} alt="bookmark" /></li>
            <li><img src={User} alt="user_icon" /></li>
          </ul>
        </nav>
    )
}

export default NavBar;