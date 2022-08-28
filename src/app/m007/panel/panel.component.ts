import {Component, ContentChild, Directive, EventEmitter, Output, ViewEncapsulation} from '@angular/core';


@Directive({
  selector: 'app-panel-header'
})
export class PanelHeaderDirective { }

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class PanelComponent {

  open = false;
  @Output() toggleEmitter = new EventEmitter<PanelComponent>();
  @ContentChild(PanelHeaderDirective) panelHeader?: PanelHeaderDirective;

  toggle() {
    this.open = !this.open;
    this.toggleEmitter.emit(this);
  }

  hasHeader() {
    return this.panelHeader !== undefined;
  }

}
