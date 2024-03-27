import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  increment3,
  reduce2,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div style={{backgroundColor:"gray"}}>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(increment3())}>+++</button>
        <button onClick={() => dispatch(reduce2())}>--</button>


      </div>
      
      
    </div>
  );
}
