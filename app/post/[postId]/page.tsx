import { PostDataType, PostProps } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = (await posts.json()) as PostDataType[];

  return data.map((post: PostDataType) => ({
    postId: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { postId } = params;
  const d = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = (await d.json()) as PostDataType;
  return {
    title: data.title,
    description: data.body,
  };
}

const Post = async ({ params }: PostProps) => {
  const { postId } = params;
  const d = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = (await d.json()) as PostDataType;

  return <div>{JSON.stringify(data)}</div>;
};

export default Post;
