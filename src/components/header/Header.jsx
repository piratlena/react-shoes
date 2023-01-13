import React from "react";
import Logo from '../../assets/img/main_logo.png';
import './header.module.scss';
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";

const Header =() => {
    return(
        <header className="header">
          <div className="header__content">
            
            <div className="header__info">
            <NavLink to={HOME_ROUTE}><img className="header__logo" src={Logo}/> </NavLink>
          <div className="header__text">
            <h3 className="header__title">React Shoes</h3>
            <p className="header__subtitle">Modern sneaker shoes</p>
          </div>
        </div>
           
      
         <NavBar/>
          </div>
  
         <hr />
        </header>
    )
}

export default Header;