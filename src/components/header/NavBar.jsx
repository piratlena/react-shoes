import './navbar.module.scss';
import Cart from '../../assets/img/icons-navbar/cart.svg'
import Bookmark from '../../assets/img/icons-navbar/bookmark.svg'
import User from '../../assets/img/icons-navbar/user.svg'
import { NavLink } from 'react-router-dom';
import { CART_ROUTE } from '../../utils/consts';


const NavBar =() => {
    return(
        <nav className="nav">
          <ul className="nav__list">
            <NavLink to={CART_ROUTE}><li><img src={Cart} alt="cart"/></li></NavLink>
            
            <li><span>1205 руб.</span></li>
            
            <li><img src={Bookmark} alt="bookmark" /></li>
            <li><img src={User} alt="user_icon" /></li>
          </ul>
        </nav>
    )
}

export default NavBar;