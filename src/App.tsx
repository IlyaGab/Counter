import React, { useState } from 'react';
import './App.css';
import c from './App.module.css'
import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';



function App() {
  let [count, setCount] = useState(0)


  return (
    <div className={c.appWrapper}>
      <div className={c.titleWrapper}>
        <span>Counter</span>
        <Display count={count} />
        <Buttons name={'name'} count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
