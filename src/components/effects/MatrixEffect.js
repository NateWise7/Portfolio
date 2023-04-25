import { useState, useEffect, useRef } from "react";

function MatrixEffect( { str, num }) {
const [ effectItems, setEffectItems ] = useState('')


  const setEffectStateFunction = () => { 
    let newState = '';
    for (let i=0;i<str.length; i++ ) {
      const random = getRandomChar();
     newState += random;
    }
    setEffectItems(newState)
  }

  const getRandomChar = () => {
    const chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-/@#$%^&*()<>{}[]|';
    let num = Math.floor(Math.random() * chars.length);
    return chars[num]
  }


  let startNumOfLoops = 0;
  let numOfLoops = 10 + num;

  const firstLoop = (functionParam) => {
    setTimeout(() => {
      functionParam();
      startNumOfLoops++;
      if (startNumOfLoops < numOfLoops) {
        firstLoop(setEffectStateFunction);
      } else {
        firstLoop(setStateback)
      } 
    }, 100)
  }


  let count = str.length;
  let number = 0;

  const setStateback = () => {
    let newState = '';
    for (let i=0;i<=number;i++) {
        newState += str.charAt(i)
    }
    for (let i=0;i<count-number-1;i++) {
        newState += getRandomChar()
    }
    number++;
    setEffectItems(newState)
  }



  const filler = (a,b) => {return(a+b)}

  let pageLoaded = useRef(false);
  
  useEffect (() => {
    if (pageLoaded.current === false) {
        firstLoop(setEffectStateFunction, );
      pageLoaded.current = true
    } else if (pageLoaded === true)
        filler(1, 1)
  })

    return effectItems;
}

export default MatrixEffect;