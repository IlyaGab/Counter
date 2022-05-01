import React, {ChangeEvent, useState} from 'react';
import './App.css';
import c from './App.module.css'
import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';



function App() {
    let [count, setCount] = useState(0)

    // useEffect(() => {
    //     let valuseAsString = localStorage.getItem('counterValue')
    //     if (valuseAsString) {
    //         let newValue = JSON.parse(valuseAsString)
    //         setValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value])


    const incHandler = () => {

    }
    const maxValueChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        localStorage.setItem('maxCounterValue', e.currentTarget.value)
    }

    const minValueChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('minCounterValue', e.currentTarget.value)
    }

    return (
        <div className={c.appBody}>
            <div className={c.appWrapper}>
                <div className={c.titleWrapper}>
                    <span>Counter</span>
                    <Display count={count}/>
                    <Buttons name={'name'} count={count} setCount={setCount}/>
                </div>
            </div>
            <div className={c.titleWrapper}>
                <span>Local storage</span>
                <h1>{count}</h1>
                <div>
                   <span>Max value:</span>
                    <input name={'maxvalue'} type="number" onChange={maxValueChangeHandler}/>
                </div>
                <div>
                   <span>Start Value:</span>
                    <input name={'minvalue'} type="number" onChange={minValueChangeHandler}/>
                </div>
                <button onClick={incHandler}>set</button>
            </div>
        </div>
    );
}

export default App;
