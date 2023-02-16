import React from "react";
import LikeComponent from "./LikeComponent";

// ================== 
const Post = ({ item, onlyLike, updatePosts }) => {
  const [likes, setLikes] = React.useState(item.likes ? item.likes : 0);

  const onLike = () => {
    setLikes((prev) => prev + 1);
    updatePosts({ ...item, likes: likes + 1 });
  };
  const onDislike = () => {
    setLikes((prev) => prev - 1);
    updatePosts({ ...item, likes: likes - 1 });
  };

  // 
  if (onlyLike && item.likes <= 0) return;

  return (
    <div className="card" key={item.id}>
      <div className="card__title">{item.title}</div>
      <div className="card__body">{item.body}</div>
      <LikeComponent
        onLike={onLike}
        onDislike={onDislike}
        count={item.likes ? item.likes : 0}
      />
    </div>
  );
};

export default Post;
