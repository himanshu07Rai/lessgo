export type PostProps = {
  params: {
    postId: string;
  };
  searchParams: Record<string, unknown>;
};

export type PostDataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
