import React from 'react'
import Row from './Row'

const Grid = ({currentGuess , guess , turn}) => {
  return (
    <div>
        <p>hey</p>
    {guess.map((g , i) => {
       return <Row key={i} guess={g} />
    })}
    </div>
  )
}

export default Grid