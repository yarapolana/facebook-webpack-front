import React, { Component } from "react";
import { data } from "../../content/data.js";
import "./Post.css";

import PostItem from "./PostItem";
import PostComment from "./PostComment";

export default class Post extends Component {
  render() {
    return (
      <section id="post-list">
        <ul>
          {data.map(item => (
            <PostItem
              key={item.id}
              avatar={item.postAvatar}
              owner={item.postOwner}
              date={item.postDate}
              content={item.postContent}
              comments={item.comments.map(i => (
                <PostComment
                  key={i.id}
                  avatar={i.avatar}
                  owner={i.owner}
                  content={i.content}
                />
              ))}
            />
          ))}
        </ul>
      </section>
    );
  }
}
