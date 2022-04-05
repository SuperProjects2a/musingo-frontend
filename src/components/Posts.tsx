import { pseudoRandomBytes } from "crypto";
import React from "react";
import { FC } from "react";

interface Post {
  posts: Array<posts>;
  loading: boolean;
}

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: FC<Post> = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.id} {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
