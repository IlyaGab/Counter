import React from 'react';
import c from './UniversalButton.module.css';

type UniversalButtonPropsType = {
    name: string
    callBack: () => void
    value: boolean
}


const UniversalButton = (props: UniversalButtonPropsType) => {
    return (
        <div className={c.countButtons}>
            <button className={c.universalButton}
                    disabled={props.value}
                    onClick={props.callBack}>{props.name}</button>
        </div>
    );
};

export default UniversalButton;