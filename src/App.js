import './App.css';
import Guess from "./components/Guess"
import Instructions from "./components/Instructions"



function App() {
  const wordPool = ['times', 'their', 'black', 'white','valid','chore','where','whose', 'mulch','quirk']

  var wordIndex = Math.floor(Math.random() * 10);
  var word = wordPool[wordIndex];

  console.log('word: ' + word);

  function refresh(){
    window.location.reload();
  } 

  return (
    <div>
      
      <div className='navigation'>
        <h1>Hangle</h1>
      </div>

      <div>
        <Instructions/>
      </div>

      <div className='refreshButton'>
        <button type='submit' onClick={refresh}>Try Another Word</button>
      </div>

      <div className='game'>
        <div className='GuessBox'>
          <Guess wordSel={word}/>
        </div>
      </div>


  
    </div>
  );
}

export default App;