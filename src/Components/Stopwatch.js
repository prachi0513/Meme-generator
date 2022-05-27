
import React, { useState } from 'react';
export default function Stopwatch(){


let min = 0;
const [timer, setTimer] = useState(0)
const sec = ()=>{
    setInterval(()=>{
    setTimer((timer) => timer + 1)
    },100)
    console.log("chl gya");
}



return (
    <>

    <h1>{timer}:{min}</h1>
    <button onClick={sec}>Play</button>
    <button>Pause</button>
    </>
)
}