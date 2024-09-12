import React from "react";
import "./ProductCard.css"
import useStore from "../../../app/store";

const ProductCard = ({product}) => {
  const handleAddToCart=(productId)=>{
const AddToCart = useStore((state) => state.addToCart(productId));
console.log(AddToCart);

  }
  return (
    <div className="productCard w-[14rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top "
          src={product.imageUrl}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p >{product.title}</p>
        </div>
        <div className=" flex items-center  space-x-2">
<p className='font-semibold'>{product.discountedPrice}</p>
<p className=' line-through opacity-50' >{product.price}</p>
<p  className=' text-green-600 font-semibold'>70% off</p>
<div>
  <button  className=' font-bold h-10 w-20 ' onClick={handleAddToCart(product.id)}>Add to cart</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
