import React from 'react';
import c from './UniversalButton.module.css';

type UnivesalButtonPropsType = {
    name:string
    callBack:()=>void
    value: boolean
}

const UniversalButton = (props:UnivesalButtonPropsType) => {
    return (
        <div>
            <button className={c.universalButton}  disabled={props.value} onClick={props.callBack}>{props.name}</button>
        </div>
    );
};

export default UniversalButton;