import React from "react";
import './PostsComponent.css'
import LikeComponent from "./LikeComponent";    

const PostsComponent = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";


  const [posts, setPosts] = React.useState([]);

  async function getPosts() {
    setPosts(await fetch(url).then((res) => res.json()));
  }

  getPosts();

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="main">
      {posts.length ? (
        posts.map((item) => 
        <div className="card" key={item.id}>
            <div className="card__title">
                {item.title}
            </div>
            <div className="card__body">
                {item.body} 
            </div>
            <LikeComponent/>
        </div>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PostsComponent;
