import { PostDataType } from '@/types';

const sitemap = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = (await posts.json()) as PostDataType[];

  const postsPaths = data.map((post: PostDataType) => ({
    url: `http://localhost:3000/posts/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ['', '/post'].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...postsPaths, ...routes];
};

export default sitemap;
