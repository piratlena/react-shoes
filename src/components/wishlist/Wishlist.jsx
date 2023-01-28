import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Preview from "./Preview";
import Emoji from '../../assets/img/bookmark.svg';
import './wishlist.module.scss';
import Bookmark from '../../assets/img/icons-navbar/bookmark.svg';
import { WISHLIST_ROUTE } from "../../utils/consts";
import { NavLink } from "react-router-dom";


const Wishlist = () => {
    const itemInWishlist = useSelector(state => state.wishlist.itemInWishlist)
    
    return (
        <>
            <div className="nav__item">
              <NavLink to={WISHLIST_ROUTE} className="nav__btn nav__btn--bookmarks">
                <img src={Bookmark}/>
              </NavLink>
                
          <div className="bookmarks">
            <ul className="bookmarks__list">
                {itemInWishlist.map((data, i) => {
                    return <Preview key={i} {...data}/>
                })}
              <div className="message">
                <p>
                  {
                    !itemInWishlist.length
                    ? 'Your wishlist is empty😔. Find the best shoes and bookmark it✔'
                    : 'Enjoy😊'
                  }
                </p>
              </div>
            </ul>
          </div>
        </div>
        </>
    )
}

export default Wishlist;

