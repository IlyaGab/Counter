import React from 'react';
import c from './Display.module.css';
import {StatusType} from '../../redux/counter-reducer';


type DisplayPropsType = {
    count:number
    maxValue:number
    status:StatusType
}


const Display = (props:DisplayPropsType) => {
    return(
       props.status === 'error' ? <div className={c.errorMessage}>Incorrect value</div> :
           props.status === 'set' ? <div className={c.setMessage}>Enter Values and press 'set'</div>:
               <div className={props.count === props.maxValue ? c.redMessage : c.normalMessage }>{props.count}</div>
    )
};

export default Display;