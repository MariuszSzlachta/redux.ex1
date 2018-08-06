import { HANDLE_INPUT} from './action';

function reducer(state = [], action){
  if (action.type === HANDLE_INPUT) {
    return { text: action.text }
  }
  return state;
}

export default reducer;