import React, {useState} from 'react';
import './Room.css';

function Room() {
  let [isLit, setLit] = useState(true);
  let [tmp, setTmp] = useState(22);
  
  return ( 
    <div className={`room ${isLit? "LightON" : "LightOFF"}`}>
        This Room Light is {isLit? "Light ON" : "Light OFF"}
        <br/>
        <button onClick={() => setLit(true)}>Light ON</button>
        <button onClick={() => setLit(false)}>Light OFF</button>
        <br/>
        <br/>
        This Room Temprature is: {tmp} <sup>o</sup>c
        <br/>
        <button onClick={() => setTmp(++tmp)}>+</button>
        <button onClick={() => setTmp(--tmp)}>-</button>
        
    </div>
  );
}

export default Room;
