'use client';
import React from 'react';

const ProductCartButton = () => (
  <div>
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log('ProductCartButton');
      }}
    >
      Click
    </button>
  </div>
);

export default ProductCartButton;
