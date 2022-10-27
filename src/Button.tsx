type ButtonPropsType = {
    name: string
    callBack:()=>void
    status:boolean
}


const Button = ({name, callBack,status}:ButtonPropsType)=> {
  
    return(
       <button disabled={status} className="button" onClick={callBack}>{name}</button>
    )
}


export default Button