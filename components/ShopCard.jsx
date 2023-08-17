'use client';

const ShopCard = ({ imgUrl }) => (
  <img
    src={imgUrl}
    alt="product"
    className="relative flex items-center justify-center cursor-pointer h-35px"
  />
);

export default ShopCard;
