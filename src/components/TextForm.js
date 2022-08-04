import React, { useState } from "react";

export default function TextForm(props) {
 const [text, setText] = useState('');

 const handleupClick = () => {
    let newtext = text.toUpperCase();

    setText(newtext);
    props.showAlert("Converted to Uppercase" ,"succes");
  };
  
  const handlelowClick = () => {
    let newtext = text.toLowerCase(); 

    setText(newtext);
    props.showAlert("Converted to Lowercase" ,"succes");
  };



  const handleClear = () => {
    let newtext = '' 

    setText(newtext);
    props.showAlert("Text Has Been Cleared" ,"succes");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () =>{

  var text = document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Has Been Copied to Your ClipBoard" ,"succes");

  }

  

  return (

    <>
    <div className="container"  style={{
      color:props.mode === 'dark'?'white':'#042743'
  

    }}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          style={{
              backgroundColor:props.mode === 'dark'?'grey':'white',
              color:props.mode === 'dark'?'white':'#042743'
          
            }}
          id="myBox"
          cols="100"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleupClick}>
        Convert To UpppeCase

      </button>

      <button className="btn btn-primary m-2" onClick={handlelowClick}>
        Convert To LowerCase
      </button>

      <button className="btn btn-primary m-2" onClick={handleClear}>
       Clear text
      </button>

      <button className="btn btn-primary m-2" onClick={handleCopy}>
       Copy text
      </button>

      </div>

    <div className="container   my-3"   style={{
      color:props.mode === 'dark'?'white':'#042743'
  
    }}>
    
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> takes  {0.008 * text.split(" ").length } Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text:"Enter something to Preview here:"}</p>


    </div>
    </> 
 
 
     );
}
