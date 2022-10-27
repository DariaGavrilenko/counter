import Button from "./Button"
import ScoreBoard from "./ScoreBoard"

type ScoreBoardWithButtonType = {
    count:number
    maxValue:number
    error:string
    startValue:number
    disable:boolean
    incrementCount:()=>void
    resetCount:()=>void
}

export const ScoreBoardWithButton = ({ count, maxValue, error, startValue, disable, incrementCount, resetCount}:ScoreBoardWithButtonType)=>{
    return(
        <div className="main">
        <ScoreBoard count={count} MAXVALUE={maxValue} error={error} />
        <div className='buttonCantainer'>
          <Button name='inc' callBack={incrementCount} status={count === maxValue || disable} />
          <Button name='reset' callBack={resetCount} status={count === startValue || disable} />
        </div>
      </div>
    )
}