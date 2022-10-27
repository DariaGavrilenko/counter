import Button from "./Button"
import { Menu } from "./Menu"
type MenuWithButtonType = {
    setMaxValue:(nam:number)=>void
    setStartValue:(nam:number)=>void
    startValue: number
    maxValue:number
    setToLocalStorage:()=>void
    error:string
}



export const MenuWithButton = ({setMaxValue,setStartValue,startValue,maxValue,setToLocalStorage,error}:MenuWithButtonType)=>{
    return(
        <div className='menuContainer'>
        <Menu catchMaxValue={setMaxValue}
          catchStartValue={setStartValue}
          startValue={startValue}
          maxValue={maxValue} />
        <div className='buttonSetCantainer' >
          <Button name='set' callBack={setToLocalStorage} status={error === 'Error:value is not correct'} />
        </div>
      </div>
    )
}