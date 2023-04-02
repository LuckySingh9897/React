
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import React, { Component, useState } from 'react'


function App() {

  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
       //document.getElementsByClassName("form-check-label").innerHTML= "Enable Light Mode";
      // document.getElementsByClassName("form-check-label").style.color= 'Black';
      document.body.style.backgroundColor='#343a40';
  }
    else{
    setMode('light');
    document.getElementsByClassName("form-check-label").innerHTML= "Enable Dark Mode";
    document.body.style.backgroundColor='white';
  }
  }

  return (
    <>
  

  <Navbar title="TEXTUTILS" About="ABOUT US"  mode={mode} toggleMode={toggleMode}></Navbar>
  <div className='container my-3 '>
  <Textform heading="Enter Your Text" mode={mode}></Textform>
  </div>
  
  
    </>
  );
}

export default App;
