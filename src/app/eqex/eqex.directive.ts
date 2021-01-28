import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[eqexHost]',
})
export class EqExDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
