import React from "react";

import "../css/homepage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const getData = async (page) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    setData(response.data);
  };

  useEffect(() => {
    getData(count);
  }, [count]);

  const navToArticle = (data) => {
    navigate(`article/${data.id}`, {});
  };

  const prev = () => {
    setCount(count - 1);
  };

  const next = () => {
    setCount(count + 1);
  };

  return (
    <main className="index-container">
      {data.map((data) => (
        <div
          onClick={() => {
            navToArticle(data);
          }}
          className="list"
          key={data.id}
        >
          {data.title}
        </div>
      ))}

      <div className="pagination">
        {count <= 1 ? (
          <button
            disabled
            style={{ marginRight: "5px", cursor: "not-allowed" }}
          >
            Prev
          </button>
        ) : (
          <button className="btn-prev" onClick={prev}>
            Prev
          </button>
        )}

        {count >= data.length ? (
          <button
            disabled
            style={{ marginRight: "5px", cursor: "not-allowed" }}
          >
            Next
          </button>
        ) : (
          <button className="btn-next" onClick={next}>
            Next
          </button>
        )}
      </div>
    </main>
  );
};

export default HomePage;
