import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  let[mode, setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }
   
    if(mode==="dark")
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
  return (
    <>
      <Navbar title ="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/> 
      <About mode={mode}/>
      <div className="container my-3"><TextForm heading="Enter you text to analyze below" mode={mode}/></div>
    </>
  );
}

export default App;
