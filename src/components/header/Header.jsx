import React from "react";
import Logo from '../../assets/img/main_logo.png';
import './header.module.scss';

const Header =() => {
    return(
        <header className="header">
        <div className="header__info">
        <img className="header__logo" src={Logo}/>
          <div className="header__text">
            <h3 className="header__title">React Shoes</h3>
            <p className="header__subtitle">Modern sneaker shoes</p>
          </div>
        </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span></li>
            <li><img src="/img/user.svg" alt="user_icon" /></li>
          </ul>
        </header>
    )
}

export default Header;