import { useState } from "react";

const ParagraphComponent = () => {
  const [btnValue, setBtnValue] = useState("Скрыть");
  const [displayValueOfParagraph, setDisplayValueOfParagraph] =
    useState("block");

  const hideText = () => {
    setBtnValue((btnValue) => (btnValue = "Показать"));
    setDisplayValueOfParagraph(
      (displayValueOfParagraph) => (displayValueOfParagraph = "none")
    );
  };

  return (
    <div className="">
      <button onClick={hideText}>{btnValue}</button>
      <p style={{ display: displayValueOfParagraph }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        voluptatibus totam dolores enim rerum molestias quam natus ea ipsum
        excepturi?
      </p>
    </div>
  );
};

export default ParagraphComponent;
