import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import { SidebarComponent } from "./components/sidebar/SidebarComponent";
import { TopbarComponent } from "./components/topbar/TopbarComponent";
import { PassComponent } from "./components/pass/PassComponent";
import { WelcomeComponent } from "./components/welcome/WelcomeComponent";

function App() {
  return (
    <div className="App">

      {/*Redux tutorial*/}
      {/*<h1>{amount}</h1>*/}
      {/*<button onClick={() => depositMoney(1000)}>Deposit</button>*/}
      {/*<button onClick={() => withdrawMoney(500)}>Withdraw</button>*/}
      {/*<button onClick={() => bankrupt()}>Bankrupt</button>*/}

      <TopbarComponent/>
      <SidebarComponent/>
      <Routes>
        <Route path="/" element={ <WelcomeComponent/> } />
        <Route path="/PassierscheinA38" element={ <PassComponent/> } />
        <Route path="/Success" element={ <PassComponent/> } />
      </Routes>
    </div>
  );
}

export default App;
