import React, { useState } from "react";
import { Link } from "react-router-dom";
import AutherPage from "./AutherPage";
import "./FetchPost.css";

const FetchPost = (data) => {
  return (
    <div className="main-container">
      <div className="header">
        <ul>
          <li Link={"/"}>Home</li>
        </ul>
        <div className="search">{/* <p>Search Bar Functionality</p> */}</div>
      </div>

      <div className="post">
        <p className="title">{data.title}</p>
        <p className="body">{data.body}</p>
        <p className="tags">{data.tags}</p>
        <p className="auther" Link={<AutherPage />}>
          {data.auther}
        </p>
      </div>
    </div>
  );
};

export default FetchPost;
