import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, addbyValue } from './ReduxSlicer';

const ReduxUI = () => {
  const [valuenew, setnewvalue] = useState(0);

  // get state
  const counterState = useSelector(state => state.counterRed.count);

  // dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counterState}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <br /><br />

      <input
        type="number"
        value={valuenew}
        onChange={(e) => setnewvalue(Number(e.target.value))}
      />

      <button onClick={() => dispatch(addbyValue(valuenew))}>
        Add by Value
      </button>
    </div>
  );
};

export default ReduxUI;
