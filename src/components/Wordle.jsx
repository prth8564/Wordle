import React, { useEffect , useState } from 'react'
import useWordle from '../hooks/useWordle.js'
import Grid from './Grid.jsx';
import Keypad from './Keypad.jsx';
import Modal from './Modal.jsx';

const Wordle = ({solution}) => {
    const {currentGuess , guess , handleKeyUp , turn  ,isCorrect , usedKeys} = useWordle(solution);
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        window.addEventListener('keyup' , handleKeyUp);
        if (isCorrect) {
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyUp)
        }

        if (turn > 5) {
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyUp)
        }
        return () => window.removeEventListener('keyup' , handleKeyUp);
    },[handleKeyUp , isCorrect])

    useEffect(() => {
      console.log(guess , turn , isCorrect);
    } ,[guess , turn , isCorrect])
    
  return (
    <>
    <h1>
      Wordle(Clone){solution}
    </h1>
    <Grid currentGuess = {currentGuess} guess={guess} turn={turn} />
    <Keypad usedKeys = {usedKeys} />
    {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </>
  )
}

export default Wordle