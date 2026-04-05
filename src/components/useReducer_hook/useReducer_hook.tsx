import React, { useReducer } from 'react';

// 1. Defining the shape of the State
type CounterState = {
  count: number;
};

// 2. Defining Action Types using Discriminated Unions
type IncrementAction = {
  type: 'INCREMENT';
};

type DecrementAction = {
  type: 'DECREMENT';
};

type ResetAction = {
  type: 'RESET';
};

type IncrementByAmountAction = {
  type: 'INCREMENT_BY_AMOUNT';
  payload: number;
};

// Combining all action types
type CounterAction = 
  | IncrementAction 
  | DecrementAction 
  | ResetAction 
  | IncrementByAmountAction;

const initialState = { count: 0 };

// 3. The Reducer function with TypeScript types
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENT_BY_AMOUNT':
      return { count: state.count + action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unhandled action type');
  }
}

const UserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default UserReducer;