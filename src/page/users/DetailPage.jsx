import React from "react";

import "../css/detailpage.css";

import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getDetail = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setDetail(response.data);
    if (response.data === 200) {
      console.log(response.data);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const backToUsers = () => {
    navigate("/users", { replace: true });
  };

  return (
    <main className="detail-container">
      <h1 className="detail-ttl">Profile</h1>
      <div className="detail-body">
        <h3 className="content-ttl">Body :</h3>
        <div className="content-txt">Name : {detail.name}</div>
        <div className="content-txt">Username : {detail.username}</div>
        <div className="content-txt">Email : {detail.email}</div>
        <div className="content-txt">Phone : {detail.phone}</div>
        <div className="content-txt">Website : {detail.website}</div>
      </div>
      <button className="button-dtl" onClick={backToUsers}>
        Go Back
      </button>
    </main>
  );
};

export default DetailPage;
