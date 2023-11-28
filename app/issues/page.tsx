import Link from 'next/link';
import React from 'react';

const Issues = () => (
  <div className="flex flex-col">
    Issues
    <Link href="/issues/new">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded py-2 my-2">
        Create
      </button>
    </Link>
  </div>
);

export default Issues;
