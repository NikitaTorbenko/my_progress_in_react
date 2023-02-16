import React, { useState } from "react";
import InputComponent from "./Components/InputComponent";
import InputText from "./Components/InputText";
import NewComponent from "./Components/NewComponent";
import ParagraphComponent from "./Components/ParagraphComponent";
import SquareComponent from "./Components/SquareComponent";
import StarComponent from "./Components/StarComponent";
import TitleComponent from "./Components/TitleComponent";

/*

* Написать компонент для создания заголовков Title, где мы передаем текст заголовка, размер и цвет (черный по дефолту, красный или синий)

* Написать компонент для простых Input, который принимает type (text, password...), placeholder, value. (Оформи как и Bootstrap инпуты)

*/

function App() {
  const fontSize = "4rem";
  const color = "black";

  const [ValueI, setValueI] = useState("time");

  return (
    <div className="App">
      {/* <TitleComponent
        title={{
          fontSize,
          color,
        }}
      >
        hello world
      </TitleComponent>
      <InputComponent
        onChange={(e) => setValueI(e.target.value)}
        type={"text"}
        placeholder={"hguhioweios"}
        // forInput={{
        //   type: 'text',
        //   placeholder: 'hguhioweios',
        //   value: ValueI
        // }}
      />

      <StarComponent totalStars={5} selectedStars={3} />
      <StarComponent totalStars={10} selectedStars={6} />

      <hr />

      <NewComponent />
      <hr />
      <hr />
      <ParagraphComponent />

      <SquareComponent/> */}

      <InputText
        min={3}
        max={7}
      />
    </div>
  );
}

export default App;
