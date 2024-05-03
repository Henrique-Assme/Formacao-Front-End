import blogFetch from "../config";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Post.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const response = await blogFetch(`/posts/${id}`);
      setPost(response.data)
    } catch (error) {}
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
