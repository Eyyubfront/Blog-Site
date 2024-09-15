import React, { useEffect, useState } from "react";
import Routing from "./Routing";
import "./assets/styles/main.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Subscription from "./components/Subscription/Subscription";
import { useLocation } from "react-router";
import Loader from "./components/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(false);
  const location=useLocation();

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, [location.pathname]);
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[location.pathname])
  return (
    <>
    {loader?<Loader/>:""}
      <Header />
      <Routing />
      <Subscription />
      <Footer />
    </>
  );
}
export default App;
