import { Directive, ElementRef, Input } from '@angular/core';
declare var MathJax: any;

@Directive({
  selector: '[mathjax]',
})
export class MathJaxDirective {
  @Input('mathjax') expression?: string | number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.expression) {
      this.el.nativeElement.innerHTML = '\\(' + this.expression + '\\)';
      MathJax.typeset([this.el.nativeElement]);
    }
  }
}
