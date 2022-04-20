import React from 'react';
import c from './Display.module.css';

type DisplayPropsType = {
    count:number
}

const lastNumber= 5

const Display = (props:DisplayPropsType) => {
    return <div className={props.count === lastNumber ?c.countTitleActive :c.countTitle} >{props.count}</div>
};

export default Display;