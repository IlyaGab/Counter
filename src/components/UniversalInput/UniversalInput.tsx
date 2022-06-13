import React, {ChangeEvent} from 'react';
import c from './UniversalInput.module.css'
type InputPropsType = {
    onChange:(value:number)=>void
    value:number
    error:boolean
}

const UniversalInput = (props:InputPropsType) => {
    let onChangeInputeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.onChange(e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <input
                className={props.error ?c.errorMessage : c.normalMessage}
                type="number"
                value={props.value}
                onChange={onChangeInputeHandler}
            />

        </div>
    );
};

export default UniversalInput;