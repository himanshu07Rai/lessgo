import { PostDataType } from '@/types';
import React from 'react';

// Export const dynamic = "force-dynamic"

export const revalidate = 10;

const PostHeader = async () => {
  const d = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = (await d.json()) as PostDataType;

  return <div>{JSON.stringify(data)}</div>;
};

export default PostHeader;
