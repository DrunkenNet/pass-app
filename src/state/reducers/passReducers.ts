import { ActionType } from "../action-types"
import { Action } from "../actions"

const initialState: string = "waiting";

const passReducer = (state: string = initialState, action: Action): string => {
  switch (action.type){
    case ActionType.NEWPASS:
      return "newpass";
    case ActionType.SENDPASS:
      return "sendpass";
    case ActionType.ANOTHERPASS:
      return "anotherpass";
    case ActionType.PASSA38:
      return "passa38";
    default:
      return state
  }
}

export default passReducer
