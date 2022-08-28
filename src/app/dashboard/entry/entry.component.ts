import {Component, ContentChild, Directive, Input} from '@angular/core';


@Directive({
  selector: 'dash-header'
})
export class HeaderDirective { }


@Component({
  selector: 'dash-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {

  @Input() number!: Number;
  @ContentChild(HeaderDirective) header?: HeaderDirective;

  hasHeader() {
    return this.header !== undefined;
  }

}
