import React from 'react';
import Link from 'next/link';
import ProductCart from './components/ProductCart';
import Users from './components/Users';

export default function Home() {
  return (
    <main className="h-full">
      <Link href="/users">users</Link>
      <ProductCart />
      <Users />
    </main>
  );
}
