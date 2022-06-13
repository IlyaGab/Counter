import React from 'react';
import './App.css';
import c from './App.module.css'
import Counter from './components/Counter/Counter';
import SetMenu from './components/SetMenu/SetMenu';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/store';
import {
    ChangeMaxValueAC,
    ChangeMinValueAC,
    ChangeStatusAC,
    incCounterValueAC,
    resCounterValueAC, StatusType
} from './redux/counter-reducer';


function App() {

    const count = useSelector<AppStateType, number >( state => state.counter.count)
    const minValue = useSelector<AppStateType, number >( state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number >( state => state.counter.maxValue)
    const status1 = useSelector<AppStateType, StatusType>(state => state.counter.status)
    const dispatch = useDispatch()

    const incHandler = ()=>{
        dispatch(incCounterValueAC())
        }
    const resetHandler = ()=> {
        dispatch(resCounterValueAC(minValue))
    }
    const ChangeMinValue = (value: number) => {
        dispatch(ChangeMinValueAC(value))
        dispatch(ChangeStatusAC('set'))
    }
    const ChangeMaxValue = (value: number) => {
        dispatch(ChangeMaxValueAC(value))
        dispatch(ChangeStatusAC('set'))
    }
    const changeStatus = (value:StatusType) => {
        dispatch(ChangeStatusAC(value))
    }


    return (
        <div className={c.appBody}>
            <div className={c.appWrapper}>
                <div className={c.titleWrapper}>
                    <span>Counter</span>
                    <Counter count={count}
                             minValue={minValue}
                             maxValue={maxValue}
                             Increment={incHandler}
                             Reset={resetHandler}
                             status={status1}/>
                </div>

            </div>
            <div className={c.appMenuWrapper}>
                <div className={c.titleMenuWrapper}>
                    <span>Set Menu</span>
                    <SetMenu minValue={minValue}
                             maxValue={maxValue}
                             status={status1}
                             ChangeMinValue={ChangeMinValue}
                             ChangeMaxValue={ChangeMaxValue}
                             setStatus={changeStatus}
                             setCount={resetHandler}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
