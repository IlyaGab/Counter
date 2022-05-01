import React from 'react';
import UniversalButton from './UniversalButton';
import c from './UniversalButton.module.css'

type ButtonTypeProps = {
    name: string
    count: number
    setCount: (count: number) => void
}

const Buttons = (props: ButtonTypeProps) => {
    const incrementButton = () => props.setCount(props.count + 1)
    const resetButton = () => props.setCount(0)

    const styleIncrement = {
        backgroundColor: 'rgb(60, 233, 126)'
    }
    const styleReset = {
        backgroundColor: 'orange'
    }
    return (
        <div>
            <div className={c.countButtons}>
                <UniversalButton name={'Increment'} style={styleIncrement} value={props.count > 4}
                                 callBack={incrementButton}/>
                <UniversalButton name={'Reset'} style={styleReset} value={props.count < 1} callBack={resetButton}/>
            </div>
            {/*<div><UniversalButton name={'Set'} callBack={setButton} value={props.count > -1} style={styleReset} /></div>*/}
        </div>
    );
};

export default Buttons;