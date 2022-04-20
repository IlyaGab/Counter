import React from 'react';
import UniversalButton from './UniversalButton';
import c from './UniversalButton.module.css'

type ButtonTypeProps = {
    name:string
    count:number
    setCount:(count:number)=>void
}


const Buttons = (props:ButtonTypeProps) => {
    const incrementButton = () => props.setCount(props.count +1)
    const resetButton = () => props.setCount(0)
    return (
        <div>
            <div className={c.countButtons}>
                <UniversalButton name={'Increment'}  value={props.count > 4} callBack={incrementButton} />
                <UniversalButton name={'Reset'} value={props.count < 1} callBack={resetButton} />
            </div>
        </div>
    );
};

export default Buttons;