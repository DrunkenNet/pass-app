import {NavigationElement} from "../models/NavigationElement";
import React from "react";

export class MockService extends React.Component {

  /**
   * @desc Get navigation mock data
   * @return NavigationElement[]
   */
  public getNavigation(): NavigationElement[] {
    let nav: any = [];

    nav.push(new NavigationElement("Daten erfassen", true, "", [
      new NavigationElement("Passierschein A38", false, "/PassierscheinA38", [])
    ]));
    nav.push(new NavigationElement("Zusammenfassung", false, "/Zusammenfassung", []));
    nav.push(new NavigationElement("Identifizieren", false, "", [
      new NavigationElement("Verfahren wählen", false, "/Identifizieren/VerfahrenWaehlen", []),
      new NavigationElement("Ident. durchführen", false, "/Identifizieren/Durchfuehren", [])
    ]));
    nav.push(new NavigationElement("bezahlen und absenden", false, "/BezahlenUndAbsenden", []));
    nav.push(new NavigationElement("Bestätigung", false, "/Bestätigung", []));

    return nav;
  }
}
