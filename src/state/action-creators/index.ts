import {Dispatch} from "redux"
import {ActionType} from "../action-types"
import {Action} from "../actions"

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount
    })
  }
}

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount
    })
  }
}

export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT
    })
  }
}

export const newPass = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NEWPASS,
      pass: 1
    })
  }
}

export const sendPass = (pass: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SENDPASS,
      pass: 2
    })
  }
}

export const anotherPass = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ANOTHERPASS,
      pass: 3
    })
  }
}

export const passa38 = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PASSA38,
      pass: 4
    })
  }
}
