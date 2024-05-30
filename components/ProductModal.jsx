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
        <p className="mb-4">{product.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">Category:</span>
          <span className="text-blue-500">{product.category}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">Rating:</span>
          <span className="text-yellow-400">{product.rating.rate}</span>
          <span className="text-gray-600 ml-1">({product.rating.count} reviews)</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductModal;