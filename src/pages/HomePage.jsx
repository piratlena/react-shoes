import React from 'react'
import Header from '../components/header/Header';
import styles from "../styles/main.module.scss";
import Card from '../components/card/Card';
import Hero from '../components/hero/Hero';
import shoes from '../data/product.json';



const HomePage = () => {
 
    return (
    <div className={styles.wrapper}>
    <Header/>
    <h2>All shoes</h2>
    <Hero/>
    <div className={styles.grid}>
      {
        shoes.map((obj) => (
            <Card
            key={obj.id}
            image={obj.image}
            description={obj.description}  
            price={obj.price}
            id={obj.id}
            size={obj.size}
            />
        ))
      }
    </div>
   </div>
    )
}
export default HomePage