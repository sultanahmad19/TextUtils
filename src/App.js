import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import React from "react";


function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils - Word and Character Counter" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className='container my-3'>

    <TextFrom heading="Try TextUtils- Word counter, Character counter,Remove extra spaces" showAlert={showAlert} mode={mode} />
    
    </div>
    </>

  );
}

export default App;
