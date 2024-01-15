import React from "react";
import AddToCart from "../AddToCart";
// 'use client' // -> including this file in a JS bundle which means all the components in that bundle will be treated as client components. Use client component when absolutely necessary

const ProductCard = () => {
  return (
    <div >
      <AddToCart />
    </div>
  );
};

export default ProductCard;
