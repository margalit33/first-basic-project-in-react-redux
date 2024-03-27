import React from 'react'
import { useDispatch } from 'react-redux';
import {increment3} from './counterSlice';

const May = () => {
    const dispatch = useDispatch();

  return (
    <div>May
        <button onClick={() => dispatch(increment3())}>+++</button>
    </div>
  )
}

export default May