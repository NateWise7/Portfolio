import { useState, useEffect, useRef } from "react";

function MatrixEffect({ str, num }) {
const [ effectItems, setEffectItems ] = useState('')


  const setRandomState = () => { 
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

  let numberz = useRef(0);
  let start = useRef(0);

  const Loop = (functionParam, setTheNumber) => {
    setTimeout(() => {
      functionParam();
      setTheNumber.current++;
      if (start.current < num) {
        Loop(setRandomState, start);
      } else if (numberz.current < str.length) {
          Loop(setStateback, numberz)
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
        Loop(setRandomState, start);
      pageLoaded.current = true
    } else if (pageLoaded === true)
        filler(1, 1)
  })

    return effectItems;
}

export default MatrixEffect;