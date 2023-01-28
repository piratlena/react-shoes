import React, { useState, useRef, useEffect } from "react";
import "./preview.module.scss";
import Bookmark from "../../assets/img/bookmark.svg";
import NotBookmarked from "../../assets/img/not-bookmarked.svg";
import { useDispatch, useSelector } from "react-redux";
import { addOneToCart } from "../../redux/redusers/cartReducer";
import {
  addOneToWishList,
  removeOneFromWishlist,
} from "../../redux/redusers/wishlistReducer";

const Preview = ({ name, image, price, id }) => {
  const { itemInWishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  //const isOnWishlist = useSelector(state => state.wishlist.isWishlist)
  const isOnWishlist = itemInWishlist.map((item) => item.status);

  const onWishlist = () => {
    dispatch(removeOneFromWishlist(id));
  };

  return (
    <div className="preview">
      <div className="preview__circle">
        <figure className="preview__fig">
          <img src={image} alt="Test" />
        </figure>
      </div>

      <div className="preview__data">
        <div className="preview__title">{name}</div>
        <div className="preview__price">{price}</div>
      </div>
      <div onClick={onWishlist} className="removeBtn" alt="remove">
        {isOnWishlist ? <img src={Bookmark} /> : <img src={NotBookmarked} />}
      </div>
    </div>
  );
};

export default Preview;
