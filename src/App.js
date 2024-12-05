import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleCreatePost = (post) => {
    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((newPost) => setPosts([...posts, newPost]));
  };

  return (
    <div>
      <h1>My Blog Platform</h1>
      <CreatePost onCreate={handleCreatePost} />
      <BlogList posts={posts} />
    </div>
  );
};

export default App;
