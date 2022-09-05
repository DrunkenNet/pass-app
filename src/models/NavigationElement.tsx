export class NavigationElement{

  private name: string;

  private open: boolean = false;

  private link: string;

  private children: Array<NavigationElement>;

  constructor(name: string, active: boolean, link: string, children: Array<NavigationElement>) {
    this.name = name;
    this.link = link;
    this.open = active;
    this.children = children;
  }
}
