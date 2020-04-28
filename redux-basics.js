const redux = require('redux');
const createStore = redux.createStore;
const initalState = {
  counter:0
}
//reducer

const rootReducer = (state = initalState, action) => {
  const newState = {...state};
  if(action.type === 'INC_COUNTER') {
    return {
      counter: newState.counter + 1,
    };
  }

  if(action.type === 'ADD_COUNTER') {
    return {
      counter: newState.counter + action.payload,
    };
  }
  return state
}

//store
const store = createStore(rootReducer)

console.log(store.getState())

//subscription

store.subscribe(() => {
  console.log('[subscription]', store.getState())
})

//dispatching action

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', payload: 10});
console.log(store.getState)

