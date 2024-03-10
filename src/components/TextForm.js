import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const handleUpClick = ()=> {
    console.log('Uppercase text');
    let newtext = text.toUpperCase();
    setText(newtext);    
  }
  const handleOnChange = (event)=> {
    console.log('On change');
   setText(event.target.value);
  }
  // setText("Hii this is a text");
  return (
    <>
    <div className='container'>
      <h3>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange}></textarea>
</div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p> Time taken to read is {0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
  
}
