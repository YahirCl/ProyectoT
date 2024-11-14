import React from 'react';

interface Post {
  id: number;
  content: string;
}

interface VistaProps {
  posts: Post[];
}

const Vista: React.FC<VistaProps> = ({ posts }) => {
  return (
    <div>
      <h2>Vista de Posts</h2>
      <ul>
        {posts.slice().reverse().map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Vista;