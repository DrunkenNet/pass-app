import React, {useState} from 'react'
import {useSelector} from "react-redux";
import StateService from "../../services/StateService";
import {depositMoney, sendPass} from "../../state/action-creators";
import {ActionType} from "../../state/action-types";
import {store} from "../../state/store";
import {combineReducers} from "redux";

function GetPassState() {
  // @ts-ignore
  const pass = useSelector(state => state.pass); // Rule 1: call hooks in top-level
  return <>{pass}</>
}

export class PassComponent extends React.Component {

  /**
   * @desc Current Pass :)
   */
  public pass: Object;

  constructor(props: any) {
    super(props);

    this.pass = {
      first_name: "Manuel",
      last_name: "Kramm"
    }

    store.subscribe(() => {
      // Problematik mit den combineReducers ...
      // An der Stelle mache ich halt :)
      console.log('123');
    })
  }

  private submitForm() {
    /**
     * @TODO
     */
    sendPass(this.pass);
  }

  /**
   * @desc Render
   */
  public render(){
    return <div id={"content"}>
      <GetPassState></GetPassState>
      <form onSubmit={(e: React.SyntheticEvent) => { e.preventDefault(); }}>
        <div className="form-group">
          <label htmlFor="inputFirstName">Vorname</label>
          <input key={"inputFirstName"} type="text" className="form-control" id="inputFirstName" aria-label={"First name"} placeholder="First name"/>
          {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
        </div>
        <div className="form-group">
          <label htmlFor="inputLastName">Nachname</label>
          <input key={"inputLastName"} type="text" className="form-control" id="inputLastName" aria-label={"last name"} placeholder="Last name"/>
        </div>
        <br/>
        <button onClick={() => { this.submitForm() }} type="submit" className="btn btn-primary">Passierschein anfragen</button>
      </form>
    </div>
  }
}
