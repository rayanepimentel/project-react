import React from 'react';


interface TitleProps {
  text: String;
}

function Title(props: TitleProps) {
  return(
    //<h1>Hello</h1>
    <h1>{props.text}</h1>
  )
}

//JSX - Javascript XML
//é a forma de incluir HTML dentro de JS

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Title text="Titulo 1"/>
      <Title text="Titulo 2"/>
      <Title text="Titulo 3"/>
      <Title text="Titulo 4"/>
    </div>
  );
}

export default App;
