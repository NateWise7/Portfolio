import { useState, useRef } from "react";
import useInterval from '@use-it/interval';

const RainStream = () => {

const VALID_CHARS = '1234567890'
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 10;
const MAX_STREAM_SIZE = 25;


const getRandInRange = (min, max) => {
    return Math.floor(Math.random() * (max-min)) + min 
}

    const getRandChar = () => {
        return (
            VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length))    
            )
        }    
        
        const getRandStream = () => { 
            return (new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE)) 
        .fill()
        .map(_ => getRandChar())
        ) 
    }
    
    const getMutatedStream = stream => {
        const newStream = [];
        for (let i=1; i<stream.length; i++) {
            if (Math.random() < STREAM_MUTATION_ODDS) {
                newStream.push(getRandChar());
            } else {
                newStream.push(stream[i]);
            }    
        }    
        newStream.push(getRandChar());
        return newStream;
    }    
    
    
    const [stream, setStream] = useState(getRandStream());
    const [topPadding, setTopPadding] = useState(0);
    let keys = useRef(0);

    useInterval(() => {
        if (topPadding === 0) {
            setStream(getRandStream());
            setTopPadding(stream.length * -53);
        } else if (topPadding > window.innerHeight) {
            setTopPadding(stream.length * -23);
            setStream(getRandStream())
        } else {
            setTopPadding(topPadding + 15);
            setStream(getMutatedStream)
        }
    }, 100);

    let vis = useRef('hidden')

    setTimeout(() => {
        vis.current = 'visible'
    }, 100) 

    return (
        <div
            style={{
                visibility: vis.current,
                marginTop: topPadding,
                color: 'black',
                writingMode: "vertical-rl",
                textOrientation: 'upright',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                textShadow: '0px 0px 8px rgba(140, 140, 140, 0.8)',
                fontSize: 20,
            }}>
            { 
            stream.map((char, index) => {
                keys.current++;
                return(
                <a 
                href="#hello" 
                key={keys.current}
                    style={{
                        color: index === stream.length -1 ? '#fff' : undefined,
                        opacity: index < 6 ? 0.1 + index * 0.15 : 1,
                        textShadow: 
                        index === stream - 1
                        ? '0px 0px 20px rgba(255, 255, 255, 1)'
                        : undefined,
                        marginTop: -12,
                    }}>
                    {char}
                </a>
            )})
            }
        </div>
    )
};

export default RainStream;