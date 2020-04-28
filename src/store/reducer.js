const initalState = {
  counter:0,
  results: []
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {
      ...state,
      counter: state.counter + 1
    }
   case 'DECREMENT':
    return {
      ...state,
      counter: state.counter -1
    }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      }
    case 'SUBSTRACT':
      return {
        ...state,
        counter: state.counter - action.value
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case 'DELETE_RESULT':
      const updatedArray = state.results.filter(result => result.id !== action.resultElId )
      return {
        ...state,
        results: updatedArray
      }
  }
  return state
}


export default reducer;
