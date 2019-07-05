import React, { Component } from "react";
import { data } from "../../content/data.js";
import PropTypes from "prop-types";
import blankAvatar from "../../assets/avatar0.png";

export default function PostComment({ avatar, owner, content }) {
  return (
    <section id="post-comments">
      <div>
        <img src={avatar} />
      </div>
      <p>
        <strong>{owner} </strong>
        <span>{content}</span>
      </p>
    </section>
  );
}

PostComment.defaultProps = {
  avatar: blankAvatar,
  owner: "Firstname Lastname",
  content: "Not found"
};

PostComment.PropTypes = {
  avatar: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
