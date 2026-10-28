import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);
  return (
    <div className="posts-page">
      <h1>Our Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img
              src={`https://picsum.photos/seed/${post.id}/500/300`}
              alt={post.title}
            />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}