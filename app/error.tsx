'use client';
import React from 'react';

const error = ({ error, reset }: { error: Error; reset: () => void }) => (
  <div className="grid h-screen px-4 place-content-center">
    <h1 className="tracking-widest text-gray-500 uppercase">
      {error.name} | {error.message}
    </h1>
  </div>
);

export default error;
