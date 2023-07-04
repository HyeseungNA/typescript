

//attchTo 함수를 구현하는 다른 종류의 클래스도 만들 수 있도록 인터페이스로 구현
export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition) : void;
}

//HTML elemnet 생성을 캡슐화함
export class BaseComponent<T extends HTMLElement> implements Component  {
    protected readonly element: T;
    constructor(htmlString: string) {
      const template = document.createElement('template');
      template.innerHTML = htmlString;
      this.element = template.content.firstElementChild! as T;

    }
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
      parent.insertAdjacentElement(position, this.element);
    }
}