import React from 'react';
import './App.css';
import CardComponent from './Components/CardComponent';
import CardComponentV2 from './Components/CardComponentV2';
// import ParagraphComponent from './Components/ParagraphComponent';/

function App() {

  // const lorem = 'Lorem ipsum dolor sit amet. Consectetur adipisicing elit. Quam optio quae ducimus repellendus porro reiciendis molestias quibusdam, rem soluta a.'
  const cardArray = ['first', 'second', 'third', 'fourth']
  // console.log(cardArray )
  const cardArr2 = ['first', 'second', 'third', 'fourth', 'fifth']
  

  return (
    <div className="App">
      {/* <ParagraphComponent
        text={lorem}
      /> */}
      {/* <CardComponent
        cardArr={cardArray}
      /> */}
      {/* <CardComponent
        cardArr={cardArr2}
      /> */}
      <CardComponentV2
        cardArr={cardArr2}
        />
    </div>
  );
}

export default App;
