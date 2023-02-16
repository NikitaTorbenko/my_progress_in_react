import React from "react";
import LikeComponent from "./LikeComponent";

const Post = ({ item, onlyLike }) => {
  const [post, setPost] = React.useState({
    ...item,
    likes: 0,
  });

  const onLike = () => setPost((prev) => ({ ...prev, likes: ++prev.likes }));
  const onDislike = () => setPost((prev) => ({ ...prev, likes: --prev.likes }));

  if (onlyLike && post.likes <= 0) return;

  return (
    <div className="card" key={item.id}>
      <div className="card__title">{item.title}</div>
      <div className="card__body">{item.body}</div>
      <LikeComponent onLike={onLike} onDislike={onDislike} count={post.likes} />
    </div>
  );
};

export default Post;
