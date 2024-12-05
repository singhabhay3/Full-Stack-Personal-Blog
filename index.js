const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let posts = [];
let currentId = 1;

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Create a new post
app.post("/api/posts", (req, res) => {
  const post = { id: currentId++, ...req.body };
  posts.push(post);
  res.status(201).json(post);
});

// Get a single post
app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.json(post);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
