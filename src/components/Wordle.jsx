import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle.js'
import Grid from './Grid.jsx';
const Wordle = ({solution}) => {
    const {currentGuess , guess , handleKeyUp , turn  ,isCorrect} = useWordle(solution);

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
    </>
  )
}

export default Wordle