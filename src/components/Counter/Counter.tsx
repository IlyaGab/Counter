import React from 'react';
import Display from '../Display/Display';
import c from '../Buttons/UniversalButton.module.css';
import classes from './Counter.module.css'
import UniversalButton from '../Buttons/UniversalButton';
import { StatusType} from '../../redux/counter-reducer';


type CounterPropsType = {
    count: number
    minValue: number
    maxValue: number
    Increment: () => void
    Reset: () => void
    status: StatusType
}

const Counter = (props: CounterPropsType) => {

    return (
        <div className={classes.counterMain}>
            <Display count={props.count} maxValue={props.maxValue} status={props.status}/>
            <div>
                <div className={c.countButtons}>
                    <div className={c.universalButton}>
                        <UniversalButton name={'Increment'}
                                         value={props.count === props.maxValue || props.status !== 'count'}
                                         callBack={props.Increment}/>
                    </div>
                    <div className={c.universalButton}>
                        <UniversalButton name={'Reset'}
                                         value={props.count === props.minValue || props.status !== 'count'}
                                         callBack={props.Reset}/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Counter;