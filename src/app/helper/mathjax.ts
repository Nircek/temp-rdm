import { Directive, ElementRef, Input } from '@angular/core';
declare var MathJax: any;

export class TexElement {
  expression: string;
  callback: Function;

  constructor(expression: string | number, callback: Function) {
    this.expression = '\\(' + expression.toString() + '\\)';
    this.callback = callback;
  }
}

export interface TexElementCallback {
  makeTexElement(expression: any): TexElement;
}

@Directive({
  selector: '[mathjax]',
})
export class MathJaxDirective {
  @Input('mathjax') texElement!: TexElement;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.texElement) {
      this.el.nativeElement.innerHTML = this.texElement.expression;
      MathJax.Hub.Queue(
        ['Typeset', MathJax.Hub, this.el.nativeElement],
        [
          () => {
            this.texElement.callback();
          },
        ]
      );
    }
  }
}
