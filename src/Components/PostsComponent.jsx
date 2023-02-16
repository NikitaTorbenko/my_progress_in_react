import React from "react";
import "./PostsComponent.css";
import Post from "./Post";

const PostsComponent = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = React.useState([]);
  const [onlyLiked, setOnlyLiked] = React.useState(false);

  async function getPosts() {
    setPosts(await fetch(url).then((res) => res.json()));
  }

  getPosts();

  React.useEffect(() => {
    getPosts();
  }, []);

  const onLiked = () => {
    setOnlyLiked((prev) => !prev);
    console.log("!@");
  };

  return (
    <>
      <button className="onli_liked" onClick={onLiked}>
        Только лайкнутые
      </button>
      <div className="main">
        {posts.length ? (
          posts.map((item) => <Post onlyLike={onlyLiked} item={item} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default PostsComponent;
