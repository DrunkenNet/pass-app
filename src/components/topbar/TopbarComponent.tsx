import React from 'react'

/**
 * CSS
 */
import './scss/topbar.scss';

/**
 * Models
 */
import { NavigationElement } from "../../models/NavigationElement";

/**
 * Components
 */
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

/**
 * Services
 */
import { SidebarService } from "../../services/SidebarService";

export class TopbarComponent extends React.Component {

  /**
   * @desc Complete navigation
   */
  public navigation: Array<NavigationElement> = [];

  /**
   * @desc Render sidebar
   */
  public render(){
    return <div id={"simpleTopbar"}>
      <div className={"burger"} onClick={() => SidebarService.toggleSidebar()}>
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>
      <div className={"title"}>The A38 pass</div>

      <div className={"right"}>
        {/* @TODO Why save and end? Where is the difference? */}
        <Button className={"save_pass"} variant="outline-secondary" key={'save_pass'.toString()}>Save pass</Button>{' '}
        <Button className={"end_pass"} variant="outline-secondary" key={'end_pass'.toString()}>End pass</Button>{' '}
      </div>
    </div>
  }
}
