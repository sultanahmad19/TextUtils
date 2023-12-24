import React, {useState} from 'react'

export default function TextFrom(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text has been cleared", "success")

  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const copyText = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied", "success")

  }


  const handleExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? '#214f74': 'white', color: props.mode=== 'dark'?'white':'black', }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'? 'white': '#042743'}}>
      <h1>Your text summary</h1>
      <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</b></p>
      <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</b></p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview !'}</p>
    </div>
    </>
  )
}
