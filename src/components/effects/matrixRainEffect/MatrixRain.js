import { useRef } from 'react';
import RainStream from "./RainStream";
import "./matrixRain.css"; 

const MatrixRain = () => {
    let keys = useRef(0)
    const streamCount = Math.floor(window.innerWidth / 26)
    return (
        <div className="rain">
            {new Array(streamCount).fill().map(_ => {
                keys.current++;
                return(
                <div key={keys.current}><RainStream /></div>
                )
                })}
        </div>
    )
};

export default MatrixRain;