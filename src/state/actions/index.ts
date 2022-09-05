import { ActionType } from "../action-types"

interface DepositAction {
  type: ActionType.DEPOSIT,
  payload: number
}

interface WithdrawAction {
  type: ActionType.WITHDRAW,
  payload: number
}

interface BankruptAction {
  type: ActionType.BANKRUPT
}

interface newPassAction {
  type: ActionType.NEWPASS,
  pass: number
}

interface sendPassAction {
  type: ActionType.SENDPASS,
  pass: number
}

interface anotherPassAction  {
  type: ActionType.ANOTHERPASS,
  pass: number
}

interface passA38 {
  type: ActionType.PASSA38,
  pass: number
}

export type Action = DepositAction | WithdrawAction | BankruptAction | newPassAction | sendPassAction | anotherPassAction | passA38;
