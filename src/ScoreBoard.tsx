type PropsType = {
    count:number
    MAXVALUE:number
    error: string
}


const ScoreBoard = ({count,MAXVALUE,error}:PropsType)=> {
    return(
        <div className={count=== MAXVALUE? 'red':'norm'} >{error ?  <div className={error === 'Error:value is not correct'? 'ErrorText' : 'text'}>{error}</div> : count}</div>
    )
}


export default ScoreBoard