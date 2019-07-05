import React, { Component } from "react";
import PostComment from "./PostComment";
import { data } from "../../content/data";

export default function PostItem({ owner, avatar, date, content, comments }) {
  return (
    <section id="post-item">
      <div className="header">
        <img src={avatar} />
        <p>
          <span>{owner}</span>
          <span>{date}</span>
        </p>
      </div>
      <p>{content}</p>
      <hr></hr>
      {comments}
    </section>
  );
}
