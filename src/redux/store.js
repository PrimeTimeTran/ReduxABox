import { createStore } from 'redux'

const counterInitialState = {
  count: 0,
  firingComponent: null
}

const counter = (state = counterInitialState, action) => {
  switch(action.type) {
    case 'COUNTER_FIRING':
      return {
        count: state.count + 1,
        firingComponent: 'counter'
      }
    case 'SIBLING_FIRING':
      return {
        count: state.count + 1,
        firingComponent: 'sibling'
      }
    case 'GREAT_GRAND_CHILD_FIRING':
      return {  
        count: state.count + 1, 
        firingComponent: 'greatGrandChild' 
      }
    default:
      return state;
  }
}

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
