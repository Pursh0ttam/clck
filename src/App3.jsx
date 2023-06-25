import React, { useState } from 'react';


const App3 = () => {

    const State = useState();
    const [Count,setCount] = useState(0);

    


    const IncNum =()=>{
        setCount(Count  + 10);
    };

    return(
        <>
        <h1>{Count} </h1>
        <button onClick={IncNum}> Get Time</button>
        </>
    );
};

export default App3;