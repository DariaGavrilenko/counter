import React, { useEffect, useState } from 'react';
import './App.css';
import ScoreBoard from './ScoreBoard';
import Button from './Button';
import { Menu } from './Menu';
import { start } from 'repl';
import { MenuWithButton } from './MenuWithButton';
import { ScoreBoardWithButton} from './ScoreBoardWithButton';
import { ScoreBoardWithButtonPro } from './ScoreBoardWithButtonPro';
import { MenuWithButtonPro } from './MenuWithButtonPro';

function App() {

  const [error, setError] = useState<string>('')
  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')) || 0)
  const [count, setCount] = useState<number>(Number(localStorage.getItem('startValue')) || 0)
  const [disable, setDisable] = useState<boolean>(false)
  const[settingIsOpen,setSettingIsOpen] = useState<boolean>(false)

  // const [data, setData] = useState({
  //   error: '',
  //   maxValue: Number(localStorage.getItem('maxValue')) || 5,
  //   startValue: Number(localStorage.getItem('startValue')) || 0,
  //   count: Number(localStorage.getItem('startValue')) || 0,
  //   disable: false
  // })

  useEffect(() => {
    check(maxValue, startValue)
  }, [startValue, maxValue])

  //   useEffect(() => {
  //   check(data.maxValue, data.startValue)
  // }, [data])

  useEffect(() => {
    setError('')
  }, [])

  // useEffect(() => {
  //  setData({...data, error:""})
  // }, [])

  useEffect(() => {
    setDisable(false)
  }, [])

  // useEffect(() => {
  //   setData({...data,disable:false})
  // }, [])

  //Batching = >  

  //useEffect => without deps => run every rerender + run on mount
  //useEffect => [] => run on mount
  //useEffect => [startValue] => run on mount + every time when startValue changed

  const saveValue = (maxValue: number, startValue: number) => {
    localStorage.setItem('maxValue', maxValue.toString())
    localStorage.setItem('startValue', startValue.toString())
    setDisable(false)
    setError('')
    let a = localStorage.getItem('maxValue')
    if (a) {
      setMaxValue(+a)
    }
    let b = localStorage.getItem('startValue')
    if (b) {
      setStartValue(+b)
    }
    setCount(startValue)
    setSettingIsOpen(false)
  }


  // const saveValue = (maxValue: number, startValue: number) => {
  //   localStorage.setItem('maxValue', maxValue.toString())
  //   localStorage.setItem('startValue', startValue.toString())
  //   setData({...data, disable:false})
  //   setData({...data, error:""})
  //   let a = localStorage.getItem('maxValue')
  //   if (a) {
  //     setData({...data, maxValue:+a})
  //   }
  //   let b = localStorage.getItem('startValue')
  //   if (b) {
  //     setData({...data,startValue:+b})
  //   }
  //   setData({...data,count:data.startValue})
  // }

  const setToLocalStorage = () => {
    saveValue(maxValue, startValue)
  }
  // const setToLocalStorage = () => {
  //   saveValue(data.maxValue, data.startValue)
  // }

  const check = (maxValue: number, startValue: number) => {
    console.log(3, maxValue);
    setDisable(true)
    if (maxValue < 0 || startValue < 0 || maxValue <= startValue) {
      setError('Error:value is not correct')
    } else {
      setError("Define range and press 'Set'")
    }
  }

  // const check = (maxValue: number, startValue: number) => {
  //   console.log(3, maxValue);
  //   setData({...data,disable:true})
  //   if (maxValue < 0 || startValue < 0 || maxValue <= startValue) {
  //     setData({...data,error:'Error:value is not correct'})
  //   } else {
  //     setData({...data,error:"Define range and press 'Set'"})
  //   }
  // }

  const incrementCount = () => {
    if (count < maxValue) {
      setCount(count + 1)
    }
  }

  // const incrementCount = () => {
  //   if (data.count < data.maxValue) {
  //     setData({...data, count: data.count + 1})
  //   }
  // }
  
  const resetCount = () => setCount(startValue)

  // const resetCount = () => setData({...data,count:data.startValue})

 
  return (
    <div className='global'>
      <MenuWithButton setMaxValue={setMaxValue} setStartValue={setStartValue}
        startValue={startValue} maxValue={maxValue}
        setToLocalStorage={setToLocalStorage} error={error} />
      <ScoreBoardWithButton count={count} maxValue={maxValue}
        error={error} startValue={startValue}
        disable={disable} incrementCount={incrementCount} resetCount={resetCount} />


      {settingIsOpen ?
        <MenuWithButtonPro setMaxValue={setMaxValue} setStartValue={setStartValue}
          startValue={startValue} maxValue={maxValue}
          setToLocalStorage={setToLocalStorage} error={error} />
        : <ScoreBoardWithButtonPro count={count} maxValue={maxValue}
          error={error} startValue={startValue}
          disable={disable} incrementCount={incrementCount} resetCount={resetCount} setSettingIsOpen={setSettingIsOpen}/>
      }
    </div>
  );
}

export default App;


     {/* <div className='menuContainer'>
        <Menu catchMaxValue={setMaxValue}
          catchStartValue={setStartValue}
          startValue={startValue}
          maxValue={maxValue} />
        <div className='buttonSetCantainer' >
          <Button name='set' callBack={setToLocalStorage} status={error === 'Error:value is not correct'} />
        </div>
      </div> */}

        {/* <div className="main">
        <ScoreBoard count={count} MAXVALUE={maxValue} error={error} />
        <div className='buttonCantainer'>
          <Button name='inc' callBack={incrementCount} status={count === maxValue || disable} />
          <Button name='reset' callBack={resetCount} status={count === startValue || disable} />
        </div>
      </div> */}