import { useState } from "react";

const useWordle = (solution) => {

    const [turn , setTurn] = useState(0);
    const [currentGuess , setCurrentGuess]  = useState('');
    const [guess , setGuess] = useState([...Array(6)]);
    const [history , setHistory] = useState(['apple' , 'fruit']);
    const [isCorrect , setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log("Formattting now----------", currentGuess);
        const solutionArray = [...solution];
        const formattedGuess = [...currentGuess].map((letter) => {
            return {key:letter , color:'grey'};
        })
        formattedGuess.forEach((letter , index) => {
            if(solutionArray[index] == letter.key){
                letter.color = 'green';
                solutionArray[index] = null;
            }
        })
        formattedGuess.forEach((letter , index) => {
            if(solutionArray.includes(letter.key) && letter.color !=='green'){
                letter.color = 'yellow';
            }
        })
        
        return formattedGuess;
    }




    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuess((prevGuess) => {
            const newGuess = [...prevGuess];
            newGuess[turn] = formattedGuess;
            return newGuess;
        })
        setHistory((prevHistory) => {
            return [...prevHistory , currentGuess]
        })

        setTurn((prevTurn) =>{
            return prevTurn+1;
        })
        setCurrentGuess('');
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
            const formattedGuess = formatGuess();
            addNewGuess(formattedGuess);
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