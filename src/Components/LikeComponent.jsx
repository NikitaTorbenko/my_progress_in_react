import React from "react";
import "./LikeComponent.css";

const LikeComponent = () => {
  const [likeCount, setLikeCount] = React.useState(0);

  const like = () => {
    console.log("click");
    setLikeCount((likeCount) => likeCount + 1);
  };

  const dis = () => {
    console.log("click");
    setLikeCount((likeCount) => likeCount - 1);
  };

  return (
    <div className="like_block">
      <span className="like__count">{likeCount}</span>
      <button className="like__btn" onClick={like}>
        Like
      </button>
      <button className="like__btn" onClick={dis}>
        Dislike
      </button>
    </div>
  );
};

export default LikeComponent;
