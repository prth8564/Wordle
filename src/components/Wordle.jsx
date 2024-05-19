import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle.js'
import Grid from './Grid.jsx';
import Keypad from './Keypad.jsx';
const Wordle = ({solution}) => {
    const {currentGuess , guess , handleKeyUp , turn  ,isCorrect , usedKeys} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup' , handleKeyUp);

        return () => window.removeEventListener('keyup' , handleKeyUp);
    },[handleKeyUp])

    useEffect(() => {
      console.log(guess , turn , isCorrect);
    } ,[guess , turn , isCorrect])
    
  return (
    <>
    <div>Wordle -- {currentGuess}</div>
    <p>{solution}</p>
    <Grid currentGuess = {currentGuess} guess={guess} turn={turn} />
    <Keypad usedKeys = {usedKeys} />
    </>
  )
}

export default Wordle