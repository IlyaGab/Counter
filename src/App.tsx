import React, { useState } from 'react';
import './App.css';
import c from './App.module.css'



function App() {
  let [count, setCount] = useState(0)

  const styles = {
    font: count > 4 ? '45px bold' : '',
    color: count > 4 ? 'red' : '',
  }

  return (
    <div className={c.appWrapper}>
      <div className={c.titleWrapper}>
        <span>Counter</span>
        <div className={c.countTitle} style={styles}>{count}</div>
        <div className={c.countButtons}>
          <button disabled={count === 5} className={c.incrementButton} onClick={() => { setCount(count + 1) }}>Increment</button>
          <button disabled={count === 0} className={c.resetButton} onClick={() => { setCount(count = 0) }}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
