
import React, { useReducer } from "react";

const initialState = { count: 0 };

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "Decrement":
      return { count: state.count - 1 };
    case "Increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "Decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "Increment" })}>+1</button>
    </div>
  );
}

export default UseReducer;



// state → Holds the current state value.
// dispatch(action) → Sends actions to update the state.
// reducer(state, action) → A function that determines how the state changes.
// initialState → The initial value of the state.

