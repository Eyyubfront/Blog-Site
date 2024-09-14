import React from "react";
import Routing from "./Routing";
import "./assets/styles/main.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Card />
    </>
  );
}
export default App;
