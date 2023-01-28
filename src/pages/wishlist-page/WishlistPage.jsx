import React from "react";
import styles from "../../styles/main.module.scss";
import Header from "../../components/header/Header";
import Preview from "../../components/wishlist/Preview";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";

const WishlistPage = () => {
  const { itemInWishlist } = useSelector((state) => state.wishlist);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="flex">
        {itemInWishlist.length ? (
          itemInWishlist.map((item) => <Preview key={item.id} {...item} />)
        ) : (
          <div className="wishlist__empty">
            <h2>Your Shopping Cart is Empty</h2>
            <NavLink to={HOME_ROUTE}>
              <button className="wishlist__btn-shop">Shop Now</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
