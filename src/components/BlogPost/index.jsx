import React, { Component } from "react";
import LikeBtn from "../LikeBtn";
import CommentBox from "../CommentBox";

class BlogPost extends Component {
  state = {};
  render() {
    const { title, caption } = this.props.feed;
    return (
      <div className="blogpost">
        {/* <img className="blog-image" src={imgUrl} /> */}
        <div className="blog-header">
          <span className="blog-title">{title}</span>
          <LikeBtn />
        </div>

        <div className="blog-body">{caption}</div>
        <CommentBox />
      </div>
    );
  }
}

export default BlogPost;
