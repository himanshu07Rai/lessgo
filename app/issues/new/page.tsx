'use client';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const page = () => (
  <div>
    <h1 className="text-3xl font-bold">Create Issue</h1>
    <form className="flex flex-col space-y-4">
      <input className="border border-gray-300 rounded-md p-2" placeholder="Title" />
      <SimpleMDE className="border border-gray-300 rounded-md p-2" placeholder="Description" />
      <button className="bg-blue-500 text-white rounded-md p-2">Create Issue</button>
    </form>
  </div>
);

export default page;
