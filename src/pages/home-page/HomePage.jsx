import React, { useMemo, useState } from "react";
import Header from "../../components/header/Header";
import styles from "../../styles/main.module.scss";
import "./homePage.module.scss";
import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";
import Pagination from "../../components/pagination/Pagination";
import product from "../../data/product.json";

const PAGE_LIMIT = 4;
const HomePage = () => {
  const pages = [];
  const [activePage, setActivePage] = useState(0);

  const { pagItems, pagStart, pagEnd } = useMemo(() => {
    const pageLimit = Math.ceil(product.length / PAGE_LIMIT);
    let pagItems = [];
    for (let i = 0; i < pageLimit; i++) {
      pagItems.push(
        <span
          key={i}
          className={i === activePage ? "current-page" : "page"}
          onClick={() => setActivePage(i)}
        >
          {i + 1}
        </span>
      );
    }
    const pagStart = activePage * PAGE_LIMIT;
    const pagEnd = pagStart + PAGE_LIMIT;
    return {
      pagItems,
      pagStart,
      pagEnd,
    };
  }, [activePage, product.length]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <h2>All shoes</h2>
      <Hero />
      <div className={styles.grid}>
        {product.length
          ? product
              .slice(pagStart, pagEnd)
              .map((obj) => (
                <Card
                  key={obj.id}
                  image={obj.image}
                  description={obj.description}
                  price={obj.price}
                  id={obj.id}
                  size={obj.size}
                  name={obj.name}
                />
              ))
          : "Это все"}
      </div>
      <div className="pages">{pagItems}</div>
    </div>
  );
};
export default HomePage;
