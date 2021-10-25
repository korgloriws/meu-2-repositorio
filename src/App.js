
import { useState } from 'react';
import './App.css';
import Qrcodecanvas from './Qrcodecanvas';



function App() {
  const[text,setText]=useState("alguma coisa")
  return (
    <div className="App">
     <input onChange={(Element)=>(setText(Element.target.value))} value={text}></input>
     < Qrcodecanvas text={Text}></Qrcodecanvas>
    </div>
  );
}

export default App;
