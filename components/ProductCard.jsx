import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <div className="flex items-center justify-between mt-2">

      <p className="text-gray-600 mb-2">${product.price}</p>
   
      <div className="flex items-center">
        <span className="text-gray-600 mr-2">Rating:</span>
        <span className="text-yellow-400">{product.rating.rate}</span>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;