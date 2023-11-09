import React from 'react';
import ProductCartButton from './ProductCartButton';
import { AuthRequiredError } from '@/lib/exceptions';
const session = true;

const ProductCart = () => {
  if (!session) throw new AuthRequiredError();
  return (
    <div className="p-6">
      <ProductCartButton />
    </div>
  );
};

export default ProductCart;
