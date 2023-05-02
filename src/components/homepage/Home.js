import React from "react";
import Typewriter from 'typewriter-effect';
import './home.css';

function Home() {
    return (
        <h1 className="
        text-9xl 
        w-full home 
        flex 
        justify-center 
        font-mono 
        mt-32"
        >
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter
                        .pauseFor(4500)
                        .typeString('Welcome!')
                        .start();
                    }}/>
        </h1>
    )
}

export default Home;