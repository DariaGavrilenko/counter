import Button from "./Button"
import { MenuPro } from "./MenuPro"
type MenuWithButtonType = {
    setMaxValue:(nam:number)=>void
    setStartValue:(nam:number)=>void
    startValue: number
    maxValue:number
    setToLocalStorage:()=>void
    error:string
}



export const MenuWithButtonPro = ({setMaxValue,setStartValue,startValue,maxValue,setToLocalStorage,error}:MenuWithButtonType)=>{
    return(
        <div className='menuContainerPro'>
        <MenuPro catchMaxValue={setMaxValue}
          catchStartValue={setStartValue}
          startValue={startValue}
          maxValue={maxValue} 
          error={error}/>
        <div className='buttonSetCantainer' >
          <Button name='set' callBack={setToLocalStorage} status={error === 'Error:value is not correct'} />
        </div>
      </div>
    )
}