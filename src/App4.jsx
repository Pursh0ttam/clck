import React, { useState } from 'react';

const APP=()=>{
let newTime = new Date().toLocaleTimeString();

const [ctime,setCtime] = useState(newTime);

const IncNum =()=>{
    let newCTime = new Date().toLocaleTimeString();

    setCtime(newCTime);
    }


return(
        <>
        <h1>{ctime}</h1>
        <button onClick={IncNum}>Get Time</button>
        </>
    );
};

export default APP;