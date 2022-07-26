import './Box.css';

function Box(props){

    return (
        <div className='square'>
            <p>{props.letter}</p>
        </div>
    )
}

export default Box;