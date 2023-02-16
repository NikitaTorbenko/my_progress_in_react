import { useState } from "react";

const ParagraphComponent = (props) => {
  const firstSentence = props.text.slice(0, props.text.indexOf(".") + 1);
  console.log(firstSentence);
  const [isVisible, setIsVisible] = useState(false);
  const showParagraph = () => {
    console.log("btn");
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <>
      <p>{isVisible === false ? firstSentence : props.text}</p>
      <button onClick={showParagraph}>
        {isVisible === false ? "Показать полностью" : "Скрыть"}
      </button>
    </>
  );
};

export default ParagraphComponent;
