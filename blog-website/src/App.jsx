import React from "react";
import Routing from "./Routing";
import "./assets/styles/main.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Subscription from './components/Subscription/Subscription';
function App() {
  return (
    <>
      <Header />
      <Routing />
      <Subscription/>
      <Footer/>

    </>
  );
}
export default App;
