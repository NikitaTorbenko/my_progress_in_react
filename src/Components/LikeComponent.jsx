import React from "react";
import "./LikeComponent.css";

const LikeComponent = ({ count, onLike, onDislike }) => {
  return (
    <div className="like_block">
      <span className="like__count">{count}</span>
      <button className="like__btn" onClick={onLike}>
        Like
      </button>
      <button className="like__btn" onClick={onDislike}>
        Dislike
      </button>
    </div>
  );
};

export default LikeComponent;
