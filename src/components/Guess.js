import './Guess.css';
import {useState} from 'react';
import Box from "./Box"
import Lives from "./Lives"

function Guess(props){

    //initizlizing variables
    var wordSelected = props.wordSel;
    const alphabet = [
        {letter: 'a'},
        {letter: 'b'},
        {letter: 'c'},
        {letter: 'd'},
        {letter: 'e'},
        {letter: 'f'},
        {letter: 'g'},
        {letter: 'h'},
        {letter: 'i'},
        {letter: 'j'},
        {letter: 'k'},
        {letter: 'l'},
        {letter: 'm'},
        {letter: 'n'},
        {letter: 'o'},
        {letter: 'p'},
        {letter: 'q'},
        {letter: 'r'},
        {letter: 's'},
        {letter: 't'},
        {letter: 'u'},
        {letter: 'v'},
        {letter: 'w'},
        {letter: 'y'},
        {letter: 'x'},
        {letter: 'z'}
      ];

      var letterNumber = [0,0,0,0,0];

      //converting the word into numbers that represent the word in the alphabet
      for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < wordSelected.length; j++) {
          if (alphabet[i].letter === wordSelected[j]){
            letterNumber[j] = i;
          }
        }
    
      }
    

    const [letterGuess, setLetter] = useState('');
    const [wrongLetters, setInccorect] = useState('');
    var validLetter = false;
    const [invalid, setAmountIncorrect] = useState(0);

    const [firstLetter, setOne] = useState('');
    const [secondLetter, setTwo] = useState('');
    const [thirdLetter, setThree] = useState('');
    const [fourthLetter, setFour] = useState('');
    const [fifthLetter, setFive] = useState('');

    // once 5 letters are guesssed ther user will get a pop up saying they finished the game with a refresh
    if (firstLetter.length === 1 && secondLetter.length === 1 && thirdLetter.length === 1 && fourthLetter.length === 1 && fifthLetter.length === 1){
        window.alert("Correct! The word was " + wordSelected + "Page Refreshing");
        window.location.reload();
    }

    //function that occurs when the user types out a letter
    // if the user gets a correct letter it will be displayed on the gray blocks
    const guess = event => {
        if(event.target.value.length >=2 ){
            event.target.value = event.target.value[1];
            setLetter(event.target.value);
            for(let i = 0; i < wordSelected.length; i++){
                if(wordSelected[i] === event.target.value){
                    validLetter = true;
                    if(i === 0){
                        document.getElementById('letter1').className = "colorChange";
                        setOne(event.target.value);

                    }if(i === 1){
                        document.getElementById('letter2').className = "colorChange";
                        setTwo(event.target.value);

                    }if(i === 2){
                        document.getElementById('letter3').className = "colorChange";
                        setThree(event.target.value);

                    }if(i === 3){
                        document.getElementById('letter4').className = "colorChange";
                        setFour(event.target.value);

                    }if(i === 4){
                        document.getElementById('letter5').className = "colorChange";
                        setFive(event.target.value);

                    }
                }
            }

            if (validLetter === false){
                var sameLetter = false;
                for(let i = 0; i < wrongLetters.length; i++){
                    if (event.target.value === wrongLetters[i]){
                        sameLetter = true;
                    }
                }
                if(sameLetter === true){
                    setInccorect(wrongLetters);
                }else{
                    setInccorect(event.target.value + wrongLetters);
                    setAmountIncorrect(1 + invalid);
                }
            }

        }


        setLetter(event.target.value);
    };

    //Section where the use will guess letters, display incorrect letters, the correct letter and their lives
    return (
        <div>
            <div className='guessSection'>
                <form action = "#">
                    <h2>Guess:</h2>
                    <input type='text' id='guessLetter' name='guessLetter' className='guessSquare' onChange={guess} value={letterGuess}/>
                </form>
                <h2>Incorrect Letters: {wrongLetters}</h2>
            </div>
            <div className="boxes">

                <div id="letter1" >
                    <Box letter={alphabet[letterNumber[0]].letter} wordSel={wordSelected}/>
                </div>

                <div id="letter2">
                    <Box letter={alphabet[letterNumber[1]].letter}/>
                </div>

                <div id="letter3">
                    <Box letter={alphabet[letterNumber[2]].letter}/>
                </div>

                <div id="letter4">
                    <Box letter={alphabet[letterNumber[3]].letter}/>
                </div>

                <div id="letter5">
                    <Box letter={alphabet[letterNumber[4]].letter}/>
                </div>
            </div>

            <div>
                <Lives amountLives={invalid}/>
            </div>
        </div>
    )
}

export default Guess;
