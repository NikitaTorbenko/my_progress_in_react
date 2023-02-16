import { useState } from "react";

const NewComponent = () => {
  const [countSecond, setCountSecond] = useState(0);

  const addOne = () => setCountSecond((countSecond) => countSecond + 1);
  const addFive = () => setCountSecond((countSecond) => countSecond + 5);
  const addTen = () => setCountSecond((countSecond) => countSecond + 10);
  const addSelf = () => setCountSecond((countSecond) => countSecond * countSecond);

  return (
    <div className="">
      <h1>{countSecond}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={addFive}>+5</button>
      <button onClick={addTen}>+10</button>
      <button onClick={addSelf}>^2</button>
      <p>{countSecond < 10 ? 'Count меньше 10' : 'Count больше 10'}</p>
    </div>
  );
};

export default NewComponent;
