import {Directive, ElementRef, Input, OnChanges} from "@angular/core";


@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnChanges {

  @Input('appBorder') thickness!: number;

  constructor(private elementRef: ElementRef) { }

  ngOnChanges() {
    this.elementRef.nativeElement.style.border = String(this.thickness) + 'px solid red';
    this.elementRef.nativeElement.style.padding = '3px';
    this.elementRef.nativeElement.style.color = 'green';
    this.elementRef.nativeElement.style.display = 'inline-block';
  }

}
