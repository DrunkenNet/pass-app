import React from "react";

/**
 * Services
 */
import {SidebarService} from "../../services/SidebarService";

export class WelcomeComponent extends React.Component {

  /**
   * @desc Init showSidebar state
   * @private
   */
  private showSidebar: boolean = SidebarService.showSidebar;

  constructor(props: any) {
    super(props);
    SidebarService.sideBarVisibilityChange.subscribe(() => {
      this.showSidebar = SidebarService.showSidebar;
      this.setState(state => ({}));
    })
  }

  /**
   * @desc Render html
   */
  render() {
    return <div id={"content"} className={!this.showSidebar ? "full" : ""}>
      <h1>Huhu und Willkommen :)</h1>
      <br></br>
      <p>Ich wünsche euch einen wunderschönen guten Abend!</p>
      <p>Hier will ich euch gern die "miniminimini-Antragstrecke" zeigen :)</p>
      <p>Viel Spaß!</p>
    </div>
  }
}
