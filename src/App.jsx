import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Wordle from './components/Wordle';
import './index.css'
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
      {solution && <Wordle solution = {solution}/>}
      </div>
        
    </>
  )
}

export default App
