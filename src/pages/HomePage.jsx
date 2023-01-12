import React from 'react'
import Header from '../components/header/Header';
import styles from "../styles/main.module.scss";
import Card from '../components/card/Card';
import Hero from '../components/hero/Hero';
import Cart from '../components/cart/Cart'


const HomePage = () => {
    const arr = [
        {imageUrl: '/img/shoes/item_1.jpg', descr: 'Мужские Кроссовки Nike Blazer Mid Suede', textPrice: 'Цена', price: 1299},
        { imageUrl: '/img/shoes/item_2.jpg', descr: 'Мужские Кроссовки Nike Air Max 270', textPrice: 'Цена', price: 1199},
        { imageUrl: '/img/shoes/item_3.jpg', descr: 'Мужские Кроссовки Nike Blazer Mid Suede', textPrice: 'Цена', price: 8499},
        {imageUrl: '/img/shoes/item_4.jpg', descr: 'Кроссовки Puma X Aka Boku Future Rider', textPrice: 'Цена', price: 8999},
        {imageUrl: '/img/shoes/item_5.jpg', descr: 'Мужские Кроссовки Nike Blazer Mid Suede', textPrice: 'Цена', price: 1299},
        { imageUrl: '/img/shoes/item_6.jpg', descr: 'Мужские Кроссовки Nike Air Max 270', textPrice: 'Цена', price: 1199},
        { imageUrl: '/img/shoes/item_7.jpg', descr: 'Мужские Кроссовки Nike Blazer Mid Suede', textPrice: 'Цена', price: 8499},
        {imageUrl: '/img/shoes/item_8.jpg', descr: 'Кроссовки Puma X Aka Boku Future Rider', textPrice: 'Цена', price: 8999}
       ]
    return (
    <div className={styles.wrapper}>
    <Header/>
    <h2>All shoes</h2>
    <Hero/>
    <div className={styles.flex}>
      {
        arr.map((obj) => (
            <Card
            imageUrl={obj.imageUrl}
            descr={obj.descr}  
            textPrice={obj.textPrice}
            price={obj.price}
            />
        ))
      }
    </div>
    <Cart/>
   </div>
    )
}
export default HomePage