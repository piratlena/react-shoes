import React, { useState, useMemo } from "react";
import "./pagination.module.scss";
import product from "../../data/product.json";

const PAGE_LIMIT = 4;
const Pagination = () => {
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

  return <div className="pages">{pagItems}</div>;
};
export default Pagination;
