import React from 'react';
import Link from 'next/link';
import ProductCart from './components/ProductCart';

export default function Home() {
  return (
    <main className="h-full">
      <Link href="/users">users</Link>
      <ProductCart />
    </main>
  );
}
