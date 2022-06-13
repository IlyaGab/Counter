import React from 'react';
import './App.css';
import c from './App.module.css'
import Counter from './components/Counter/Counter';
import SetMenu from './components/SetMenu/SetMenu';
import {useSelector} from 'react-redux';
import {AppStateType} from './redux/store';
import {StatusType} from './redux/counter-reducer';


function App() {

    const minValue = useSelector<AppStateType, number >( state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number >( state => state.counter.maxValue)
    const status = useSelector<AppStateType, StatusType>(state => state.counter.status)


    return (
        <div className={c.appBody}>
            <div className={c.appWrapper}>
                <div className={c.titleWrapper}>
                    <span>Counter</span>
                    <Counter minValue={minValue}
                             maxValue={maxValue}
                             status={status}/>
                </div>
            </div>
            <div className={c.appMenuWrapper}>
                <div className={c.titleMenuWrapper}>
                    <span>Set Menu</span>
                    <SetMenu minValue={minValue}
                             maxValue={maxValue}
                             status={status}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
