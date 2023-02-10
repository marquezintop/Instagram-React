import React from "react";
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Corpo from "./Corpo";

function Html() {
    return (
        <>
            <Navbar />
            <Corpo/>
        </>
    )
}

ReactDOM.render(<Html />, document.querySelector('.root'))
