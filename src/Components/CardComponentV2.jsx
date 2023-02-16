import { useState } from "react";

const CardComponentV2 = ({ cardArr }) => {
  console.log(cardArr);

  const [index, setIndex] = useState(2);
  const [isVisible, setIsVisible] = useState(true);

  console.log('index ', index)
  console.log('cardArr.length', cardArr.length)
  const showMore = () => {
    setIndex((index) => index + 2);
    if (index >= cardArr.length) {
      setIsVisible((isVisible) => !isVisible);
    }
  };

  return (
    <>
      <div>
        <h2>{cardArr.slice(0, index)}</h2>
      </div>
      <button onClick={showMore}>
        {isVisible === true ? "Показать еще" : ""}
      </button>
    </>
  );
};

export default CardComponentV2;
