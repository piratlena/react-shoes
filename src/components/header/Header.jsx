import React from "react";
import Logo from '../../assets/img/main_logo.png';
import './header.module.scss';
import NavBar from "./NavBar";

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
         <NavBar/>
        </header>
    )
}

export default Header;