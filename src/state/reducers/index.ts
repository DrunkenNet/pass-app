import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import passReducer from "./passReducers";


const reducers = combineReducers({
  pass: passReducer,
  bank: bankReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
