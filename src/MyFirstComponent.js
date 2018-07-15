import React from 'react';
import App from './App.js'

let MyFirstComponent = () => {

    let myNumber = 3;
    for (let i= 0; i<10; i++) {
        myNumber++;
    }

    return (
    <div>
        <button>{myNumber}</button>
        <div>
            <App />
        </div>
    </div>
    )
}

export default MyFirstComponent;