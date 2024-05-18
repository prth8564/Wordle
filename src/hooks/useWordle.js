import { useState } from "react";

const useWordle = () => {

    const [turn , setTurn] = useState(0);
    const [currentGuess , setCurrentGuess]  = useState('');
    const [guess , setGuess] = useState('');
    const [history , setHistory] = useState('');
    const [isCorrect , setIsCorrect] = useState(false);

    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const handleKeyUp = ({key}) => {
        
        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0 , -1);
            })
            return;
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => { return prev + key} );
            }
        }
    }

    return {turn , currentGuess , guess, isCorrect , handleKeyUp}
}
export default useWordle;