import React from 'react';
import c from './UniversalButton.module.css';

type UniversalButtonPropsType = {
    name:string
    callBack:()=>void
    value: boolean
    style:ButtonColorPropsType
}

type ButtonColorPropsType = {
    backgroundColor:string
}

const UniversalButton = (props:UniversalButtonPropsType) => {
    return (
        <div>
            <button className={c.universalButton} style={props.style} disabled={props.value} onClick={props.callBack}>{props.name}</button>
        </div>
    );
};

export default UniversalButton;