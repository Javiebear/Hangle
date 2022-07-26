import './Lives.css';
import heart from './heart.png';

function Lives(props){
    var amountInccorect = props.amountLives;
    var chosenWord = props.wordSel;

    if(amountInccorect === 5){
        document.getElementById('heart1').className='noImg'
        window.alert("You ran out of lives. The word was " + chosenWord + "Page Refreshing");
        refresh();
    }else if(amountInccorect === 4){
        document.getElementById('heart2').className='noImg'
    }else if(amountInccorect === 3){
        document.getElementById('heart3').className='noImg'
    }else if(amountInccorect === 2){
        document.getElementById('heart4').className='noImg'
    }else if(amountInccorect === 1){
        document.getElementById('heart5').className='noImg'
    }

    function refresh(){
        window.location.reload();
    } 

    return (
        <div className='heartPos'>
            <div id='heart1'>
                <img src={heart} alt="heart"/>
            </div>

            <div id='heart2'>
                <img src={heart} alt="heart"/>
            </div>

            <div id='heart3'>
                <img src={heart} alt="heart"/>
            </div>

            <div id='heart4'>
                <img src={heart} alt="heart"/>
            </div>

            <div id='heart5'>
                <img src={heart} alt="heart"/>
            </div>
        </div>
    )
}

export default Lives;