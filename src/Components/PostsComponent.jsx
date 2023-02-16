import React from "react";
import "./PostsComponent.css";
import Post from "./Post";

// const ITEMS_ON_PAGE = 9;

// текущая 2
// posts.slice(ITEMS_ON_PAGE * current_page, current_page * ITEMS_ON_PAGE + ITEMS_ON_PAGE)

const PostsComponent = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = React.useState([]);
  const [onlyLiked, setOnlyLiked] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const countPostOnPage = 9;

  async function getPosts() {
    setPosts(await (await fetch(url)).json());
  }

  React.useEffect(() => {
    getPosts();
  }, []);

  React.useEffect(() => {
    if (posts.length) {
      setTotalPages(Math.ceil(posts.length / 9)); // 12
    }
    console.log(Math.ceil(posts.length / 9));
  }, [posts]);

  const onLiked = () => {
    setOnlyLiked((prev) => !prev);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  function currentPageHandler(arr){
    return arr.slice(
        currentPage * countPostOnPage,
        currentPage * countPostOnPage + countPostOnPage
      )
  }

  return (
    <>
      <button className="onli_liked" onClick={onLiked}>
        Только лайкнутые
      </button>
      <div className="main">
        {posts.length ? (
          <>
            <div className="posts">
              {currentPageHandler(posts)
                .map((item) => (
                  <Post key={item.id} onlyLike={onlyLiked} item={item} />
                ))}
            </div>
            <button
              disabled={currentPage <= 1}
              className="btn__pak"
              onClick={previousPage}
            >
              Перейти на предыдущую страницу
            </button>
            <span>Текущая страница {currentPage}</span>
            <button className="btn__pak" onClick={nextPage}>
              Перейти на следующую страницу
            </button>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default PostsComponent;
