import React from "react";

import "../css/userpage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const navToDetail = (user) => {
    navigate(`/detail/${user.id}`, {});
  };

  return (
    <main className="user-container">
      {user.map((user) => (
        <div
          onClick={() => {
            navToDetail(user);
          }}
          className="name"
          key={user.id}
        >
          {user.name}
        </div>
      ))}
    </main>
  );
};

export default UserPage;
