import React from 'react'
import './scss/sidebar.scss';

/**
 * Services
 */
import { MockService } from "../../services/MockService";
import { SidebarService } from "../../services/SidebarService";

/**
 * Components
 */
import { NavigationElement } from "../../models/NavigationElement";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

export class SidebarComponent extends React.Component {

  /**
   * @desc Complete navigation
   */
  public navigation: Array<NavigationElement> = [];

  /**
   * @desc Show / hide sidebar
   */
  public showSidebar: boolean = SidebarService.showSidebar;

  public state = {
    showSidebar: true
  }

  private mockService: MockService  = new MockService({});

  /**
   * @desc Toggle child element menu
   * @param index
   *
   * @TODO I dont know why we must set this.setState(state => ({})); ?!?!?!?!?!?!?!1111!!!1
   */
  toggleMenu = (index: number) => {
    this.navigation[index]['open'] = !this.navigation[index]['open'];
    this.setState(state => ({}));
  };

  /**
   * @desc Constructor
   * @param props
   *
   * @TODO constructor services?! TODO man...
   *
   */
  constructor(props: any) {
    super(props);

    this.navigation = this.mockService.getNavigation();

    /**
     * @desc Add subscriber to listen on sidebar service changes
     */
    SidebarService.sideBarVisibilityChange.subscribe(() => {
      this.showSidebar = SidebarService.showSidebar;
      this.setState(state => ({}));
    })
  }

  /**
   * @desc Render sidebar
   */
  public render(){
    return <div id={"simpleSidebar"} className={!this.showSidebar ? "out" : ""}>
      <h3>Übersicht</h3>
      <ul>
        {this.navigation.map((element, parentIndex) => (
          <li key={element['name'].toString()}>
            <Button variant="outline-secondary" onClick={() => {
              this.toggleMenu(parentIndex);
            }} key={element['name'].toString()}>{(parentIndex+1) + ' ' + element['name']}</Button>{' '}
            <ul className={"open_" + element['open']}>
              {element['children'].map((child, childIndex) => (
                <Link key={child['link'] + "_link"} to={child['link']}>
                  <Button variant="outline-secondary" key={child['name'].toString()}>{(parentIndex+1) + ' ' + child['name']}</Button>
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  }
}
