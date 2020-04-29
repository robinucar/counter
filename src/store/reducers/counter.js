import * as actionTypes from '../action';

const initalState = {
  counter:0,

}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
    return {
      ...state,
      counter: state.counter + 1
    }
   case actionTypes.DECREMENT:
    return {
      ...state,
      counter: state.counter -1
    }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
  }
  return state
}


export default reducer;
