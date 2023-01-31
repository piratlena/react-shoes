import React, { useState, useEffect, cloneElement, Children } from "react";
import images from "../../data/product.json";
import ArrowRight from "../../assets/img/arrow_right.svg";
import ArrowLeft from "../../assets/img/arrow_left.svg";

const PAGE_WIDTH = 300;
const Hero = () => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      images.map((item, index) => {
        return (item = {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: "100%",
          },
        });
      })
    );
  }, []);
  return (
    <div className="hero">
      <img
        className="hero__left"
        onClick={handleLeftArrowClick}
        src={ArrowLeft}
        alt=""
      />
      <div className="hero__block">
        <div className="hero__title">Best Sellers</div>
        <div className="hero__subtitle">NEW</div>
        <button className="hero__btn">BUY NOW</button>
      </div>

      <div
        className="hero__promo"
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        <img src={images.image} />
        <div className="hero__title">{images.name}</div>
      </div>
      <img
        className="hero__right"
        onClick={handleRightArrowClick}
        src={ArrowRight}
        alt=""
      />
    </div>
  );
};
export default Hero;
