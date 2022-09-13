import React, { useState } from 'react';

const StateButton = () => {

    const [number, setNumber] = useState(1);

    const add = () => {
      setNumber(number + 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={add}>+++</button>
        </div>
    );
};

export default StateButton;