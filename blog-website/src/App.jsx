import React from 'react';
import Routing from './Routing';
import "./assets/styles/main.css";
import Footer from './components/Footer/Footer';
import Subscription from './components/Subscription/Subscription';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <>
      <Routing />
      <Detail/>
      <Subscription/>
      <Footer/>
    </>
  );
}
export default App;
