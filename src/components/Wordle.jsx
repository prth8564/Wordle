import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle.js'
const Wordle = ({solution}) => {
    const {currentGuess , handleKeyUp} = useWordle();

    useEffect(() => {
        window.addEventListener('keyup' , handleKeyUp);

        return () => window.removeEventListener('keyup' , handleKeyUp);
    },[handleKeyUp])
    
  return (
    <div>Wordle -- {currentGuess}</div>
  )
}

export default Wordle