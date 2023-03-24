import React, {useState} from 'react'

export default function Textform(props) {
    
     const handleupClick=()=>{
        console.log(text);
        console.log(text.length);
        let s=text.toUpperCase();
      
       
        console.log(s);
        setText(s);
        
     }
     const handlelowerClick=()=>{
        console.log(text);
        console.log(text.length);
        let s=text.toLowerCase();
      
       
        console.log(s);
        setText(s);
        
     }
     const handleClearClick=()=>{
        console.log(text);
        console.log(text.length);
        let s="";
      
       
        console.log(s);
        setText(s);
        
     }
     const handleToggleClick=()=>{

        console.log(text);
        
        
     }

     const handonChange=(event)=>{
        console.log("Changed");
        setText(event.target.value);
     }
    const [text,setText]=useState("");
  return (
    <>
    <div>
     

<h1>{props.heading}</h1>
         
  <div className="mb-3">

    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handonChange}></textarea>
  </div>
  <button className="btn btn-primary" type="submit" onClick={handleupClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-3" type="submit" onClick={handlelowerClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-3" type="submit" onClick={handleToggleClick}>Toggle Case</button>
  <button className="btn btn-primary mx-3" type="submit" onClick={handleClearClick}>Clear</button>
    </div>
    <div className='container my-3'>
        <h2>Your Text Summary</h2>
      
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <h3>
            Preview
        </h3>
        <p>{text}</p>
    </div>
  </>
  )
}
