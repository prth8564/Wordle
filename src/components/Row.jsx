import React from 'react'
import './Row.css';

const Row = ({guess , currentGuess}) => {

  if(guess) {
    return (
      <div className="row past">
        {guess.map((letter , index) => {
          return <div key={index} className={letter.color}>{letter.key} </div>
  })}
      </div>
    )
  }

  if(currentGuess){
    let currentArray = currentGuess.split('');
    return (
      <div className="row current">
        {currentArray.map ((letter , index) => (
          <div key={index} className='filled'>{letter} </div>
        ))}
        {[...Array(5 - currentArray.length)].map((index) => (
          <div key={index}></div>
        ))}
      </div>
    )
  }

  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Row