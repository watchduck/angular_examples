import {Directive, ElementRef, EventEmitter, Input, OnChanges, Output} from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appSlider]'
})
export class SliderDirective implements OnChanges {

  mySlider: any;
  @Input() value?: number;
  @Output() valueChange = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this.mySlider = jQuery(elementRef.nativeElement).slider({
      slide: (event: any, ui: any) => {
        this.valueChange.emit(ui.value)
      }
    })
  }

  ngOnChanges() {
    this.mySlider.slider('option', {value: this.value})
  }

}
