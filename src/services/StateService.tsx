import React from "react";
import { useSelector } from "react-redux";
import { State } from "../state";

function StateService() {

  return {
    getPassState: () => {
      return useSelector((state: State) => state.pass)
    }
  };
}

export default StateService;
