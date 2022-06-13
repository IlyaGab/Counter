import React from 'react';

import UniversalInput from '../UniversalInput/UniversalInput';
import UniversalButton from '../Buttons/UniversalButton';
import c from './SetMenu.module.css'
import {
    ChangeMaxValueAC,
    ChangeMinValueAC,
    ChangeStatusAC,
    resCounterValueAC,
    StatusType
} from '../../redux/counter-reducer';
import {useDispatch} from 'react-redux';


type SetMenuPropsType = {
    minValue: number
    maxValue: number
    status: StatusType
}

const SetMenu = (props: SetMenuPropsType) => {

    const dispatch = useDispatch()

    const ChangeMinValue = (value: number) => {
        dispatch(ChangeMinValueAC(value))
        dispatch(ChangeStatusAC('set'))
    }
    const ChangeMaxValue = (value: number) => {
        dispatch(ChangeMaxValueAC(value))
        dispatch(ChangeStatusAC('set'))
    }

    if (props.maxValue <= props.minValue || props.minValue < 0) {
        dispatch(ChangeStatusAC('error'))
    }
    const setButtonHandler = () => {
        dispatch(ChangeStatusAC('count'))
        dispatch(resCounterValueAC(props.minValue))
    }


    return (
        <div>
            <div className={c.setMenu}>
                <span>Max value:</span>
                <UniversalInput
                    onChange={ChangeMaxValue}
                    value={props.maxValue}
                    error={props.maxValue <= props.minValue || props.maxValue <= 0}
                />

            </div>
            <div className={c.setMenu}>
               <span>Min value:</span>
               <UniversalInput
                   onChange={ChangeMinValue}
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