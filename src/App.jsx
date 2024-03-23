import Buttton from "./components/Button/Button";
import Header from "./components/Header";
import Dice from "./components/Dice/Dice";
import { useState } from "react";
import { way } from "./data";

function App() {
  const [content, setContent] = useState(way[0]);

  function handleClick(way) {
    setContent(way[Math.floor(Math.random() * 6)]);
  }

  return (
    <>
      <Header />
      <Dice source={content} />
      <Buttton onClick={() => handleClick(way)}>Click me</Buttton>
    </>
  );
}

export default App;
