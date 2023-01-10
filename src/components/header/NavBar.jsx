import style from'./navbar.module.scss';
import Cart from '../../assets/img/icons-navbar/cart.svg'
import Bookmark from '../../assets/img/icons-navbar/bookmark.svg'
import User from '../../assets/img/icons-navbar/user.svg'


const NavBar =() => {
    return(
        <nav className="nav">
          <ul className="nav__list">
            <li className="mr-30">
            <img src={Cart} alt="cart"/></li>
            <li><span>1205 руб.</span></li>
            <li><img src={Bookmark} alt="bookmark" /></li>
            <li><img src={User} alt="user_icon" /></li>
          </ul>
        </nav>
    )
}

export default NavBar;