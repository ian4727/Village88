function Balance({money, chance}){
    return(
        <div className='balance'>
            <h2>Your Money: ${money}</h2>
            <h3>Chance left: {chance}</h3>
        </div>
    )
}

export {Balance}