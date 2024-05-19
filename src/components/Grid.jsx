import React from 'react'
import Row from './Row'

const Grid = ({currentGuess , guess , turn}) => {
  return (
    <div>
    {guess.map((g , i) => {
      if(turn == i){
        return <Row key={i} guess={g}  currentGuess = {currentGuess} />
      }
       return <Row key={i} guess={g} />
    })}
    </div>
  )
}

export default Grid