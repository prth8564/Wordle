import { useState } from "react";

const useWordle = () => {

    const [turn , setTurn] = useState(0);
    const [currentGuess , setCurrentGuess]  = useState('');
    const [guess , setGuess] = useState('');
    const [history , setHistory] = useState(['apple' , 'fruit']);
    const [isCorrect , setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log("Formattting now----------", currentGuess);
    }

    const addNewGuess = () => {

    }

    const handleKeyUp = ({key}) => {
        

        if(key === 'Enter'){
             if(turn > 5){
                console.log("No more than 5 chances")
                return;
            }
            if(history.includes(currentGuess)){
                console.log("You have alreday used that word");
                return;
            }
            if(currentGuess.length < 5){
                console.log("word has to be 5 characters");
                return;
            }
            formatGuess();
        }



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