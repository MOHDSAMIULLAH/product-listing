import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
