import React from "react";
import Routing from "./Routing";
import "./assets/styles/main.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import Footer from './components/Footer/Footer';
import Subscription from './components/Subscription/Subscription';
import Detail from './components/Detail/Detail';


function App() {
  return (
    <>
      <Header />
      <Routing />

      <Card />

      <Detail/>
      <Subscription/>
      <Footer/>

    </>
  );
}
export default App;
