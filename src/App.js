
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Textform from './Textform';
import React, { Component, useState } from 'react'
import Alert from './Alert';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const SomeAlert=(message,type)=>{
     setAlert({
      msg : message,
      type: type
     })
     setTimeout(()=>{
       setAlert(null);
     },1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
       //document.getElementsByClassName("form-check-label").innerHTML= "Enable Light Mode";
      // document.getElementsByClassName("form-check-label").style.color= 'Black';
      document.body.style.backgroundColor='#343a40';
      SomeAlert("Dark Mode is Enabled", "success");
  }
    else{
    setMode('light');
    document.getElementsByClassName("form-check-label").innerHTML= "Enable Dark Mode";
    document.body.style.backgroundColor='white';
     SomeAlert("Light Mode is Enabled", "success");
  }
  }

  return (
    <>
    <BrowserRouter>
  

  <Navbar title="TEXTUTILS" About="ABOUT US"  mode={mode} toggleMode={toggleMode}></Navbar>
  <Alert alert={alert}/>
  <div className='container my-3 '>
  <Routes>
          <Route path='/about'element={<About/>}/>
           
         
          <Route path='/'element={<Textform heading="Enter Your Text" mode={mode} alert={alert} SomeAlert={SomeAlert}/>}/>
         
        </Routes>
  

  </div>
  
  </BrowserRouter>
    </>
  );
}

export default App;
