import React from "react";

import "../css/articlepage.css";

import axios from "axios";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getArticle = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setArticle(response.data);
  };

  useEffect(() => {
    getArticle();
  }, []);

  const backToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <main className="article-container">
      <h1 className="article-ttl">{article.title}</h1>
      <div className="article-body">
        <h3 className="content-ttl">Body:</h3>
        <div className="content-txt">{article.body}</div>
      </div>
      <button className="button-art" onClick={backToHome}>
        Go Back
      </button>
    </main>
  );
};

export default ArticlePage;
