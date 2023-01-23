import React from "react";
import Header from '../../components/header/Header';
import styles from '../../styles/main.module.scss';
import './cartPage.module.scss';
import CardInCart from "../../components/card/CardInCart";
import { useSelector, useDispatch } from "react-redux"; 

const CartPage = () => {
const {itemInCart, orderSummary} = useSelector(state=> state.cart)
const total = orderSummary.toFixed(2)
const tax = ((total / 100) * 5).toFixed(2)
const orderTotal = (orderSummary + (total / 100) * 5).toFixed(2)



return (
<div className={styles.wrapper}>
    <Header/>

    <div className="cart__title">
      <h1>Shopping Cart</h1>
    </div>

    <div className="flex">
    <div>
    {itemInCart.map((obj) => (
        <CardInCart
        key={obj.id}
       {...obj}
        />
    ))}
    </div>
 

<div className="total">
          <ul>
                  <li>
                    <span>ORDER SUMMARY</span>
                    <div></div>
                    <b>{total} руб. </b>
                  </li>
                  <li>
                    <span>Tax 5%: </span>
                    <div></div>
                    <b>{tax} руб. </b>
                  </li>
                  <hr />
                  <li>
                    <span>ORDER TOTAL</span>
                    <div></div>
                    <b>{orderTotal} руб. </b>
                  </li>
            </ul>
                <button className="total__btn">Order<img src="/img/arrow-right.svg" alt="arrow-right" /></button>
  </div>
    
</div>
    </div>
    

)
}

export default CartPage;