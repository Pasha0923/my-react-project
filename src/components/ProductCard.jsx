// import React from "react";

const ProductCard = ({
  img,
  productName,
  description,
  price,
  hasDiscount = false,
}) => {
  return (
    <div>
      <img width={300} src={img} alt="" />
      <h3>
        {productName} {hasDiscount ? <span>BIG SALE</span> : null}
        {/* {productName} {hasDiscount && <span> BIG SALE</span>} */}
      </h3>
      <p>{description}</p>
      <h4>Price: ${price}</h4>
      <button type="button">Add to cart</button>
      <button type="button">Delete</button>
    </div>
  );
};

export default ProductCard;
