import {Subject} from "rxjs";

export class SidebarService {

  public static showSidebar: boolean = true;

  public static sideBarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  public static toggleSidebar() {
    SidebarService.showSidebar = !SidebarService.showSidebar;
    SidebarService.sideBarVisibilityChange.next(!SidebarService.showSidebar);
  }
}
