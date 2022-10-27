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
    setSettingIsOpen:(value:boolean)=>void
}

export const ScoreBoardWithButtonPro = ({ count, maxValue, error, startValue, disable, incrementCount, resetCount,setSettingIsOpen}:ScoreBoardWithButtonType)=>{
    return(
        <div className="mainPro">
        <ScoreBoard count={count} MAXVALUE={maxValue} error={error} />
        <div className='buttonCantainer'>
          <Button name='inc' callBack={incrementCount} status={count === maxValue || disable} />
          <Button name='reset' callBack={resetCount} status={count === startValue || disable} />
          <div className="buttonSetting"><Button name='setting' callBack={()=>setSettingIsOpen(true)} status={false} /></div>
          
        </div>
      </div>
    )
}