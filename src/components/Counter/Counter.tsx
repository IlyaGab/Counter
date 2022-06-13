import React from 'react';
import Display from '../Display/Display';
import c from '../Buttons/UniversalButton.module.css';
import classes from './Counter.module.css'
import UniversalButton from '../Buttons/UniversalButton';
import {incCounterValueAC, resCounterValueAC, StatusType} from '../../redux/counter-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';


type CounterPropsType = {
    minValue: number
    maxValue: number
    status: StatusType
}

const Counter = (props: CounterPropsType) => {

    const count = useSelector<AppStateType, number >( state => state.counter.count)

    const dispatch = useDispatch()

    const incHandler = ()=>{
        dispatch(incCounterValueAC())

    }
    const resetHandler = ()=> {
        dispatch(resCounterValueAC(props.minValue))
    }

    return (
        <div className={classes.counterMain}>
            <Display count={count} maxValue={props.maxValue} status={props.status}/>
            <div>
                <div className={c.countButtons}>
                    <div className={c.universalButton}>
                        <UniversalButton name={'Increment'}
                                         value={count === props.maxValue || props.status !== 'count'}
                                         callBack={incHandler}/>
                    </div>
                    <div className={c.universalButton}>
                        <UniversalButton name={'Reset'}
                                         value={count === props.minValue || props.status !== 'count'}
                                         callBack={resetHandler}/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Counter;