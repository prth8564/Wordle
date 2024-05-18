import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wordle from './components/Wordle';
function App() {
  const [solution, setSolution] = useState();

  useEffect(() => {
    fetch('http://localhost:8000/solutions').then(res => res.json()).then(json => {
      const randomWord = json[Math.floor(Math.random() * 14)];
      setSolution(randomWord.word);
    })
      
  },[setSolution])

  return (
    <>
    <div>
      <h1>{solution && <Wordle solution = {solution}/>}</h1>
      </div>
        
    </>
  )
}

export default App
