import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1 className='text-3xl font-bold underline text-center'>MN Melee App</h1>
    </>
  );
}

export default App;
