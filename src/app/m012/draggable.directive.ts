import {Directive, ElementRef, OnInit} from "@angular/core";

declare var jQuery: any;

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).draggable({
      containment: '#draggable-parent'
    });
  }

}
