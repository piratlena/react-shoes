import React from "react";
import Header from '../../components/header/Header';
import styles from '../../styles/main.module.scss';
import './cartPage.module.scss';
import CardInCart from "../../components/card/CardInCart";

const CartPage = () => {

    const cartItem = [
        {
            id: 1,
            name: "Nike Blazer Mid Suede",
            age: "adult",
            gender: "man",
            price: 23.99,
            image: "/img/shoes/item_1.jpg",
            description: "Мужские Кроссовки Nike Blazer Mid Suede",
            size:["42", "43", "44"]
          },
        
          {
            id: 2,
            name: "Nike Air Max 270",
            age: "adult",
            gender: "man",
            price: 27.99,
            image: "/img/shoes/item_2.jpg",
            description: "Мужские Кроссовки Nike Air Max 270",
            size:["42", "44", "45"]
          },
          {
            id: 3,
            name: "Nike Blazer Mid Suede",
            age: "adult",
            gender: "man",
            price: 23.99,
            image: "/img/shoes/item_1.jpg",
            description: "Мужские Кроссовки Nike Blazer Mid Suede",
            size:["42", "43", "44"]
          },
        
          {
            id: 4,
            name: "Nike Air Max 270",
            age: "adult",
            gender: "man",
            price: 27.99,
            image: "/img/shoes/item_2.jpg",
            description: "Мужские Кроссовки Nike Air Max 270",
            size:["42", "44", "45"]
          }
    ]
return (
<div className={styles.wrapper}>
    <Header/>

    <div className="cart__title">
      <h1>Shopping Cart</h1>
    </div>

    <div className="flex">
    <div>
    {cartItem.map((obj) => (
        <CardInCart
        key={obj.id}
        image={obj.image}
        description={obj.description}  
        price={obj.price}
        />
    ))}
    </div>
 

<div className="total">
          <ul>
                  <li>
                    <span>ORDER SUMMARY</span>
                    <div></div>
                    <b>21 498 руб. </b>
                  </li>
                  <li>
                    <span>Tax 5%: </span>
                    <div></div>
                    <b>1074 руб. </b>
                  </li>
                  <hr />
                  <li>
                    <span>ORDER TOTAL</span>
                    <div></div>
                    <b>21 498 руб. </b>
                  </li>
            </ul>
                <button className="total__btn">Order<img src="/img/arrow-right.svg" alt="arrow-right" /></button>
  </div>
    
</div>
    </div>
    

)
}

export default CartPage;