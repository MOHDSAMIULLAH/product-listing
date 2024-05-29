import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button className="text-right text-red-500" onClick={onClose}>Close</button>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4 rounded" />
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
        <p className="text-lg text-gray-800 mb-4">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
