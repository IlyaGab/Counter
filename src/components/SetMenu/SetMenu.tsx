import React from 'react';

import UniversalInput from '../UniversalInput/UniversalInput';
import UniversalButton from '../Buttons/UniversalButton';
import c from './SetMenu.module.css'
import {StatusType} from '../../redux/counter-reducer';


type SetMenuPropsType = {
    minValue: number
    maxValue: number
    status: string
    ChangeMinValue: (value: number) => void
    ChangeMaxValue: (value: number) => void
    setStatus: (value: StatusType) => void
    setCount: (minValue: number) => void
}

const SetMenu = (props: SetMenuPropsType) => {

    if (props.maxValue <= props.minValue || props.minValue < 0) {
        props.setStatus('error')
    }
    const setButtonHandler = () => {
        props.setStatus('count')
        props.setCount(props.minValue)
    }


    return (
        <div>
            <div className={c.setMenu}>
                <span>Max value:</span>
                <UniversalInput
                    onChange={props.ChangeMaxValue}
                    value={props.maxValue}
                    error={props.maxValue <= props.minValue || props.maxValue <= 0}
                />

            </div>
            <div className={c.setMenu}>
               <span>Min value:</span>
               <UniversalInput
                   onChange={props.ChangeMinValue}
                   value={props.minValue}
                   error={props.status === 'error'}
               />
            </div>
            <div>
                <UniversalButton
                    name={'set'}
                    callBack={setButtonHandler}
                    value={props.status !== 'set'}
                />
            </div>
        </div>

    );
};

export default SetMenu;