import React from "react";
import "./BlogCard.css";

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <h2>{post.title}</h2>
      <p className="date">{post.date}</p>
      <p>{post.description}</p>
    </div>
  );
}

export default BlogCard;
