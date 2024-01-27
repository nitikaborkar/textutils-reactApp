import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  let[mode, setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
    
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("dark mode has been enabled","success")
    }
   
    if(mode==="dark")
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("light mode has been enabled","success")
    }
  }
  return (
    <>
      <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <About mode={mode}/>
      <div className="container my-3"><TextForm heading="Enter you text to analyze below" mode={mode} showAlert={showAlert}/></div>
    </>
  );
}

export default App;
