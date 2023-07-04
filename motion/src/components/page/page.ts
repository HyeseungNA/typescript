import { BaseComponent } from "./component";

export class PageComponent extends BaseComponent<HTMLUListElement>{
  constructor() {
    super('<ul clsee="page">This is PageComponent</ul>')
  }

  
}