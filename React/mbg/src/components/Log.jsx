
function Log({log, chance}){
    return(
        <>
        <div className='logContainer'>
            {log.map((log, i) =>{
                return(
                    <p key={i} className={log.result < 0 ? 'loss' : 'gain'}>{log.date} You clicked {log.risk} Risk, value is {log.result}. Current Money is ${log.money}</p>
                )
            })}
            {chance <= 0 ? <h4>Game Over!</h4> : ''} 
        </div>
        </>
    )
}

export {Log}