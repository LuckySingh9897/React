import React, {useState} from 'react'

export default function Textform(props) {
    
     const handleupClick=()=>{
        console.log(text);
        console.log(text.length);
        let s=text.toUpperCase();
      
       
        console.log(s);
        setText(s);
        
     }

     const handonChange=(event)=>{
        console.log("Changed");
        setText(event.target.value);
     }
    const [text,setText]=useState("Enter Your Text");
  return (
    <div>
     

<h1>{props.heading}</h1>
         
  <div className="mb-3">

    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handonChange}></textarea>
  </div>
  <button className="btn btn-primary" type="submit" onClick={handleupClick}>Convert to Uppercase</button>
    </div>
  )
}
