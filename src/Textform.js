import React, {useState} from 'react'



export default function Textform(props) {
    
     const handleupClick=()=>{
        console.log(text);
        console.log(text.length);
        let s=text.toUpperCase();
      
       
        console.log(s);
        setText(s);
        props.SomeAlert("Converted To Upper Case","success");
      
     }
     const handlelowerClick=()=>{
        console.log(text);
        console.log(text.length);
        let s=text.toLowerCase();
      
       
        console.log(s);
        setText(s);
      props.SomeAlert("Converted To Lower Case","success");

        
     }
     const handleClearClick=()=>{
        console.log(text);
        console.log(text.length);
        let s="";
      
       
        console.log(s);
        setText(s);
       
        props.SomeAlert("Clear the text area","success");
        
     }
     const handleCorrectClick=()=>{

        let s= text.split(/[ ]+/);
        for(let i=0;i<s.length;i++){
            s[i]=s[i].charAt(0).toUpperCase()+ s[i].slice(1).toLowerCase();
        }
        setText(s.join(" "));
        props.SomeAlert("Converted To Correct Case","success");
        
        
     }
     const handleToggleClick=()=>{

           
        let result = "";
for (let i = 0; i < text.length; i++) {
  let char = text.charAt(i);
  
    if (char >= "A" && char <= "Z") {
 
    char = char.toLowerCase();
  }
  else if (char >= "a" && char <= "z") {
 
    char = char.toUpperCase();
  }

  result += char;
}
      
        setText(result);
        
        props.SomeAlert("Toggle the Case","success");
     }

     const handonChange=(event)=>{
        console.log("Changed");
      
        setText(event.target.value);
     }
    const [text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
     

<h1  >{props.heading}</h1>
         
  <div className="mb-3">

    <textarea className="form-control" style ={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white' }} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handonChange}></textarea>
  </div>
  <button className="btn btn-primary" type="submit" onClick={handleupClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-3" type="submit" onClick={handlelowerClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-3" type="submit" onClick={handleCorrectClick}>Correct Case</button>
  <button className="btn btn-primary mx-3" type="submit" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-3" type="submit" onClick={handleToggleClick}>Toggle</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
      
        <p>{text.length} characters and {`${text.length===0?0:text.replace(/\s+/g, ' ').trim().split(" ").length}`} words</p>
        <h3>
            Preview
        </h3>
        <p>{text.length>0?text:"Enter Something in the Box"}</p>
    </div>
  </>
  )
}
