import Button from 'react-bootstrap/Button';
import game from '../assets/images/game.avif';

function Choice({prizes, chance, moneyHandler}){
    return(
        <div className='choiceContainer'>
            {prizes.map((prize, index) => {
                return(
                    <div className='bet' key={index}>
                        <Button className='btn' variant="outline-warning" onClick={() => moneyHandler(prize.range.min, prize.range.max, prize.id)} disabled={chance <= 0}>
                            <img className='game'src={game} alt="" />
                            <h3>{prize.id}Risk</h3>
                            <h4>{prize.range.min} to {prize.range.max}</h4>
                        </Button>
                    </div>
                )
            })}
        </div>
    )
}

export {Choice}