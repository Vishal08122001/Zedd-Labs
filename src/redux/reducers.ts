import { combineReducers } from "redux";

interface CounterState {
  counter: number;
  counter2: number;
}

const initialState1: CounterState = {
  counter: 0,
  counter2: 0,
};

const counterReducer = (
  state: CounterState = initialState1,
  action: { type: string }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const counterReducer2 = (
  state: CounterState = initialState1,
  action: { type: string }
) => {
  switch (action.type) {
    case "INCREMENT2":
      return { ...state, counter2: state.counter2 + 5 };
    case "DECREMENT2":
      return { ...state, counter2: state.counter2 - 5 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  counter2: counterReducer2,
});

export default rootReducer;
