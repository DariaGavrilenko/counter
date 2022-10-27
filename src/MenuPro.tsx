import { ChangeEvent } from "react"

type MenuType ={
    catchStartValue:(value:number)=>void
    catchMaxValue:(value:number)=>void
    maxValue:number
    startValue:number
    error:string
}


export const MenuPro = ({catchStartValue,catchMaxValue,maxValue,startValue,error}:MenuType ) => {

const onChangeHandlerMaxInput = (e:ChangeEvent<HTMLInputElement>) => {
console.log(typeof e.currentTarget.value);
catchMaxValue(+e.currentTarget.value)
}
const onChangeHandlerStartInput = (e:ChangeEvent<HTMLInputElement>) => {
catchStartValue(+e.currentTarget.value)
}

    return (
        <div className="menu">
            <div className="valuesContainer">
                <div className={error === 'Error:value is not correct'? "valueContainerError": "valueContainer"}>
                <span> max value </span>
                <input type="number" value={maxValue} step='1' onChange={onChangeHandlerMaxInput}/>
            </div>
            <div className={error === 'Error:value is not correct'? "valueContainerError": "valueContainer"}>
            <span> start value </span>
                <input type="number" step='1' value={startValue} onChange={onChangeHandlerStartInput}/>
            </div>
            </div>  
        </div>
    )
}