import React from 'react';
import Slider from './Slider/Slider'
import Cards from "./Cards";
import Email from "./Email";
import Navbar from './Navbar';

const Feature = () => {
    return(
        <div className="App">
            
            <Slider/>
            <br />
            <Cards />
            <br />
            <Email />
        </div>
    )
}

export default Feature;