import {Input, Directive, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
  @Input('appRepeater') set namedAnon(repeatTimes: number) {
    this.container.clear();
    for (let i = 0; i < repeatTimes; i++) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
