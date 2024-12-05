import React from "react";

const BlogList = ({ posts }) => (
  <div>
    <h2>All Blog Posts</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogList;
